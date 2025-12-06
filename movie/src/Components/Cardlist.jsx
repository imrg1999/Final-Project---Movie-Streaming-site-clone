import React from 'react'
import card1 from '../assets/anoracard.webp'

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
      imageUrl: "image 2"
    }
  ]
  return (
    <div className='text-white md:px-4'>
      <h2 className='pt-10 pb-5 text-lg font-medium'>Upcoming</h2>
      <div className='flex'>
      {data.map((item) => {
        return(
          <div key={item.id}>
          <img src={card1} alt="img" />
          <h2>Movie of the year</h2>
        </div>
        )
      })}
      </div>
    </div>
  )
}

export default Cardlist