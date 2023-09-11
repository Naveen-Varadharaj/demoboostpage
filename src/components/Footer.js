import React from 'react'
import logo from '../images/logo-demo.svg'
export default function Footer() {
  return (
    <div className='w-full'>
    <div className='w-5/6 flex gap-x-10 mx-auto max-sm:grid max-sm:grid-cols-1 max-sm:gap-y-5 max-sm:w-full max-sm:px-3 max-[1000px]:grid max-[1000px]:grid-cols-1 max-[1000px]:gap-y-5 max-[1000px]:w-full max-[1000px]:px-3 '>
     <div className='mr-3 mb-3 '>
     <img src={logo} alt='logo'/>
      <div className='flex gap-x-1 mt-3'>
      <button className='rounded py-2 px-3 border border-gray-400 text-indigo-950 font-semibold'>Login</button>
      <button className='rounded py-2 px-3 bg-blue-500 text-white font-semibold'>Book a Demo</button>
      </div>
     </div>
     <div className='mx-3 text-sm'>
      <ul>
        <li className='mb-3 text-gray-500 font-semibold'>USE CASES</li>
        <li className='mb-2 text-indigo-950 font-semibold'>Marketing</li>
        <li className='mb-2 text-indigo-950 font-semibold'>Business Development</li>
        <li className='mb-2 text-indigo-950 font-semibold'>Sales</li>
        <li className='mb-2 text-indigo-950 font-semibold'>Customer Success & Training</li>
      </ul>
     </div>
     <div className='flex justify-start lg:gap-x-10 max-sm:gap-x-2  max-[1000px]:flex max-[1000px]:justify-start max-[1000px]:gap-x-20 '>
     <div className='mx-3 text-sm '>
     <ul>
        <li className='mb-3 text-gray-500 font-semibold'>PRODUCT</li>
        <li className='mb-2 text-indigo-950 font-semibold'> How it works</li>
        <li className='mb-2 text-indigo-950 font-semibold'>About</li>
        <li className='mb-2 text-indigo-950 font-semibold'>Careers <span className='bg-gray-300 text-sm px-2 rounded mx-auto py-1 text-blue-800'>We’re hiring!</span></li>         
      </ul>
     </div>
     <div className='mx-3 text-sm '>
     <ul>
        <li className='mb-3 text-gray-500 font-semibold'>RESOURCES</li>
        <li className='mb-2 text-indigo-950 font-semibold'>Documentation</li>
        <li className='mb-2 text-indigo-950 font-semibold'>Partners</li>
        <li className='mb-2 text-indigo-950 font-semibold'>Privacy Policy</li>
        <li className='mb-2 text-indigo-950 font-semibold'>GDPR Policy</li>
      </ul>
     </div>
     </div>
    </div>
    </div>
  )
}
