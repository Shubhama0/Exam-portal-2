import React from "react"
import "./about.css"

const About = () => {
  return (
    <>
      <section className='about'>

        <div className='container flex mtop'>
          <div className='left row'>
            

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
            <button className='btn2'>More About Us</button>
          </div>
          <div className='right row'>
            <img src='https://st.depositphotos.com/1038076/4908/i/450/depositphotos_49080337-stock-photo-about-us.jpg' alt='' />
          </div>
        </div>
      </section>
    </>
  )
}

export default About
