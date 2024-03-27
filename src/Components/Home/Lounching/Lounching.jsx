import React from 'react'
import './Lounching.css';
import company from '../img/people-working-as-team-company.jpg'
function Lounching() {
  return (
    <>
        <div className="mainpt">
            

            <div className='div div1'>
                <h1>Launching tech</h1>
                <h1>careers with</h1>
                <h1>internships, exposure,</h1>
                <h1>and networking.</h1>
<p>Internee.pk kickstart student's tech careers with first 
internships, providing industry exposure, practical 
skills, and networking opportunities, paving the way 
for their success in the tech industry.</p>

            </div>

            
            <div className='div div2'>
                        <img src={company} width='650px' height='650px' alt="My Picture" />
                    </div>
                  


        </div>


    </>
  )
}

export default Lounching