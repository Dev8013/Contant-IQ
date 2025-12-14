import { ToolCase } from 'lucide-react'
import React from 'react'

const Footer = () => {
  return <footer className='w-full glass p-4 justify-center bg-black text-white'>
    <div className='flex w-full pl-20'>
        {/* section 1 */}
        <div className='w-1/2'>
            <div className='flex p-2 gap-2'>
                <ToolCase className='icon'/>
                <h2 className='font-semibold text-2xl'>Content IQ</h2>
            </div>

            <p className='text-sm px-2 text-gray-400'>AI-powered content analysis for YouTube videos and PDFs. Get insights, scores, and actionable suggestions to improve your content.</p>

        </div>
        {/* Section 2 */}
        <div className='w-1/2'>
        <h2 className='font-semibold text-2xl p-2'>Product</h2>
            <div className='flex flex-col text-sm text-gray-400 px-2'>           
                <span>Pricing</span>
                <span>Analyze Content</span>
                <span>Analysis History</span>
            </div>

        </div>
        {/* Section 3 */}
        <div className='w-1/2'>
            <h2 className='font-semibold text-2xl p-2'>Company</h2>
            <div className='flex flex-col text-sm text-gray-400 px-2'>     
                <span>Contact</span>
                <span>Privacy Policy</span>
                <span>Terms of Service</span>
            </div>

        </div>
    </div>
    <div>

    </div>
    <div className='flex items-center justify-center w-full pt-6'>
        <p className='text-gray-300'>© 2025 ContentIQ. All rights reserved.</p>
    </div>
  </footer>
}

export default Footer