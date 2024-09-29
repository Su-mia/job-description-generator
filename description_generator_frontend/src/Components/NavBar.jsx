import React from 'react'
import logo from "../assets/Icons/logo.jpeg";

const NavBar = () => {
  return (
    <div className=' bg-white  w-full flex items-center justify-start p-3 md:px-9'>
     <img
     className=' h-[60px] md:h-[80px]' 
     src={logo} 
     alt="logo" />
    </div>
  )
}

export default NavBar
