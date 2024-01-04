import React from 'react'
import img2 from '../../assets/biryani2.png'



const ServiceData =[
    {
        id:1,
        image:img2,
        name:"Briyani",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam facere quod libero laboriosam natus distinctio aperiam sit suscipit deleniti? Ducimus non quaerat quam praesentium, ea voluptatibus aperiam nulla at omnis!",
    },
    {
        id:2,
        image:img2,
        name:"Chicken Kari",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam facere quod libero laboriosam natus distinctio aperiam sit suscipit deleniti? Ducimus non quaerat quam praesentium, ea voluptatibus aperiam nulla at omnis!",
    },
    {
        id:3,
        image:img2,
        name:"Cold Cofee",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam facere quod libero laboriosam natus distinctio aperiam sit suscipit deleniti? Ducimus non quaerat quam praesentium, ea voluptatibus aperiam nulla at omnis!",
    },
];

export default function Service() {
  return (
    <div>
      <div className='py-10'>
        <div className='container'>
            {/* Header Section */}
            <div className='text-center mb-20 max-w-[400px] mx-auto'>
                <p className='text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary '>Our Services</p>
                <h1 className='text-3xl font-bold '>Services</h1>

                <p className='text-xs text-gray-400 '>
                {" "}
               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia illo enim ut quisquam illum dolor natus ab, accusantium sint? Voluptatum voluptas repellat labore odit sit quisquam dignissimos cupiditate, asperiores quos?</p>
            </div>
            {/* Card Section */}
            <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3  gap-14  md:gap-5 place-items-center '>
                {
                    ServiceData.map(({id,image,name,description})=>(
                        
                        <div
                        data-aos="zoom-in"
                data-aos-duration="300"
                
                        key={id} className='max-w-[300px] group rounded-2xl bg-white  dark:border-orange-500 dark:bg-gray-800 hover:bg-primary hover:text-white duration-300 p-4 shadow-xl' >
                            <div className='h-[100px]'>
                                <img src={image} alt='' 
                                    className='max-w-[200px] mx-auto  block transform -translate-y-14 group-hover:scale-105  group-hover:rotate-6 duration300'
                                />
                            </div>
                            <div className='p-4 text-center'>
                                <h1 className='text-xl font-bold dark:text-white'>{name}</h1>
                                <p className='text-gray-500  group-hover:text-white duration-300 text-sm line-clamp-2'>{description}</p>
                            </div>
                        </div>
                        
                    ))
                }
            </div>
        </div>
      </div>
    </div>
  )
}
