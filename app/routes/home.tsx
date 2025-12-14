import { Button } from "~/components/ui/button";
import type { Route } from "./+types/home";
import Navbar from "../components/Navbar";
import { BarChart3, CheckCircle, ChevronRight, FileText, Lightbulb, PlayCircle, TrendingUp, Youtube } from "lucide-react";
import Footer from "~/components/Footer";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Contant IQ" },
    { name: "The only AI you need in your Job", content: "Welcome to Contant IQ!" },
  ];
}

export default function Home() {
  return <main className="">
    <Navbar />
    <section className="min-h-screen ">
      {/* Page Heading DIV */}
      <div className="text-7xl font-semibold justify-center text-center mt-32 space-y-4">
        <h1>Transform Your Content</h1>
        <h1>with <b className="text-purple-600">AI Intelligence</b></h1>
      </div>
      {/* Disc */}
      <div className="text-xl text-gray-500 justify-center text-center mt-4">
        <p>Upload YouTube videos or PDFs and get instant AI analysis with quality</p>
        <p>scores, improvement suggestions, and fresh content ideas.</p>
      </div>
      {/* Buttons */}
      <div className="flex items-cente justify-center mt-4 gap-2">
        <Button className="bg-purple-600 p-6">Start Analyzing For Free <ChevronRight /></Button>
        <Button className="p-6">View Pricing</Button>
      </div>
      {/* Middle Div */}
      <div className="font-semibold justify-center text-center mt-20 space-y-4">
        <h2 className="text-4xl">Powerful Analysis Features</h2>
        <p className="text-sm text-gray-500">Get comprehensive insights into your content quality and actionable recommendations.</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {/* Feature 1 */}
        <div className="p-4 m-4 border rounded-lg shadow-lg">
          <Youtube className="icon mb-2"/>
          <h3 className="text-2xl font-semibold mb-2">Youtube Analysis</h3>
          <p className="text-gray-500">Analyze any YouTube video for engagement, clarity, and content structure.</p>
        </div>
        {/* Feature 2 */}
        <div className="p-4 m-4 border rounded-lg shadow-lg">
          <FileText className="icon mb-2"/>
          <h3 className="text-2xl font-semibold mb-2">PDF Analysis</h3>
          <p className="text-gray-500">Upload documents and get instant quality assessments and suggestions.</p>
        </div>
        {/* Feature 3 */}
        <div className="p-4 m-4 border rounded-lg shadow-lg">
          <BarChart3 className="icon mb-2"/>
          <h3 className="text-2xl font-semibold mb-2">Quality Scores</h3>
          <p className="text-gray-500">Receive detailed scores for engagement, clarity, structure, and originality.</p>
        </div>
        {/* Feature 4 */}
        <div className="p-4 m-4 border rounded-lg shadow-lg">
          <Lightbulb className="icon mb-2"/>
          <h3 className="text-2xl font-semibold mb-2">New Ideas</h3>
          <p className="text-gray-500">Get AI-generated content ideas based on your material's themes.</p>
        </div>
        {/* Feature 5 */}
        <div className="p-4 m-4 border rounded-lg shadow-lg">
          <TrendingUp className="icon mb-2"/>
          <h3 className="text-2xl font-semibold mb-2">Improvements</h3>
          <p className="text-gray-500">Specific actionable suggestions to enhance your content quality.</p>
        </div>
        {/* Feature 6 */}
        <div className="p-4 m-4 border rounded-lg shadow-lg">
          <CheckCircle className="icon mb-2"/>
          <h3 className="text-2xl font-semibold mb-2">History Tracking</h3>
          <p className="text-gray-500">Save and track all your analyses to monitor content improvement over time.</p>
        </div>  
      </div>
    </section>
    <Footer />
  </main>
}
