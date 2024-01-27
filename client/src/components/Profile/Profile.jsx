import React, { useEffect } from "react"
import { useState } from "react";
import {
  useNavigate,
  Redirect,
  useHistory,
} from "react-router-dom";
import { useAuth } from "../../Context/auth"
import axios from "../Services/axiosi";


const Profile = () => {

  const [auth,setAuth]=useAuth();
  const history = useHistory();

// const checkuser=()=>{
//   if(auth.user=="abc"){
//     alert("you have NOT login, plz LOGIN / REGISTER");
//     history.push("/Login");
//   }
// }
// useEffect(()=>{
//   checkuser();
// },[]);




//update fn
const [name, setName] = useState("");
  const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");

  useEffect(() => {
    const { email, name, password } = auth?.user;
    setName(name);

    setEmail(email);
    // setPassword(password);
  }, [auth?.user]);

  //form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.put("api/v1/user/update", {
        name,
        email,
        password,

      });
      if (data?.error) {
        //toast.error(data?.error);
        alert("error");
      } else {
        setAuth({ ...auth, user: data?.updatedUser });
        let ls = localStorage.getItem("auth");
        ls = JSON.parse(ls);
        ls.user = data.updatedUser;
        localStorage.setItem("auth", JSON.stringify(ls));
        //toast.success("Profile Updated Successfully");
        alert("updated sucessfully");
      }
    } catch (error) {
      console.log(error);
      //toast.error("Something went wrong");
      alert("ed");
    }
  };

  return (
    <>

        {/* <h1 style={{margin:"200px"}}>Profile Page</h1> */}

<div className="card  p-3  border  border-4 border-gray rounded-5" style={{width: '30rem', margin:"100px",textAlign:"center"}}>
  <div className="card-body">
    <h1 className="card-title  text-info">Your Details</h1>
    {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
     
     
{/* <div><h2>You have Not Logind</h2></div> */}
    <h3>Name : {auth.user.name}</h3>
    <h4>Email : {auth.user.email}</h4> 
    

{/* popup */}

    <div>
  <button type="button" className="btn btn-danger mt-5" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">UPDATE</button>
  <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header">
          <h1 className="modal-title fs-5" id="exampleModalLabel">UPDATE Your Details</h1>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
        </div>
        <div className="modal-body">
          <form  
         // onSubmit={handleSubmit}
          >
            <div className="mb-3">
              <label htmlFor="name" className="col-form-label">Name</label>
              <input type="text" className="form-control" id="recipient-name" 
                    value={name}
                    onChange={(e) => setName(e.target.value)} />
            </div>

            <div className="mb-3">
              <label htmlFor="Email" className="col-form-label">Email</label>
              <input type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} className="form-control" id="recipient-name" />
            </div>
            <div className="mb-3">
              <label htmlFor="message-text" className="col-form-label"> Enter New Password</label>
              <input className="form-control" id="message-text"  type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} />
            </div>
            {/* <button type="submit"> update</button> */}
          </form>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="submit" className="btn btn-primary"onClick={handleSubmit} >Save Changes</button>
        </div>
      </div>
    </div>
  </div>
</div>




    {/* <a href="#" className="btn btn-danger mt-5">UPDATE</a> */}
  </div>
</div>






    </>
  )
}

export default Profile;
