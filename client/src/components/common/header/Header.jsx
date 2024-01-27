import React, { useState } from "react"
import "./header.css"
import { nav } from "../../data/Data"
import { Link } from "react-router-dom"
import { useAuth } from "../../../Context/auth"


const Header = () => {
  const [navList, setNavList] = useState(false)

  const [auth,setAuth]=useAuth();
  const handleLogout = () => {
    setAuth({
      ...auth,
      user: "abc",
      token: "",
    });
    localStorage.removeItem("auth");
    alert("Logout Successfully");
  };


  return (
    <>
      <header>
        <div className='container flex'>
          <div className='logo'>
          <Link to="/">
            <img style={{height:"65px",margin:"1px"}} src='./images/logo.png' alt='logo' />
            </Link>
          </div>



          <div className='nav'>
            <ul className={navList ? "small" : "flex"}>
              {nav.map((list, index) => (
                <li key={index}>
                  <Link to={list.path}>{list.text}</Link>
                </li>
              ))}


            {/* </ul>
          </div> */}



{/* <div className="input-group rounded">
  <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
  <span className="input-group-text border-0" id="search-addon">
    <i className="fas fa-search" />
  </span>
</div> */}






{ auth.user !='abc' ? (
    <>

<Link to="/Profile" >
  <div>MY-Profile <i style={{fontSize:"30px"}}  class="fa-solid fa-user"></i>  </div>
  </Link>
   
    </>
) :(

  <>
<Link to="/Profile2" >
  <div >MY-Profile <i style={{fontSize:"30px"}}  class="fa-solid fa-user"></i>  </div>
  </Link>
  </>
) }


{/* <div>  <i style={{fontSize:"30px"}}  class="fa-solid fa-user"></i>  </div> */}



{ auth.user !='abc' ? (
    <>
    <div >
    <button
    onClick={handleLogout} className=" eb1 border  border-3 border-danger rounded-3 p-1"> Logout
     </button> 
      </div>
  
    </>
) :(

  <>
  <div className="eb">
  <Link to="/login" className="border  border-3 border-danger rounded-3 p-1">
   LOGIN
  </Link>
  <Link to="/Register" className="   border  border-3 border-danger rounded-3 p-1">
    REGISTER  
  </Link>
  </div>
  </>
) }


{/* <div>  <i style={{fontSize:"30px"}}  class="fa-solid fa-user"></i>  </div> */}


</ul>
          </div>
          {/* style={{display:"block",clear:"both"}} */}

         

          { auth.user !='abc' ? (
    <>
          <div className="tg1" >
          <Link to="/Profile">
               <i  
               style={{fontSize:"30px"}}  class="fa-solid fa-user"></i>
               </Link>
          </div>
          </>
       ) :
       (
        <>
        <div className="tg1" >
          <Link to="/Profile2">
               <i  
               style={{fontSize:"30px"}}  class="fa-solid fa-user"></i>
               </Link>
          </div>
        </>
       ) 
          }  


          <div className='toggle'>
            <button onClick={() => setNavList(!navList)}>{navList ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}</button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
