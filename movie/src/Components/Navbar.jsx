import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-black text-gray-200 flex justify-between items-center p-4
    h-20 text-sm md:text-[15px] font-medium text-nowrap'>
        <label> Logo </label>
        <ul className='hidden xl:flex gap-6'>
            <li>Home</li>
            <li>TV Shows</li>
            <li>Movies</li>
            <li>Anime</li>
            <li>Games</li>
            <li>New & Popular</li>
            <li>Upcoming</li>
        </ul>

        <div>
            <div>
                <input type="text" placeholder='Search...'/>
                search-icon
            </div>

            <button>Get AI Movie Picks</button>
            <button>Sign In</button>
        </div>
    </nav>
  )
}

export default Navbar