import React from 'react'
import Hero from '../Components/Hero'
import Cardlist from '../Components/Cardlist'

const Homepage = () => {
  return (
    <div className='p-5'>
        <Hero />
        <Cardlist />
        <Cardlist />
        <Cardlist />
        <Cardlist />
    </div>
  )
}

export default Homepage