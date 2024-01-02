import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero/Hero'
import Service from './Components/Service/Service'
import Banner from './Components/Banner/Banner'

export default function App() {
  return (
    <div className='bg-white dark:bg-gray-700'>
      <Navbar/>
      <Hero/>
      <Service/>
      <Banner/>
    </div>
  )
}
