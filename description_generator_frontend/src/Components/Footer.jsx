import React from 'react'
import bg from "../assets/footerBG.svg";
import Insta from '../assets/Icons/Insta';
import Line from '../assets/Icons/Line';
import Fb from '../assets/Icons/Fb';
import LinkedIn from '../assets/Icons/LinkedIn';

function Footer() {
  return (
    <div
      className="bg-no-repeat bg-cover bg-center flex justify-between items-center px-7 md:px-24 py-9 "
      style={{ backgroundImage: `url(${bg})` }}
    >
     <p className=' text-[24px] md:text-[70px] font-extrabold text-[#B5D5FC]'>
     Contact us!
     </p>
     <div className=' flex justify-center items-center gap-4 md:gap-20 '>
      {/* <a href="">
      <Fb/>
      </a> */}
      <a href="https://dz.linkedin.com/company/thynk-tech-dz">
      <LinkedIn/>
      </a>
     <a href="https://www.instagram.com/thynktechdz/">
     <Insta/>
     </a>
     
     </div>
    </div>
  );
}

export default Footer;
