import React from 'react'
import icon from '../assets/images/logo-full.svg'


const Header = () => {
  return (
    <div className='text-white flex align-center justify-center w-4/12'> 
        <img src={icon} className="w-9/12" alt="" />
    </div>
  )
}

export default Header