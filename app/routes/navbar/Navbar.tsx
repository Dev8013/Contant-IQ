import { ToolCase } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router'
import { Button } from '~/components/ui/button'

const Navbar = () => {
  return (
    <nav  className='fixed bg-white top-0 left-0 w-full shadow-md z-40 p-2 h-16 '>
        <div className='flex justify-between items-center'>
            <ul className='flex items-center gap-2'>
               <ToolCase className='icon'/>
               <li>Contant IQ</li> 
            </ul>
            <ul className='flex items-center gap-4'>
                <Link to="/home">Home</Link>
                <Link to="/about">Pricing</Link>
                <Link to="/contact">Contact</Link>
            </ul>
            <ul className='flex  items-center gap-2'>
                <Link to="/Sign-In">Sign In</Link>
                <Button className='px-2 py-6'>Get Started</Button>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar