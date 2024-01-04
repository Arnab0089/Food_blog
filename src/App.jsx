import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero/Hero'
import Service from './Components/Service/Service'
import Banner from './Components/Banner/Banner'
import AppStore from './Components/AppStore/AppStore'
import Testimonial from './Components/Testimonial/Testimonial'
import Footer from './Components/Footer/Footer'

import "aos/dist/aos.css"
import AOS from 'aos'

export default function App() {
  React.useEffect(()=>{
    AOS.init({
      offset:100,
      duration:500,
      easing:"ease-in-sine",
      delay:100,
    })
    AOS.refresh();
  },[]);
  
  return (
    <div className='bg-white dark:bg-gray-700'>
      <Navbar/>
      <Hero/>
      <Service/>
      <Banner/>
      <AppStore/>
      <Testimonial/>
      <Footer/>
    </div>
  )
}
