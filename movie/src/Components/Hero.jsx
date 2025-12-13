import React, { useEffect, useState } from 'react'
import Anora from '../assets/Anora.webp'
import { Bookmark, Play } from 'lucide-react'
import { Link } from 'react-router-dom'

const Hero = () => {
  const[movie, setMovie] = useState(null);
  const options = {method: 'GET', headers: {accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZTVjMTU3NDk2ODNkODRlMzFiMWRkZmViMjhlOGJmYiIsIm5iZiI6MTc2NTI3MzQwNS4zNDksInN1YiI6IjY5MzdlZjNkNTA0MzFkY2Y4OGY3Y2Q0MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5oISKfZkauCFXNq_sP4_EvtweqdB6H_nlWwZF6MndCQ'
  }};

  useEffect(() => {
fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', options)
  .then(res => res.json())
  .then(res => {
    if(res.results && res.results.length > 0) {
      const randomIndex = Math.floor(Math.random() * res.results.length)
      setMovie(res.results[randomIndex])
    }
  })
  .catch(err => console.error(err));
  },[])

if(!movie) {
  return <p><span>Loading...</span></p>
}

  return (
    <div className='text-white relative '>
        <img src={`https://images.tmdb.org/t/p/original/${movie.backdrop_path}`} alt="Anora" className='w-full h-[620px] object-center object-cover'/>

        <div className='flex gap-4 md:space-x-4 absolute bottom-3 left-4
        md:bottom-8 md:left-10 font-medium '>
            <button className='flex justify-center items-center bg-white hover:bg-gray-200 text-[#e50914]
            py-3 px-4 rounded cursor-pointer text-sm md:text-base'> <Bookmark className='mr-2 w-4 h-5 md:w-5
            md:h-5'/> Save For Later</button>
            
          <Link to={`/movie/${movie.id}`}>
            <button className='flex justify-center items-center bg-[#e50914] hover:bg-gray-200 text-white
            py-3 px-4 rounded cursor-pointer text-sm md:text-base'> <Play className='mr-2 w-4 h-5 md:w-5
            md:h-5 '/> Watch Now</button>
            </Link>
        </div>
    </div>
  )
}

export default Hero