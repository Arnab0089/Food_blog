import React from 'react'
import food3 from '../../assets/biryani5.png'
import {GrSecure} from 'react-icons/gr'
import {IoFastFood} from 'react-icons/io5'
import {GiFoodTruck} from 'react-icons/gi' 

export default function Banner() {
  return (
    <div>
        <div className='min-h-[550px]'>
            <div>
                <div
                    data-aos="slide-up"
                    data-aos-duration="300"
                    className='container'
                >
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
                        {/* Image Section */}
                        <div>
                            <img src={food3} alt=""
                            className='max-w-[430px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,0.1)]' />
                        </div>
                        {/* Text Content Section */}
                        <div className='flex flex-col justify-center gap-6 sm:pt-0'>
                            <h1 className='text-3xl sm:text-4xl font-bold'>
                                Lorem ipsum dolor
                            </h1>
                            <p className='text-sm text-gray-500 tracking-wide leading-5'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid alias, ea distinctio libero molestias suscipit consequatur illo, aut ipsam magnam omnis impedit facilis, laudantium officia vitae. Pariatur id a repellendus.
                                <br />
                                <br />
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, a illum libero exercitationem inventore quo natus architecto hic perspiciatis adipisci, enim obcaecati. Similique consectetur, dolores ipsum ea eum fuga ad.
                            </p>
                            <div className='flex gap-6'>
                                <GrSecure className="text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-violet-100 dark:bg-violet-400"/>
                                <IoFastFood className="text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-orange-100 dark:bg-orange-400"/>
                                <GiFoodTruck className="text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-green-100 dark:bg-green-400"/>
                            </div>
                            <div>
                                <button className='bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-full hover:scale-105 duration-200'>
                                    Oreder Now
                                </button>
                            </div>
                        </div>
                        
                    </div>

                </div>
            </div>
        </div>
      
    </div>
  )
}
