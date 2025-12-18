import { File } from 'lucide-react'
import React from 'react'
import Footer from '~/components/Footer'
import Navbar from '~/components/Navbar'
import { Button } from '~/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '~/components/ui/card'

const history = () => {
  return (
        <main>
        <div className='w-full min-h-screen flex flex-col relative top-20 gap-4'>
            <Navbar />
            <div className='flex items-center justify-between p-4'>
                <div className='flex flex-col'>
                    <p className='text-4xl font-bold'>Analysis <span className='text-purple-600'>History</span></p>
                    <p className='text-gray-500'>View all your past content analyses</p>
                </div>
                <div className='flex'>
                    <Button className='bg-purple-600 text-white p-6'>New Analysis</Button>
                </div>
            </div>    
            <div className='flex flex-1 w-full justify-center'>
                <Card className='w-full m-4'>
                    <CardHeader>
                        <CardTitle>

                        </CardTitle>
                        <CardContent className='flex flex-col gap-2 mt-10 items-center justify-center text-center'>
                            <File/>
                            <p className='text-3xl font-bold'>No History Yet</p>
                            <p className='text-gray-500'>Start analyzing your content to see your history here</p>
                            <Button className='bg-purple-600 text-white p-6'>Analyze Content</Button>
                        </CardContent>
                    </CardHeader>
                </Card>
            </div>
        <Footer />         
        </div>
    </main>
  )
}

export default history