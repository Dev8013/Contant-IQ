import { Check, Star } from 'lucide-react'
import React from 'react'
import Footer from '~/components/Footer'
import Navbar from '~/components/Navbar'
import { Button } from '~/components/ui/button'
import { Card, CardHeader, CardTitle } from '~/components/ui/card'

const pricing = () => {
  return (
    <main>
    <div className='w-full min-h-screen flex flex-col relative top-20'>
      <Navbar />
      <div className='flex flex-col'>
        <div className='flex justify-center items-center text-center'>
          <p className='text-5xl font-semibold'>Simple, Transparent <b className='text-purple-600'>Pricing</b></p>
        </div>
        <div className='flex justify-center items-center text-center mt-4'>
          <p className='text-gray-600 text-lg'>Choose the plan that fits your content creation needs</p>
        </div>     
      </div>
      <div className='flex-1 flex items-center justify-center w-full p-8'>
        <div className='grid-cols-2 flex gap-6 w-full'>
          {/* Free */}
          <Card  className='w-1/3'>
            <CardHeader className='text-center'>
              <CardTitle className='font-bold text-3xl'>Free</CardTitle>
            </CardHeader>
            <CardHeader className='text-center'>
              <CardTitle className='font-bold text-xl'>$0<p className='text-lg text-gray-600'>forever</p></CardTitle>
            </CardHeader>
            <p className='text-center text-gray-600'>Perfect for trying out ContentIQ</p>
            <div className='flex flex-col pl-8'>
              <p className='flex items-center gap-2'><Check className='text-purple-600'/> content analyses</p>
              <p className='flex items-center gap-2'><Check className='text-purple-600'/> Basic quality scores</p>
              <p className='flex items-center gap-2'><Check className='text-purple-600'/> YouTube video support</p>
              <p className='flex items-center gap-2'><Check className='text-purple-600'/> PDF upload support</p>
              <p className='flex items-center gap-2'><Check className='text-purple-600'/> 7-day history retention</p>
            </div>
            <div className='w-full items-center justify-center flex'>
              <Button className='w-2/3'>Get Started</Button>
            </div>
          </Card>
          {/* BASIC */}
          <Card  className='w-1/3'>
            <CardHeader className='text-center'>
              <CardTitle className='font-bold text-3xl'>Basic</CardTitle>
            </CardHeader>
            <CardHeader className='text-center'>
              <CardTitle className='font-bold text-xl'>$9<p className='text-lg text-gray-600'>/month</p></CardTitle>
            </CardHeader>
            <p className='text-center text-gray-600'>Great for regular content creators</p>
            <div className='flex flex-col pl-8'>
              <p className='flex items-center gap-2'><Check className='text-purple-600'/> 5 content analyses per month</p>
              <p className='flex items-center gap-2'><Check className='text-purple-600'/> Basic quality scores</p>
              <p className='flex items-center gap-2'><Check className='text-purple-600'/> Detailed quality scores</p>
              <p className='flex items-center gap-2'><Check className='text-purple-600'/> YouTube video support</p>
              <p className='flex items-center gap-2'><Check className='text-purple-600'/> PDF upload support</p>
              <p className='flex items-center gap-2'><Check className='text-purple-600'/> Improvement suggestions</p>
              <p className='flex items-center gap-2'><Check className='text-purple-600'/> Content idea generation</p>
              <p className='flex items-center gap-2'><Check className='text-purple-600'/> 30-day history retention</p>
            </div>
            <div className='w-full items-center justify-center flex'>
              <Button className='w-2/3'>Start Basic</Button>
            </div>
          </Card>
          {/* PRO */}
          <Card  className='w-1/3'>
            <CardHeader className='text-center'>
              <CardTitle className='font-bold text-3xl'>Pro</CardTitle>
            </CardHeader>
            <CardHeader className='text-center'>
              <CardTitle className='font-bold text-xl'>$29<p className='text-lg text-gray-600'>/month</p></CardTitle>
            </CardHeader>
            <p className='text-center text-gray-600'>Best for professional creators</p>
            <div className='flex flex-col pl-8'>
              <p className='flex items-center gap-2'><Check className='text-purple-600'/> Unlimited analyses</p>
              <p className='flex items-center gap-2'><Check className='text-purple-600'/> Advanced AI insights</p>
              <p className='flex items-center gap-2'><Check className='text-purple-600'/> YouTube video support</p>
              <p className='flex items-center gap-2'><Check className='text-purple-600'/> PDF upload support</p>
              <p className='flex items-center gap-2'><Check className='text-purple-600'/> Priority processing</p>
              <p className='flex items-center gap-2'><Check className='text-purple-600'/> Detailed improvement suggestions</p>
              <p className='flex items-center gap-2'><Check className='text-purple-600'/> AI-powered content ideas</p>
              <p className='flex items-center gap-2'><Check className='text-purple-600'/> Unlimited history</p>
              <p className='flex items-center gap-2'><Check className='text-purple-600'/> Priority support</p>
            </div>
            <div className='w-full items-center justify-center flex'>
              <Button className='w-2/3 text-white bg-purple-600'>Go Pro</Button>
            </div>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
    </main>
  )
}

export default pricing