import React from 'react'
import { MdLightMode } from "react-icons/md";

function Navbar() {
  return (
   <>
   <nav className=' text-white bg-gray-700 p-7 shadow-lg'>
    <ul className='flex items-center justify-evenly text-3xl'>
        <li>LIGHT MODE - DARK MODE USING CONTEXT API</li>
        <li className='border border-solid border-white p-2 rounded-xl'><MdLightMode /></li>
    </ul>
   </nav>
   
   </>
  )
}

export default Navbar