import { FileIcon, SparkleIcon, UploadIcon } from 'lucide-react'
import React from 'react'
import Footer from '~/components/Footer'
import Navbar from '~/components/Navbar'
import { Button } from '~/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '~/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '~/components/ui/tabs'

const upload = () => {
  return (
    <main>
        <div className='w-full min-h-screen flex flex-col relative top-20 gap-4'>
            <Navbar />
            <div className='flex flex-col justify-center items-center text-center gap-2 absolute left-0 right-0 top-10'>
                <p className='text-6xl font-bold'>Analyze Your <span className='text-purple-600'>Content</span></p>
                <p className='text-gray-600'>Upload a YouTube video or PDF and let AI analyze it</p>
            </div>
            <div className='flex-1 flex items-center justify-center w-full'>
                <div className='flex items-center justify-center w-full'>
                    <Tabs defaultValue='youtubeVideo' className='flex items-center'>
                        <TabsList className='gap-4'>
                            <TabsTrigger value='youtubeVideo' className=' bg-purple-600 p-4'>YouTube Video</TabsTrigger>
                            <TabsTrigger value='pdfDocument' className='bg-purple-600 p-4'>PDF Document</TabsTrigger>
                        </TabsList>
                        <TabsContent value='youtubeVideo'>
                            <Card className='p-6 mt-2 w-full'>
                                <CardHeader className='mt-2'>
                                    <CardTitle className='font-bold'>YouTube URL</CardTitle>
                                </CardHeader>
                                <CardContent className='grid gap-6'>
                                    <div className='grid gap-3'>
                                        <input className='border p-4 rounded-sm' type="text" placeholder='https://www.youtube.com/watch?v'/>
                                    </div>
                                </CardContent>
                                <CardDescription className='px-6'>Paste any YouTube video URL and we'll analyze its content, engagement potential, and structure.</CardDescription>
                                <Button className='text-white bg-purple-600 p-6'><SparkleIcon />Analyze Content</Button>
                            </Card>
                        </TabsContent>
                        <TabsContent value='pdfDocument'>
                            <Card className='p-6 mt-2'>
                                <CardHeader className='mt-2'>
                                    <CardTitle className='font-bold'>PDF Document</CardTitle>
                                </CardHeader>
                                <CardContent className='grid gap-6'>
                                    <div className='grid gap-3'>
                                        <input className='border p-4 rounded-sm' type='file' placeholder=''/>
                                    </div>
                                </CardContent>
                                <CardDescription className='px-6'>Drop your PDF here or click to browse and and we'll analyze content, engagement and structure.</CardDescription>
                                <Button className='text-white bg-purple-600 p-6'><SparkleIcon />Analyze Content</Button>
                            </Card>
                        </TabsContent>
                    </Tabs>
                </div>
            </div>
            <Footer />
        </div>   
    </main>
  )
}

export default upload