import React from 'react'
import BackBtn from '../../assets/Icons/BackBtn'
import NextBtn from '../../assets/Icons/NextBtn'
import Sparkles from '../../assets/Icons/Sparkles'


function ButtonC({handler , cont , isNext , isBack ,isGenerate}) {
  return (
   <button 
   onClick={handler}
    type={isGenerate ? "submit" : ""}
   className='gradient-3 text-white flex justify-center items-center gap-2 md:gap-4 p-2 md:px-6 md:py-3 rounded-md md:rounded-xl mt-3'>
    { isBack && <BackBtn/>}
    <p className=' text-[12px] lg:text-[24px]'>
    {cont}
    </p>
    { isNext && <NextBtn/> }
    { isGenerate && < Sparkles />}
   </button>
  //  <button className=' text-white border-gradient-3 flex justify-center items-center gap-2 p-2 rounded-md mt-3'>
  //   <p className=' text-[12px] lg:text-[24px]'>
  //   Next
  //   </p>
  //   <img src={mininext} alt="" />
  //  </button>

  )
}

export default ButtonC
