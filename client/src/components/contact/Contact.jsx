import React from "react"
import "./contact.css"

const Contact = () => {

const msg=()=>{
  alert("we will contact you soon");
}

  return (
    <>
      <section className='contact mb'>
       
        <div className='container'>
          <form className='shadow'>
            <h4>Fillup The Form For Contact</h4> <br />
            <div>
              <input type='text' placeholder='Name' required />
              <input type='text' placeholder='Email' required />
            </div>
            <input type='text' placeholder='Subject' required />
            <textarea cols='30' rows='10' required></textarea>
            <button onClick={msg}>Submit Request</button>
          </form>
        </div>
      </section>
    </>
  )
}

export default Contact
