import React from 'react'
import './Founder.css'
import img from '../img/founder.jpg'
import img2 from '../img/rayyan.jpg'
function Founders() {
  return (
    <>
        <div className='main mb-52'>
        <div className='f1'>
            <img src={img} alt='Hammad' id='img'/>
            <div className='heading ml-6 bg-green-500 w-[80%] h-16 rounded-xl '>
            <h1 className='text-xl font-extrabold text-white text-center'>Hammad Sheikh</h1>
            <p className='text-white text-center ml-4'>Founder</p>
            </div>
        </div>
        <div className='txt text-center p-10 text-white'>
          <h1 className='font-extrabold mb-4 text-4xl pt-12  '>Welcome to Internee.pk</h1>
          <p className='text-left p-10'>Our internship program is designed to give students the opportunity to work on meaningful projects and tasks, while also receiving mentorship and guidance from experienced professionals in the field. Our goal is to help interns develop the skills and knowledge they need to succeed in their careers, while also building a strong network of talented individuals who may become valuable members of our team in the future. If you're looking for a challenging and rewarding internship experience, we invite you to explore our program and Apply Today</p>
          <button className='h-14 border-2 font-bold w-40  rounded-full text-white hover:bg-purple-500'>Get to know us</button>
          <button className='h-14 w-40 font-bold  text-white ml-4 rounded-full hover:bg-purple-500'>Explore Internship</button>


        </div>

        <div className='f2'>
          <img src={img2} alt='#' id='img' />
          <div className='heading bg-green-500 rounded-xl w-[70%] ml-10'>
          <h1 className='text-2xl font-extrabold text-white text-center'>Rayyan Zain</h1>
          <p className='text-white text-center'>CMO</p>
          </div>
        </div>
        </div>
    </>
  )
}

export default Founders