import React from 'react'
import Team from '../images/Team.svg'

export default function Introduction() {
  return (
    <div className='w-full bg-gray-300 py-10 slanted max-sm:py-3'>
    <div className=' flex w-5/6 mx-auto mt-24 gap-x-5 max-sm:grid max-sm:grid-cols-1 max-sm:gap-y-5 max-sm:mt-10 max-[1100px]:grid max-[1100px]:grid-cols-1 max-[1100px]:gap-y-5 '>
      <div className='w-2/3 max-sm:w-full '>
        <p className='text-indigo-950'>OUR CUSTOMER SUCCESS PROMISE</p>
        <h1 className='my-2 text-5xl font-bold text-indigo-950'>Instant Time to Value</h1>
        <p className='my-2 text-lg font-semibold w-4/6 text-indigo-950 max-sm:w-full max-[1100px]:w-full'>Unleash the power of an automated demo library with a minimal effort: Demoboost supports you with all the hard work, allowing you to quickly capitalize on automated demo platform and increase your long-term value.</p>
         <ul className=' list-image-[url(tick4.png)] list-inside my-5 '>
          <li className='my-1 text-lg text-indigo-950'>We build the demos for you even before you sign the contract.</li>
          <li className='my-1 text-lg text-indigo-950'>We support you throughout, no limits. At no additional cost.</li>
          <li className='my-1 text-lg text-indigo-950'>We share the best practice, playbooks & ideas.</li>
        </ul> 
       
       <button className='bg-blue-600 text-white text-sm py-2 px-2 rounded max-sm:w-5/6 max-sm:mx-auto font-semibold'>Book a Demo</button>
      </div>
      <div className='w-1/3 max-sm:w-full max-sm:mt-10'>
        <img src={Team}  alt='round' className=''/>
      </div>
    </div>
    </div>
  )
}
