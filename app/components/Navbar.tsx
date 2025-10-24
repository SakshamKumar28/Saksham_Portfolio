import React from 'react'
import { ModeToggle } from '@/app/utils/ModeToggle';
import LogoDark from '@/public/logo-dark.png';
import Image from 'next/image';
import LogoLight from '@/public/logo-light.png';

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center px-2  sm:px-4 md:px-2 lg:px-5  sm:h-15 md:h-16 w-full py-1.5 sm:py-3'>
        <div className='flex items-center h-[4vw] overflow-hidden'>
          <Image 
            src={LogoDark} 
            alt="Logo" 
            className='hidden dark:block h-12 w-6 sm:h-16 sm:w-8 md:h-20 md:w-10 lg:h-24 lg:w-12 object-contain' 
          />
          <Image 
            src={LogoLight} 
            alt="Logo" 
            className='block dark:hidden h-12 w-6 sm:h-16 sm:w-8 md:h-20 md:w-10 lg:h-24 lg:w-12 object-contain' 
          />
        </div>
        <div className='flex items-center gap-6 sm:gap-8 md:gap-10 lg:gap-12 font-medium'>
            {/* NavLinks*/}
            <ul className='flex gap-3 md:gap-4'>
                <li className='font-hunters'>Home</li>
                <li>About</li>
                <li>Projects</li>
                <li>Contact</li>
            </ul>
            <ModeToggle />
        </div>
    </nav>
  )
}

export default Navbar