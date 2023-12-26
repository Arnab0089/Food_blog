import React from 'react'
import logo from '../assets/food-logo.png'
import { HiShoppingCart } from "react-icons/hi2";
import DarkMode from './DarkMode';

export default function Navbar() {
  return (
    <div className='shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200'>
      <div className='container py-3 sm:py-0'>
       <div className='flex justify-between items-center'>
       {/* LOGO */}
        <div>
          <a href="#" className='flex items-center gap-2 text-2xl sm:text-3xl font-bold'>
            <img src={logo} alt="Foodmaniac" className='w-10'/>
            Food Festive 
          </a>
        </div>
        {/* DARK MODE */}
        <div className='flex items-center gap-4'>
          <div>
            <DarkMode/>
          </div>
        
        {/* NAV MENU */}
        <div>
          <ul className='hidden  sm:flex gap-4'>
            <li>
              <a href="#" className='inline-block py-4 px-4 hover:text-primary'>Home</a>
            </li>
            <li>
              <a href="#" className='inline-block py-4 px-4 hover:text-primary'>About</a>
            </li>
            <li>
              <a href="#" className='inline-block py-4 px-4 hover:text-primary'>Contact</a>
            </li>
          </ul>
          {/* ORDER BUTTON */}
          
        </div>
        <button className='bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-full  hover:scale-105 duration-300 flex gap-2 items-center'>
          <HiShoppingCart className='text-white text-2xl drop-shadow-sm cursor-pointer'/>
            Order
          </button>
       </div>
      </div>
    </div>
    </div>
  )
}
