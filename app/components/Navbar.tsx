import { ToolCase } from 'lucide-react'
import React, { useEffect } from 'react'
import { Link } from 'react-router'
import { Button } from '~/components/ui/button'
import { usePuterStore } from '~/lib/puter'

const Navbar = () => {
  const {auth} = usePuterStore();
  return (
    <nav  className='fixed bg-white top-0 left-0 w-full shadow-md z-40 p-2 h-16 '>
        <div className='flex justify-between items-center'>
            <ul className='flex items-center gap-2'>
               <ToolCase className='icon'/>
               <li className='font-bold'>Content IQ</li> 
            </ul>
            {/* <ul className='flex items-center gap-4'>
                <Link to="/">Home</Link>
                <Link to="/pricing">Pricing</Link>
                <Link to="/contact">Contact</Link>
            </ul> */}
            {
              auth.isAuthenticated? (
                <ul className='flex items-center gap-4'>
                  <Link to="/">Home</Link>
                  <Link to="/pricing">Pricing</Link>
                  <Link to="/contact">Contact</Link>
                  <Link to="/upload">Upload</Link>
                  <Link to="/history">History</Link>
            </ul>
              ): (
                <ul className='flex items-center gap-4'>
                  <Link to="/">Home</Link>
                  <Link to="/pricing">Pricing</Link>
                  <Link to="/contact">Contact</Link>
                </ul>
              )
            }
            {/* <ul className='flex  items-center gap-2'>
              {auth.isAuthenticated ? (
                <Link to="/auth">Sign In</Link>
                <Button className='px-2 py-6'>Log Out</Button>
              ):(
                <Link to="/auth">Sign In</Link>
                <Button className='px-2 py-6'>Get Started</Button>
              )}
            </ul> */}
            {
              auth.isAuthenticated? (
                <ul className='flex items-center gap-2'>
                  <Button onClick={auth.signOut} className='px-2 py-6'>Log Out</Button>
                </ul>
              ): (
                <ul className='flex items-center gap-2'>
                  <Button className='px-2 py-6'>
                    <Link to="/auth">Get Started</Link>
                  </Button>
                </ul>
              )
            }
        </div>
    </nav>
  )
}

export default Navbar