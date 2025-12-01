import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-black text-gray-200 flex justify-between items-center p-4
    h-20 text-sm md:text-[15px] font-medium text-nowrap'>
        <label> Logo </label>
        <ul className='hidden xl:flex gap-6'>
            <li className='cursor-pointer hover:text-[#e50914]'>Home</li>
            <li className='cursor-pointer hover:text-[#e50914]'>TV Shows</li>
            <li className='cursor-pointer hover:text-[#e50914]'>Movies</li>
            <li className='cursor-pointer hover:text-[#e50914]'>Anime</li>
            <li className='cursor-pointer hover:text-[#e50914]'>Games</li>
            <li className='cursor-pointer hover:text-[#e50914]'>New & Popular</li>
            <li className='cursor-pointer hover:text-[#e50914]'>Upcoming</li>
        </ul>

        <div className='flex items-center gap-4 relative'>
            <div className='relative hidden md:inline-flex'>
                <input type="text" placeholder='Search...' className='bg-[#333333] px-4 py-2
                rounded-full min-w-72 pr-10 outline-none'/>
                search-icon
            </div>

            <button>Get AI Movie Picks</button>
            <button>Sign In</button>
        </div>
    </nav>
  )
}

export default Navbar