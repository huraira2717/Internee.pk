import React from 'react'
import './Footer.css'
import { LuYoutube } from "react-icons/lu";
import { BiLogoInstagram } from "react-icons/bi";
import { CiFacebook } from "react-icons/ci";
import { PiTwitterLogoLight } from "react-icons/pi";

function Footer() {
  return (
    <div className='Footer'>
      <div className='logo'>
        <div className="flex-shrink-0">
          <img
            className="h-12 w-auto cursor-pointer"
            src={"https://portal.internee.pk/assets/logo.png"}
            alt="Your Company"
          />
        </div>
      </div>
      <div className='list'>
        <ul className='ul_list'>
          <li><h1 className='text-xl text-black font-bold mb-3'>Company</h1></li>
          <li>Contect us</li>
          <li>Privacy policy</li>
          <li>Trems and conditions</li>
        </ul>
      </div>
      <div className='list'>
        <ul className='ul_list'>
          <li><h1 className='text-xl text-black font-bold mb-4'>Get help</h1></li>
          <li>Training Videos</li>
          <li>Request Help</li>
        </ul>
      </div>
      <div className='list'>
        <h1 className='text-xl font-bold mt-6'>Socialize with us</h1>
        <div className='flex flex-wrap justify-center pt-4'>
          <LuYoutube className='h-7 w-10 bg-orange-400 rounded-full cursor-pointer m-1'/>
          <BiLogoInstagram className='h-7 w-10 bg-orange-400 cursor-pointer rounded-full m-1' />
          <CiFacebook className='h-7 w-10 bg-orange-400 rounded-full cursor-pointer m-1' />
          <PiTwitterLogoLight className='h-7 w-10 bg-orange-400 rounded-full cursor-pointer  m-1' />
        </div>
        <div className='pera text-gray-400'>
          <p>Copyright ©2024 internee.pk Pvt Ltd.
            <br />All rights reserved.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer;
