import React from "react";
import { useState } from "react";
//import axios from "axios";
import axios from "../Services/axiosi";
import toast from "react-hot-toast";
import { useNavigate, useLocation, useHistory } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();
  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("object");
    console.log(name, email, password);
    try {
      const res = await axios.post("api/v1/user/register", {
        name,
        email,
        password,
      });
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        // navigate("/Login");
        history.push("/Login");
        //console.log(res);
        alert("Registered Sucessfully  , plz login now");
      } else {
        alert("email already taken or something wrong");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
      alert("email already taken or something wrong");
    }
  };

  return (
    <>
      <section className=" mt-5 mb-5">
        <div className="container-fluid h-custom">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-9 col-lg-6 col-xl-5">
              <img
                src="./images/logo.png"
                className="img-fluid"
                alt="Sample image"
              />
            </div>
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1  border border-5 border-gray rounded-5 p-5     ">
              <h1
                style={{
                  marginBottom: "10px",
                  color: "green",
                  textAlign: "center",
                }}
              >
                Register
              </h1>

              <form onSubmit={handleSubmit}>
                <div className="form-outline mb-4">
                  <input
                    type="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    id="form3Example3"
                    className="form-control form-control-lg"
                    placeholder="Enter Your Name "
                    required
                  />
                  <label className="form-label" htmlFor="form3Example3">
                    Name
                  </label>
                </div>

                {/* Email input */}
                <div className="form-outline mb-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    id="form3Example3"
                    className="form-control form-control-lg"
                    placeholder="Enter a valid email address"
                    required
                  />
                  <label className="form-label" htmlFor="form3Example3">
                    Email address
                  </label>
                </div>
                {/* Password input */}
                <div className="form-outline mb-3">
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    id="form3Example4"
                    className="form-control form-control-lg"
                    placeholder="Enter password"
                    required
                  />
                  <label className="form-label" htmlFor="form3Example4">
                    Password
                  </label>
                </div>

                <div className="text-center text-lg-start mt-4 pt-2">
                  <button
                    // onClick={handleSubmit}
                    type="submit"
                    className="btn btn-primary btn-lg"
                    style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
                  >
                    Register
                  </button>
                  <p className="small fw-bold mt-2 pt-1 mb-0">
                    Already have an account?{" "}
                    <a href="/Login" className="link-danger">
                      Login
                    </a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
