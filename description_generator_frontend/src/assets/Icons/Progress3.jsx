import React from 'react'

function Progress3({isIn}) {
  return (
    <div>
    <svg className='md:hidden' width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="1.49976" y="1" width="22" height="22" rx="11" stroke={isIn ? "#04346E" : "#E0E0E0"} strokeWidth="2"/>
    <path d="M12.1798 8.71C12.6331 8.71 13.0131 8.79 13.3198 8.95C13.6264 9.10333 13.8531 9.31 13.9998 9.57C14.1531 9.82333 14.2298 10.0967 14.2298 10.39C14.2298 10.61 14.1831 10.8167 14.0898 11.01C13.9964 11.1967 13.8764 11.36 13.7298 11.5C13.5831 11.6333 13.4231 11.7333 13.2498 11.8C13.4431 11.84 13.6231 11.9333 13.7898 12.08C13.9564 12.22 14.0898 12.4 14.1898 12.62C14.2964 12.84 14.3498 13.09 14.3498 13.37C14.3498 13.73 14.2531 14.0533 14.0598 14.34C13.8731 14.62 13.6064 14.8433 13.2598 15.01C12.9198 15.1767 12.5131 15.26 12.0398 15.26C11.6664 15.26 11.2998 15.2 10.9398 15.08C10.5798 14.96 10.2664 14.83 9.99976 14.69L10.4898 14.03C10.7364 14.1767 10.9764 14.29 11.2098 14.37C11.4498 14.4433 11.7331 14.48 12.0598 14.48C12.2931 14.48 12.5131 14.4367 12.7198 14.35C12.9264 14.2633 13.0964 14.1367 13.2298 13.97C13.3631 13.8033 13.4298 13.6067 13.4298 13.38C13.4298 13.02 13.2931 12.73 13.0198 12.51C12.7464 12.29 12.3031 12.18 11.6898 12.18H11.3898L11.2498 11.45H11.7498C12.2298 11.45 12.6098 11.3567 12.8898 11.17C13.1698 10.9767 13.3098 10.7233 13.3098 10.41C13.3098 10.2433 13.2631 10.0933 13.1698 9.96C13.0764 9.82 12.9431 9.70667 12.7698 9.62C12.5964 9.53333 12.3898 9.49 12.1498 9.49C11.8231 9.49 11.5264 9.54667 11.2598 9.66C10.9931 9.77333 10.7764 9.88667 10.6098 10L10.1498 9.36C10.4364 9.17333 10.7464 9.02 11.0798 8.9C11.4131 8.77333 11.7798 8.71 12.1798 8.71Z" fill={isIn ? "#04346E" : "#E0E0E0"}/>
    </svg>

    <svg className='hidden md:flex' width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="0.999512" y="1" width="34" height="34" rx="17"stroke={isIn ? "#04346E" : "#E0E0E0"} strokeWidth="2"/>
    <path d="M17.4235 12.578C18.2395 12.578 18.9235 12.722 19.4755 13.01C20.0275 13.286 20.4355 13.658 20.6995 14.126C20.9755 14.582 21.1135 15.074 21.1135 15.602C21.1135 15.998 21.0295 16.37 20.8615 16.718C20.6935 17.054 20.4775 17.348 20.2135 17.6C19.9495 17.84 19.6615 18.02 19.3495 18.14C19.6975 18.212 20.0215 18.38 20.3215 18.644C20.6215 18.896 20.8615 19.22 21.0415 19.616C21.2335 20.012 21.3295 20.462 21.3295 20.966C21.3295 21.614 21.1555 22.196 20.8075 22.712C20.4715 23.216 19.9915 23.618 19.3675 23.918C18.7555 24.218 18.0235 24.368 17.1715 24.368C16.4995 24.368 15.8395 24.26 15.1915 24.044C14.5435 23.828 13.9795 23.594 13.4995 23.342L14.3815 22.154C14.8255 22.418 15.2575 22.622 15.6775 22.766C16.1095 22.898 16.6195 22.964 17.2075 22.964C17.6275 22.964 18.0235 22.886 18.3955 22.73C18.7675 22.574 19.0735 22.346 19.3135 22.046C19.5535 21.746 19.6735 21.392 19.6735 20.984C19.6735 20.336 19.4275 19.814 18.9355 19.418C18.4435 19.022 17.6455 18.824 16.5415 18.824H16.0015L15.7495 17.51H16.6495C17.5135 17.51 18.1975 17.342 18.7015 17.006C19.2055 16.658 19.4575 16.202 19.4575 15.638C19.4575 15.338 19.3735 15.068 19.2055 14.828C19.0375 14.576 18.7975 14.372 18.4855 14.216C18.1735 14.06 17.8015 13.982 17.3695 13.982C16.7815 13.982 16.2475 14.084 15.7675 14.288C15.2875 14.492 14.8975 14.696 14.5975 14.9L13.7695 13.748C14.2855 13.412 14.8435 13.136 15.4435 12.92C16.0435 12.692 16.7035 12.578 17.4235 12.578Z" fill={isIn ? "#04346E" : "#E0E0E0"}/>
    </svg>
    </div>



  )
}

export default Progress3
