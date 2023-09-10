import React from 'react'
import logo1 from '../images/logo1.svg'
import logo2 from '../images/logo2.svg'
import logo3 from '../images/logo3.svg'
import logo4 from '../images/logo4.svg'
import logo5 from '../images/logo5.svg'

export default function Results() {
  return (
    <div className='w-full my-20'>
      <div className='w-5/6 mx-auto max-sm:w-full'>
      <div className='w-full mx-auto mb-5 px-2 '>
        <p className='mb-3  text-gray-500 font-semibold w-fit mx-auto text-center'>RESULTS</p>
        <p className='mt-2 text-5xl font-bold text-indigo-950 w-fit mx-auto text-center '>What can you expect?</p>
      </div>
      <div className='flex justify-center  mt-5  max-sm:grid max-sm:grid-cols-1 max-sm:justify-items-center max-sm:gap-y-3'>
        <div className='w-5/6 flex justify-center'>
          <fieldset className='bg-gray-300 text-center py-3 px-2  rounded-xl h-64 w-5/6 '>
          <legend><img src={logo1} alt='logo1' /></legend>
          <h1  className='mb-3 text-indigo-950 font-bold'>Building demos with your team</h1>
          <p className='text-gray-500 font-medium'>Throughout our contract, not just during onboarding.</p>
   
          </fieldset>
        </div>
        <div className='w-5/6 flex justify-center'>
          <fieldset className='bg-gray-300 text-center py-3 px-2   rounded-xl h-64 w-5/6 '>
          <legend><img src={logo2} alt='logo2' /></legend>
          <h1  className='mb-3 text-indigo-950 font-bold'>Demo ideas & best practices</h1>
          <p className='text-gray-500 font-medium'>What's the best format & narrative of the demo.</p>
   
          </fieldset>
        </div>
        <div className='w-5/6 flex justify-center'>
          <fieldset className='bg-gray-300 text-center py-3 px-2   rounded-xl h-64 w-5/6 '>
          <legend><img src={logo3} alt='logo3' /></legend>
          <h1  className='mb-3 text-indigo-950 font-bold'>How to leverage your demos</h1>
          <p className='text-gray-500 font-medium'>Where you could/should apply demos with Demoboost?</p>
   
          </fieldset>
        </div>
        <div className='w-5/6 flex justify-center'>
          <fieldset className='bg-gray-300 text-center py-3 px-2   rounded-xl h-64 w-5/6'>
          <legend><img src={logo4}  alt='logo4'/></legend>
          <h1  className='mb-3 text-indigo-950 font-bold'>Reviewing & improving demos</h1>
          <p className='text-gray-500 font-medium'>While teaching you the best demo practises adjusted to your product.</p>
   
          </fieldset>
        </div>
        <div className='w-5/6 flex justify-center'>
          <fieldset className='bg-gray-300 text-center py-3 px-2  rounded-xl h-64 w-5/6 '>
          <legend><img src={logo5} alt='logo5' /></legend>
          <h1  className='mb-3 text-indigo-950 font-bold'>Being your partner in crime</h1>
          <p className='text-gray-500 font-medium'>Any project you work on, we can work together and save your time!</p>
   
          </fieldset>
        </div>

      </div>
      </div>

    </div>
  )
}
