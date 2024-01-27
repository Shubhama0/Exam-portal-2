import React from "react"
import { cdlist1,cdlist2 } from "../data/Data"
import "./home.css"
import { Link } from "react-router-dom";

import { useAuth } from "../../Context/auth"


  



const HomeCard = () => {
  // const navigate=useNavigate();
  const [auth,setAuth]=useAuth();


  return (
    <>
    <h4 style={{marginTop:'50px', fontSize:'50px'}}>Recommended Exams</h4>
 
 
 <div className='content grid3 mtop'>

        {cdlist1.map((val, index) => {
          const { id,image, fees, category, name } = val
          const idd=id;
          const paths=`/Details/${idd}`
          return (
            <div className='box shadow' key={index}>
              <div className='img'>
                <img src={image} alt='' />
              </div>
              <div className='text'>
                <div className='category flex'> <h4>Fees</h4>  
                  <span  style={{ fontSize:"large" ,color:"red"}}>    <i style={{  color:"black"}}  class="fa-solid fa-indian-rupee-sign"></i> {fees}</span>

                </div>
                <h4>{name}</h4>
                <p>
                   {category}
                </p>
              </div>
              <div className='button flex'>
                <div>

                <Link to={paths}>
                  <button className='btn2'>Get Details </button> 
                  </Link>
                  <label htmlFor=''></label>
                </div>

              </div>
            </div>
          )
        })}
      </div>

<h2 style={{marginTop:'50px', fontSize:'50px'}}>Recent Exams</h2>

      <div className='content grid3 mtop'>
        {cdlist2.map((val, index) => {
          const {id, image, fees, category, name } = val
          const idd=id;
          const paths=`/Details/${idd}`
          return (
            <div className='box shadow' key={index}>
              <div className='img'>
                <img src={image} alt='' />
              </div>
              <div className='text'>
                <div className='category flex'>   <h4>Fees</h4>  
                  <span  style={{ fontSize:"large" ,color:"red"}}>     <i style={{  color:"black"}} class="fa-solid fa-indian-rupee-sign"></i> {fees}</span>

                </div>
                <h4>{name}</h4>
                <p>
 {category}
                </p>
              </div>
              <div className='button flex'>
                <div>


                <Link to={paths}>

                  <button className='btn2' >Get Details </button>
                   </Link>

                   <label htmlFor=''></label>
                </div>

              </div>
            </div>
          )
        })}
      </div>




    </>
  )
}

export default HomeCard
