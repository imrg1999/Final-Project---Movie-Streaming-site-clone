import { useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import { Play } from 'lucide-react';
import { Link } from 'react-router-dom';

const MoviePage = () => {

    const {id} = useParams();
    const [movie, setMovie] = useState(null);
    const [recommendations, setRecommendations] = useState([]);
    const [trailer, setTrailer] = useState(null);

 const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZTVjMTU3NDk2ODNkODRlMzFiMWRkZmViMjhlOGJmYiIsIm5iZiI6MTc2NTI3MzQwNS4zNDksInN1YiI6IjY5MzdlZjNkNTA0MzFkY2Y4OGY3Y2Q0MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5oISKfZkauCFXNq_sP4_EvtweqdB6H_nlWwZF6MndCQ'
  }
};



useEffect(() => {
fetch(`https://api.themoviedb.org/3/movie/${id}`, options)
  .then(res => res.json())
  .then(res => setMovie(res))
  .catch(err => console.error(err));

  fetch(`https://api.themoviedb.org/3/movie/${id}/recommendations?language=en-US&page=1`, options)
  .then(res => res.json())
  .then(res => setRecommendations(res.results || []))
  .catch(err => console.error(err));

  fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
  .then(res => res.json())
  .then(res => {
    const trailer = res.results?.find((vid) => vid.site === "YouTube" && vid.type === "Trailer")
    setTrailer(trailer?.key || null)
  })
  .catch(err => console.error(err));
},[id])

if(!movie) {
  return <p className='flex items-center justify-center h-screen'>
    <span className='text-xl text-red-500'>Loading...</span>
    </p>
}

  return (
    <div className='min-h-screen bg-[#181818] text-white'>
      <div className='relative h-[60vh] flex item-end' style={
        {backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`,
      backgroundSize: "cover", backgroundPosition: "center"}
        }>

       <div className='absolute inset-0 bg-gradient-to-t from-[#181818] via-transparent
       to-transparent'></div>

       <div className='relative z-10 flex items-end p-8 gap-8'>
        <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
        className='rounded-lg shadow-lg w-48 pb-2 hidden md:block' />

        <div>
          <h2 className='text-4xl font-bold'>{movie.title}</h2>
          <div className='flex items-center gap-4'>
            <span>⭐ {movie.vote_average?.toFixed(1)}</span>
            <span>Release Date: {movie.release_date}</span>
            <span>{movie.runtime} min</span>
          </div>

          <div className='flex flex-wrap gap-2'>
            {movie.genres.map((genre) => (
              <span className='bg-gray-800 px-3 py-1 rounded-full'>
                {genre.name}</span>
            ))}
          </div>
          <p className='max-w-2xl'>Summary: {movie.overview}</p>
          <Link to={`https://www.youtube.com/watch?v=${trailer}`} target='_blank'>
          <button className='flex justify-center items-center bg-[#e50914] hover:bg-gray-200 text-white
            py-3 px-4 rounded cursor-pointer text-sm md:text-base'> <Play className='mr-2 w-4 h-5 md:w-5
            md:h-5 mt-2 md:mt-4 '/> Watch Now</button>
            </Link>
        </div>
       </div>

      </div>

      <div className='p-8'>
        <h2 className='text-2xl font-semibold mb-4 ml-12'>Details:</h2>
        <div className='bg-[#232323] rounded-lg shadow-lg p-6 flex flex-col
        md:flex-row gap-8'>
          <div className='flex-1'>
            <ul className='text-gray-300 space-y-3'>
              <li>
                <span>Status: {movie.status}</span>
              </li>

              <li>
                <span>Release Date: {movie.release_date}</span>
              </li>

              <li>
                <span>Original Language: {movie.original_language?.toUpperCase()}</span>
              </li>

              <li>
                <span>Budget: {movie.budget ? `$${movie.budget.toLocaleString()}` : "N/A"}</span>
              </li>

              <li>
                <span>Revenue: {movie.revenue ? `$${movie.revenue.toLocaleString()}` : "N/A"}</span>
              </li>

              
            </ul>
          </div>
          <div className='flex-1'>
                <p className='font-semibold text-gray-300'>Tagline: {movie.tagline || "No Tagline Available"}</p>

                <h5 className='font-semibold'>Overview:</h5>
                <p>{movie.overview}</p>
          </div>
        </div>
      </div>
      {recommendations.length > 0 && (
        <div className='p-8'>
          <h4 className='text-2xl font-semibold'>You might also like...</h4>

          <div className='flex md:grid-col-5 gap-4'>
            {recommendations.slice(0,10).map((recom) => (
              <div key={recom.id} className='bg-[#232323]'>
                <Link to={`/movie/${recom.id}`}>
                <img src={`https://image.tmdb.org/t/p/w300${recom.poster_path}`} 
                className='object-cover'/>
                <div className='p-2'>
                  <h6 className='text-sm font-semibold text-white'>{recom.title}</h6>
                  <span className='text-sm text-gray-400'>{recom.release_date?.slice(0, 4)}</span>
                </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default MoviePage