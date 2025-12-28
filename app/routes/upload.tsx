import { SparkleIcon } from 'lucide-react'
import React, { useCallback, useState, type FormEvent } from 'react'
import Footer from '~/components/Footer'
import Navbar from '~/components/Navbar'
import { Button } from '~/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '~/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '~/components/ui/tabs'
import { useDropzone } from 'react-dropzone'
import { usePuterStore } from '~/lib/puter'
import { useNavigate } from 'react-router'
import { convertPdfToImage } from '~/lib/pdf2img'

// If you use TypeScript, declare puter on window:
// declare global {
//   interface Window {
//     puter?: any
//   }
// }

const Upload = () => {
  const {fs, isLoading, auth, ai, kv} = usePuterStore();
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false)
  const [file, setFile] = useState<File | null>(null)
  const [statusText, setStatusText] = useState('')
  const [youtubeUrl, setYoutubeUrl] = useState('')

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const selected = acceptedFiles[0] ?? null
    setFile(selected)
    if (selected) {
      setStatusText(`Selected file: ${selected.name}`)
    } else {
      setStatusText('')
    }
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: false,
    accept: { 'application/pdf': ['.pdf'] },
    maxSize: 20 * 1024 * 1024,
  })

  const handleAnalyze = async({file}: {file: File}) => {
    // Placeholder for analyze logic
    setIsProcessing(true)
    setStatusText('Analyzing content with AI...')
    const uploadedFile = await fs.upload([file]);

    if(!uploadedFile) return setStatusText('Failed to upload file for analysis.');

    setStatusText('File uploaded. Processing with AI...');
    const imageFile = await convertPdfToImage(file);

    if(!imageFile.file) return setStatusText('Failed to convert PDF to image.');

    setStatusText('Analysis complete! Redirecting...');

    const uploadedImage = await fs.upload([imageFile.file]);

    if(!uploadedImage) return setStatusText('Failed to upload converted image.');

    setStatusText('Analysis complete! Redirecting...');

    const uuid = crypto.randomUUID();

    const data = {
      id: uuid,
      resumePath: uploadedFile.path,
      imagePath: uploadedImage.path,
      feedback: '',
    }
    await kv.set(`resume:${uuid}`, JSON.stringify(data));

    const feedback = await ai.feedback(
      uploadedFile.path,
      `You are an expert in Content Analyzer For youtube, Ticktok, and Instagram.
  Please analyze and rate the Content and suggest how to improve it.
  The rating can be low if the Content is bad.
  Be thorough and detailed. Don't be afraid to point out any mistakes or areas for improvement.
  If there is a lot to improve, don't hesitate to give low scores. This is to help the user to improve their content.
  If available, use the youtube url for the job user is applying to to give more detailed feedback.
  If provided, take the youtube url  into consideration.
  Return the analysis as a JSON object, without any other text and without the backticks.
  Do not include any other text or comments.`
    )
    if(!feedback) return setStatusText('AI analysis failed.');
    
    const feedbackText = typeof feedback.message.content === 'string' ? feedback.message.content : feedback.message.content[0].text;
    data.feedback = JSON.parse(feedbackText);
    await kv.set(`resume:${uuid}`, JSON.stringify(data));
    setStatusText('Analysis complete! Redirecting...');
    console.log(data)
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // If user is on YouTube tab, you can handle URL here instead of file.
    // For now, just log it.
    if (!file) {
      console.log('YouTube URL:', youtubeUrl)
      return
    }

    handleAnalyze({file});

    if (!window.puter || !window.puter.fs || !window.puter.fs.upload) {
      console.error('Puter.js is not loaded')
      setStatusText('Error: Puter.js is not available')
      return
    }

    try {
      setIsProcessing(true)
      setStatusText('Uploading to Puter...')

      // puter.fs.upload accepts FileList | File[] | Blob[] etc. [web:6][web:15]
      const uploaded = await window.puter.fs.upload([file])

      // uploaded is usually an array of file objects; take the first one. [web:15][web:17]
      const uploadedFile = Array.isArray(uploaded) ? uploaded[0] : uploaded

      console.log('Uploaded file info:', uploadedFile)
      setStatusText(`Uploaded! Path: ${uploadedFile.path}`)
    } catch (err) {
      console.error(err)
      setStatusText('Upload failed. Please try again.')
    } finally {
      setIsProcessing(false)
    }
  }

  return (
    <main>
      <div className="w-full min-h-screen flex flex-col relative top-20 gap-4">
        <Navbar />

        <div className="flex flex-col justify-center items-center text-center gap-2 absolute left-0 right-0 top-10">
          <p className="text-6xl font-bold">
            Analyze Your <span className="text-purple-600">Content</span>
          </p>
          <p className="text-gray-600">
            Upload a YouTube video or PDF and let AI analyze it
          </p>
        </div>

        <div className="flex-1 flex items-center justify-center w-full">
          <div className="flex items-center justify-center w-full">
            {isProcessing ? (
              <div className="w-full flex justify-center items-center flex-col">
                <h2>{statusText}</h2>
                <img src="/images/resume-scan.gif" alt="" className="h-50" />
              </div>
            ) : null}

            {!isProcessing && (
              <form onSubmit={handleSubmit}>
                <Tabs defaultValue="youtubeVideo" className="flex items-center">
                  <TabsList className="gap-4">
                    <TabsTrigger value="youtubeVideo" className="bg-purple-600 p-4">
                      YouTube Video
                    </TabsTrigger>
                    <TabsTrigger value="pdfDocument" className="bg-purple-600 p-4">
                      PDF Document
                    </TabsTrigger>
                  </TabsList>

                  {/* YouTube tab */}
                  <TabsContent value="youtubeVideo">
                    <Card className="p-6 mt-2 w-full">
                      <CardHeader className="mt-2">
                        <CardTitle className="font-bold">YouTube URL</CardTitle>
                      </CardHeader>
                      <CardContent className="grid gap-6">
                        <div className="grid gap-3">
                          <input
                            className="border p-4 rounded-sm"
                            type="text"
                            placeholder="https://www.youtube.com/watch?v="
                            value={youtubeUrl}
                            onChange={(e) => setYoutubeUrl(e.target.value)}
                            name="youtubeUrl"
                          />
                        </div>
                      </CardContent>
                      <CardDescription className="px-6">
                        Paste any YouTube video URL and we&apos;ll analyze its content,
                        engagement potential, and structure.
                      </CardDescription>
                      <Button type="submit" className="text-white bg-purple-600 p-6">
                        <SparkleIcon className="mr-2" />
                        Analyze Content
                      </Button>
                    </Card>
                  </TabsContent>

                  {/* PDF tab */}
                  <TabsContent value="pdfDocument">
                    <Card className="p-6 mt-2">
                      <CardHeader className="mt-2">
                        <CardTitle className="font-bold">PDF Document</CardTitle>
                      </CardHeader>
                      <CardContent className="grid gap-6">
                        <div
                          {...getRootProps({
                            className:
                              'border-dashed border-2 rounded-md p-6 flex flex-col items-center justify-center cursor-pointer',
                          })}
                        >
                          <input {...getInputProps()} />
                          <p className="text-sm text-gray-600">
                            {isDragActive
                              ? 'Drop the PDF here ...'
                              : file
                              ? `Selected: ${file.name}`
                              : 'Drag & drop a PDF here, or click to browse (max 20MB)'}
                          </p>
                        </div>
                      </CardContent>
                      <CardDescription className="px-6">
                        Drop your PDF here or click to browse and we&apos;ll analyze content,
                        engagement and structure.
                      </CardDescription>
                      <Button
                        type="submit"
                        className="text-white bg-purple-600 p-6"
                        disabled={!file}
                      >
                        <SparkleIcon className="mr-2" />
                        Analyze Content
                      </Button>
                    </Card>
                  </TabsContent>
                </Tabs>
                {statusText && !isProcessing && (
                  <p className="mt-4 text-center text-sm text-gray-700">{statusText}</p>
                )}
              </form>
            )}
          </div>
        </div>

        <Footer />
      </div>
    </main>
  )
}

export default Upload
