import { ChevronLeft } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router'
import { LoginForm } from '~/components/login-form'

const auth = () => {
  return (
    <div className='flex justify-center items-center w-full min-h-screen'>
      
      <div className='w-1/3'>
        <p className='mb-6 flex'><ChevronLeft /><Link to='/'>Back to Home</Link></p>
        <LoginForm className=''/>
      </div>
      
    </div>
  )
}

export default auth