import React from 'react'

function Progress1({isIn}) {
  return (
    <div>

   
    <svg className='md:hidden' width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="1.5" y="1" width="22" height="22" rx="11" stroke={isIn ? "#04346E" : "#E0E0E0"} />
    <path d="M13.05 14.5H12.09V9.92L11.04 10.48L10.6 9.72L12.41 8.84H13.05V14.5Z" fill={isIn ? "#04346E" : "#E0E0E0"}/>
    </svg>

    <svg className='hidden md:flex' width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="1" y="1" width="34" height="34" rx="17" stroke={isIn ? "#04346E" : "#E0E0E0"}  strokeWidth="2"/>
    <path d="M19.59 23H17.862V14.756L15.972 15.764L15.18 14.396L18.438 12.812H19.59V23Z" fill={isIn ? "#04346E" : "#E0E0E0"}/>
    </svg>

    </div>

  )
}

export default Progress1
