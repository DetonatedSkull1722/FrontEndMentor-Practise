import React, { useState } from 'react'
import logo from '../assets/images/logo.svg'
import cart from '../assets/images/icon-cart.svg'
import profilePic from '../assets/images/image-avatar.png'

const Navigation = ({name, image, cartItems}) => {
  const [num, setnum] = useState(0)
  return (
    <nav className='border-b-2 flex items-center justify-between h-20 w-10/12' id="navbar">
      <div className='flex items-center justify-center h-full' >
        <img src={logo} alt="" className='h-5 mr-14' />
        <ul className='h-full flex items-center justify-center gap-6 text-[0.7rem] text-gray-400'>
            <li className='li-item '>Collections</li>
            <li className='li-item'>Men</li>
            <li className='li-item'>Women</li>
            <li className='li-item'>About</li>
            <li className='li-item'>Contact</li>
        </ul>
      </div>
      <div className='flex justify-center items-center gap-2'>
        <div className="relative hover:scale-105 transition-transform duration-200">
          <img src={cart} alt="" className='w-5'/>
          <div className='w-3 rounded-full h-3 bg-yellow-400 absolute top-[-0.15rem] right-[-0.25rem] flex justify-center items-center'>
            <p className='text-center text-[0.5rem]'>{num}</p>
          </div>
        </div>
        <div className='h-10 w-10 border-2 border-transparent rounded-full hover:border-2 hover:border-yellow-300 hover:scale-105 duration-100 ml-4 mr-5'>
          <img src={profilePic} className='w-full' alt=""/>
        </div>
      </div>
    </nav>
  )
}

export default Navigation