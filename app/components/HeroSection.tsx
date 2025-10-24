import React from 'react'
import Image from 'next/image'
import HeroImage from '@/app/assets/Hero-Image.png'
import { Github, Linkedin } from 'lucide-react';



const HeroSection = () => {
  return (
    <div className='h-[100vh] w-full relative flex items-center justify-center'>
      <div className='absolute inset-0 w-[34vw] h-[40vw] m-auto transparent z-4'>
        <Image src={HeroImage}  alt='Hero Image' layout='fill' objectFit='cover'  />
      </div>
      <div>
        <span className='text-[9vw] absolute left-[33%] top-[15%] font-[hunters] '><h1>I</h1></span>
        <span className='text-[9vw] absolute left-[60%] top-[15%] font-[hunters] '><h1>AM</h1></span>
        <span className='text-[9vw] absolute left-[20%] top-[44%] font-[hunters] z-6'><h1>WEB <span className='text-chart-2'>DEVELOPER</span></h1></span>
      </div>
      <div className='absolute flex flex-col gap-[1vw] right-[4vw]'>
        <button className='bg-black dark:bg-chart-1 rounded-full p-2'><Github className='text-[5vw] text-white dark:text-black' /></button>
        <button className='bg-black dark:bg-chart-1 rounded-full p-2'><Linkedin className='text-[5vw] text-white dark:text-black' /></button>
      </div>
    </div>
  )
}

export default HeroSection