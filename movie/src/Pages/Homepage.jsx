import React from 'react'
import Hero from '../Components/Hero'
import Cardlist from '../Components/Cardlist'
import Footer from '../Components/Footer'

const Homepage = () => {
  return (
    <div className='p-5'>
        <Hero />
        <Cardlist title="Now Playing" category="now_playing"/>
        <Cardlist title="Top Rated" category="top_rated"/>
        <Cardlist title="Popular" category="popular"/>
        <Cardlist title="Upcoming" category="upcoming"/>
        <Footer />
    </div>
  )
}

export default Homepage