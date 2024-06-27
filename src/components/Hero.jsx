import React from 'react'
import carImage from '../assets/car_one.png'; // Adjust the path as per your project structure

const Hero = () => {
  return (
    <div className='flex justify-between items-center h-full w-100 p-5 m-auto'    style={{  }}
>
      <section className='bg-gray-800 p-4 w-36 md:w-48  h-56 rounded-md flex flex-col justify-center items-center space-y-1'>
        <img className='h-1/2 object-cover' src={'Logo/wheel_one.png'} alt='wheel' />
        <h1 className='font-bold  text-white '>BRABUS RE-71R</h1>
        <h1 className='font-bold  text-gray-400 text-xs '> ULTIMATE PERFORMANCE</h1>
        <h1 className='font-bold  text-red-400 text-sm '> $1,287.00</h1>


       
      </section>
      <section className='bg-gray-800 p-4 w-36 md:w-48 h-56 rounded-md flex flex-col justify-center items-center space-y-2'>
        <img className='h-1/2 object-cover' src={'Logo/wheel_brake.png'} alt='wheel' />
        <h1 className='font-bold  text-white '>BRABUS RE-71R</h1>
        <h1 className='font-bold  text-gray-400 text-xs '> ULTIMATE PERFORMANCE</h1>
        <h1 className='font-bold  text-red-400 text-sm '> $1,287.00</h1>
      </section>
    </div>
  )
}

export default Hero
