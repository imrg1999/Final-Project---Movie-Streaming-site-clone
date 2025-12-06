import React from 'react'
import Anora from '../assets/Anora.webp'
import { Bookmark, Play } from 'lucide-react'

const Hero = () => {
  return (
    <div className='text-white relative'>
        <img src={Anora} alt="Anora" className='w-full h-[600px] object-center object-cover'/>

        <div className='flex gap-4 md:space-x-4 absolute bottom-3 left-4
        md:bottom-8 md:left-10 font-medium'>
            <button className='flex justify-center items-center bg-white hover:bg-gray-200 text-[#e50914]
            py-3 px-4 rounded cursor-pointer text-sm md:text-base'> <Bookmark className='mr-2 w-4 h-5 md:w-5
            md:h-5'/> Save For Later</button>
            <button className='flex justify-center items-center bg-[#e50914] hover:bg-gray-200 text-white
            py-3 px-4 rounded cursor-pointer text-sm md:text-base'> <Play className='mr-2 w-4 h-5 md:w-5
            md:h-5'/> Watch Now</button>
        </div>
    </div>
  )
}

export default Hero