import React from 'react'; // Import useState from React
import Footer from './Footer'
import NavBar from './NavBar'
import Hero from './Hero'


function Home() {

  return (
    <div className='gradient-1' >
        <div className='flex items-center justify-start h-screen flex-col'>
        <NavBar/>     
        <Hero/>
         
        </div>
        
        <Footer/>
    </div>
  )
}

export default Home
