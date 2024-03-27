import React from 'react'
import './Course.css'
import { MdWeb} from "react-icons/md";
import { DiCode } from "react-icons/di";
import { BsChatRightTextFill } from "react-icons/bs";
import { GiPaintBrush } from "react-icons/gi";
import { FaMobile } from "react-icons/fa6";



function Course() {
  return (
    <>
     <h1 className='text-center font-extrabold text-4xl mt-40 mb-36'>Browser By Catogries</h1>
     <div className='courses'>
      <div className='box'>
        <MdWeb className='h-20 mx-auto w-10'/>
        <h1 className='font-bold text-white'>Web Desiging</h1>
      </div>
      <div className='box'>
        <DiCode className='h-20 mx-auto w-16'/>
        <h1 className='font-bold text-white'>Web Development</h1>

      </div><div className='box'>
        <BsChatRightTextFill className='h-20 mx-auto w-8'/>
        <h1 className='font-bold text-white'>CRM And Chats</h1>
      </div><div className='box'>
        <GiPaintBrush className='h-20 mx-auto w-12'/>
        <h1 className='font-bold text-white'>Graphic Desiging</h1>
      </div><div className='box'>
        <FaMobile className='h-20 mx-auto w-6'/>
        <h1 className='font-bold text-white'>Mobile App</h1>
      </div>
    </div>
    </>
  )
}

export default Course