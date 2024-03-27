import React from 'react'
import './Main.css'
import img from '../img/close-up-young-business-team-working_23-2149153840.avif'
function Main() {
  return (
    <>
          <section className='join'>
        <div className='container'>
          <div className='row'>
          <div id='heading'>
        <h3>Are you looking for your dream Internship ?</h3>
        <h1>Join
        Internee.pk now..! </h1>
      </div>
            {/* <Heading subtitle='WELCOME TO ACADEMIA' title='Best Online Education Expertise' /> */}
            <p>Pakistan's Virtual Internship Platform Powered By <span className='text cursor-pointer'>TechvioChats </span></p>
            <div className='button'>
              <button className='mt-8 h-14 w-40 rounded-full hover:bg-purple-500'>Browser Internship</button>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default Main