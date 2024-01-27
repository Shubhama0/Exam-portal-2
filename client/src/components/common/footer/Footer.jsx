import React from "react"
import { footer } from "../../data/Data"
import "./footer.css"

const Footer = () => {
  return (
    <>
      
      <footer>

        <div className='container'>
          
          <div className='box'>
            <div className='logo'>
              <img src='../images/logo.png' alt='' />
<div style={{marginTop:"20px"}}>
             <h4>Get it On</h4> <i class="fa-brands fa-google-play fa-2xl"></i>
             <i class="fa-brands fa-apple fa-2xl"></i>
             </div> 
            </div>
          </div>



          {footer.map((val,index) => (
            <div className='box'>
              <h3 key={index}>{val.title}</h3>
              <ul>
                {val.text.map((items,index) => (
                  <li key={index}> {items.list} </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </footer>
      <div className='legal'>
        <span>© Shubham Kumar</span>
      </div>
    </>
  )
}

export default Footer
