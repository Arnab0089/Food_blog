import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero/Hero'
import Service from './Components/Service/Service'

export default function App() {
  return (
    <div className='bg-white dark:bg-gray-800'>
      <Navbar/>
      <Hero/>
      <Service/>
    </div>
  )
}
