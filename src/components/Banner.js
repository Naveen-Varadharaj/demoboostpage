import React from 'react'

export default function Banner() {
  return (
    <div className='w-full my-20'>
      <div className='w-5/6 mx-auto flex bg-blue-600 py-5 px-4 rounded-lg max-sm:grid max-sm:grid-cols-1 max-sm:gap-y-4 max-sm:w-full'>
       <div className='w-2/3 max-sm:w-full'>
        <h1 className='text-5xl font-semibold text-white w-2/3 mb-3 max-sm:w-full max-[1100px]:w-full'>Join the demo experience revolution</h1>
        <p className='mt-3 font-medium text-gray-300'>Demos have come a long way from the traditional product demo video consumers were once familiar with. Learn how interactive software demos can showcase your product in all its glory, revolutionizing the way you sell and transforming the way your customers buy. </p>
       </div>
       <div className='w-1/3 grid justify-center max-sm:w-full max-sm:mb-10'>
        <button className='bg-white text-black py-2 px-3 rounded h-fit my-auto max-sm:w-64 font-semibold'>Book a Demo</button>
       </div>
      </div>
    </div>
  )
}
