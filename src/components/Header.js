import React from 'react'
import '../index.css';
import logo from "../images/logo.svg"
export default function Header() {
  return (
    <div className='bg-indigo-950 w-full py-2 px-2 '>
        <img src={logo} alt='logo'/>
 
    </div>
  )
}

