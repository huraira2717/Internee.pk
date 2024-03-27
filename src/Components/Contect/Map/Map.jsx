import React from 'react'
import Navbar from '../Header/Navbar'
import Footer from '../Footer/Footer'
import { Data } from './Dummy'
import './map.css'
function Map() {
  return (
    <>
<Navbar />
<div className='container text-center mt-32  mx-auto '>
<div className='text-center'>
  <h1 className='font-bold text-3xl mb-10'>Are you looking for hands on candidate for your company?</h1>
<p className='text-gray-400'>Internee.pk kickstart student's tech careers with first internships, providing industry exposure, practical skills, and networking <br /> opportunities, paving the way for their success in the tech industry.</p>
</div>
<div className='cards flex justify-between mt-36 mb-20 flex-wrap'>
  <div className='h-48 mb-4 border-4 cursor-pointer pt-6 w-72'> <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="text-green-500 w-12 h-12 mb-3 inline-block"
            viewBox="0 0 24 24"
        >
            <path d="M8 17l4 4 4-4m-4-5v9"></path>
            <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29"></path>
        </svg>
        <h1 className='font-semibold text-3xl'>7k+</h1>
        <h3 className='text-lg hover:text-orange-300 mt-2'>Internship provider</h3>
        </div>

  <div className='h-48 mb-4 border-4 pt-6 w-72 cursor-pointer'> <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="text-green-500 w-12 h-12 mb-3 inline-block"
            viewBox="0 0 24 24"
        >
            <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
        </svg>
        <h1 className='font-semibold text-3xl'>15k+</h1>
        <h3 className='text-lg mt-2 hover:text-orange-300'>Linkedin Family</h3>
        </div>

  <div className='h-48 mb-4 border-4 pt-6 w-72 cursor-pointer'> <svg
        fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="text-green-500 w-12 h-12 mb-3 inline-block"
            viewBox="0 0 24 24"
        >
            <path d="M3 18v-6a9 9 0 0118 0v6"></path>
            <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"></path>
        </svg>
        <h1 className='font-semibold text-3xl'>19</h1>
        <h3 className='text-lg mt-2 hover:text-orange-300'>Course on LMS</h3>
        </div>

  <div className='h-48 mb-4 border-4 pt-6 w-72 cursor-pointer'><svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="text-green-500 w-12 h-12 mb-3 inline-block"
            viewBox="0 0 24 24"
        >
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        </svg>
        <h1 className='font-semibold text-3xl'>15</h1>
        <h3 className='text-lg hover:text-orange-300 mt-2'>Companies onboarded</h3>
        </div>
</div>
</div>

<div className='Map h-[50vh] w-[100%]'>
<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3620.2657973372166!2d67.004045!3d24.85477!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e03e02fabc1%3A0x96c129db3ee25a57!2sSindh%20Madressatul%20Islam%20University%2C%20City%20Campus%2C%20Karachi!5e0!3m2!1sen!2sus!4v1711483351467!5m2!1sen!2sus" width="100%" height="" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe></div>

<div className='textarea'>
<h1>Project in mind? Let's Talk</h1>
<p>Email</p>
<input type='email' />
<br />
<p>Phone Number</p>
<input type='number' />
<br />
<p>Message</p>
<textarea className='px-3 font-semibold text-xl'></textarea>
<button className='w-[100%] h-10 mt-2 bg-green-400 border-none outline-none font-bold text-xl text-white'>Send</button>
<p>After your message submission, Our team will respond 1-2 Business days</p>
</div>

<Footer />
    </>
  )
}

export default Map