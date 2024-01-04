import React from 'react'
import footer_logo from '../../assets/food-logo.png'
import { FaLocationDot } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { IoMdPhonePortrait } from "react-icons/io";

export default function Footer() {
  return (
    <div className='bg-gray-100 dark:bg-gray-950  dark:text-white'>
      <div className='max-w-[1200px] mx-auto '>
        <div className='grid md:grid-cols-3 py-5'>
            <div className='py-8 px-4'>
                <h1 className='flex items-center gap-3 text-xl sm:text-3xl font-bold text-justify sm:text-left'>
                    <img src={footer_logo} alt=""
                    className='max-w-[50px] ' />
                    Foodie
                </h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni sed unde architecto perspiciatis sit repudiandae corporis fugiat, quas exercitationem expedita voluptate, rerum sapiente excepturi! Necessitatibus asperiores inventore beatae numquam molestiae.</p>
                <br />
                <div>
                    <div className='flex items-center gap-3 mt-3'>
                        <FaLocationDot />
                        <p>Hooghly ,West Bengal</p>
                    </div>
                    <div className='flex items-center gap-3 mt-3'>
                        <IoMdPhonePortrait />
                        <p>+91455582225</p>
                    </div>
                    </div>
                    <div className='flex items-center gap-3 mt-6'>
                    <a href="#"><FaInstagram className='text-3xl' /></a>
                    <a href="#"><FaFacebook className='text-3xl'/></a>
                    <a href="#"><FaLinkedin className='text-3xl'/></a>
                </div>
                </div>
              
            <div className='grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10'>
                <div>
                    <div className='py-8 px-4'>
                        <h1 className='text-xl sm:text-2xl font-bold text-justify sm:text-left mb-3'>Important Links</h1>
                        <ul className='flex flex-col gap-3'>
                            <li>Home</li>
                            <li>About</li>
                            <li>Services</li>
                            <li>Login</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <div className='py-8 px-4'>
                        <h1 className='text-xl sm:text-2xl font-bold text-justify sm:text-left mb-3'>Important Links</h1>
                        <ul className='flex flex-col gap-3'>
                            <li>Home</li>
                            <li>About</li>
                            <li>Services</li>
                            <li>Login</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <div className='py-8 px-4'>
                        <h1 className='text-xl sm:text-2xl font-bold text-justify sm:text-left mb-3'>Important Links</h1>
                        <ul className='flex flex-col gap-3'>
                            <li>Home</li>
                            <li>About</li>
                            <li>Services</li>
                            <li>Login</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
