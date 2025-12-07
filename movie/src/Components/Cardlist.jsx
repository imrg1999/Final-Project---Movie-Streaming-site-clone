import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import card1 from '../assets/anoracard.webp'
import card2 from '../assets/mickey17_cover.avif'

const Cardlist = () => {
  const data = [
    {
      id: 1,
      title: "card 1",
      description: "description for card 1",
      imageUrl: card1
    }, 
    {
      id: 2,
      title: "card 2",
      description: "description for card 2",
      imageUrl: card2
    },
    {
      id: 3,
      title: "card 3",
      description: "description for card 3",
      imageUrl: "image 3"
    },
    {
      id: 4,
      title: "card 4",
      description: "description for card 4",
      imageUrl: "image 4"
    },
    {
      id: 5,
      title: "card 5",
      description: "description for card 5",
      imageUrl: "image 5"
    },
    {
      id: 3,
      title: "card 3",
      description: "description for card 3",
      imageUrl: "image 3"
    }
  ]
  return (
    <div className='text-white md:px-4'>
      <h2 className='pt-10 pb-5 text-lg font-medium'>Upcoming</h2>
      <Swiper slidesPerView={"auto"} spaceBetween={10} className='mySwiper'>
      {data.map((item, index) => {
        return(
          <SwiperSlide key={index} className='max-w-72'>
          <img src={item.imageUrl} alt="img" className='w-full h-44 object-center object-cover'/>
          <p className='text-center pt-2'>Movie of the year</p>
        </SwiperSlide>
        )
      })}
      </Swiper>
    </div>
  )
}

export default Cardlist