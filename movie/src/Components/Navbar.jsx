import { Search } from 'lucide-react'
import logo from "../assets/netflix-logo.png";
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav className='bg-black text-gray-200 flex justify-between items-center p-4
    h-20 text-sm md:text-[15px] font-medium text-nowrap'>
       <a href="#">
        <Link to={'/'}>
  <img src={logo} alt="logo" className="w-40 cursor-pointer" />
  </Link>
       </a>

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
                <Search className='absolute top-2 right-4 w-5 h-5' />
            </div>

            {/*<button className='bg-[#e50914] px-5 py-2 text-white cursor-pointer'>Get AI Movie Picks</button>*/}
            <Link to={'/signin'}>
            <button className='border border-[#333333] px-4 py-2 cursor-pointer hover:bg-[#e50914]'>Sign In</button>
            </Link>
        </div>
    </nav>
  )
}

export default Navbar