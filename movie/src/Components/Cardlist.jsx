import { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import card1 from '../assets/anoracard.webp'
import card2 from '../assets/mickey17_cover.avif'

const Cardlist = ({title, category}) => {

  const [data, setData] = useState([]);
  
 const options = {method: 'GET', headers: {accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZTVjMTU3NDk2ODNkODRlMzFiMWRkZmViMjhlOGJmYiIsIm5iZiI6MTc2NTI3MzQwNS4zNDksInN1YiI6IjY5MzdlZjNkNTA0MzFkY2Y4OGY3Y2Q0MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5oISKfZkauCFXNq_sP4_EvtweqdB6H_nlWwZF6MndCQ'
  }};

  useEffect(() => {
fetch(`https://api.themoviedb.org/3/movie/${category}?language=en-US&page=1`, options)
  .then(res => res.json())
  .then(res => {
    
      setData(res.results)

  })
  .catch(err => console.error(err));
  },[])

  
  return (
    <div className='text-white md:px-4'>
      <h2 className='pt-10 pb-5 text-lg font-medium'>{title}</h2>
      <Swiper slidesPerView={"auto"} spaceBetween={10} className='mySwiper'>
      {data.map((item, index) => {
        return(
          <SwiperSlide key={index} className='max-w-72'>
          <img src={`https://images.tmdb.org/t/p/w500/${item.backdrop_path}`} alt="img" className='w-full h-44 object-center object-cover'/>
          <p className='text-center pt-2'>{item.original_title}</p>
        </SwiperSlide>
        )
      })}
      </Swiper>
    </div>
  )
}

export default Cardlist