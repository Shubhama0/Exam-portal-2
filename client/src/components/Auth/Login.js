import React from "react";
import { useState, useEffect } from "react";
//import axios from "axios";
import axios from "../Services/axiosi";
import { useAuth } from "../../Context/auth";
import toast from "react-hot-toast";
import { useNavigate, Redirect, useHistory } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [auth, setAuth] = useAuth();

  const history = useHistory();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("api/v1/user/login", {
        email,
        password,
      });
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        alert(`Logined Sucessfully, Welcome ${res.data.user.name}  `);

        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });
        localStorage.setItem("auth", JSON.stringify(res.data));

        history.push("/");
      } else {
        //toast.error(res.data.message);
        //alert(`${res.data.message}`);
        alert("Email or password is wrong");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
      alert("Email or password is wrong");
    }
  };

  // const save = () => {
  //   if (auth.user) {
  //     // setAuth({
  //     //   ...auth,
  //     //   user: res.data.user,
  //     //   token: res.data.token,
  //     // });
  //     localStorage.setItem("auth", JSON.stringify(auth.user.data));
  //   }
  // };

  // useEffect(() => {
  //   save();
  // }, [auth]);

  return (
    <>
      <section className=" mt-5 mb-5      ">
        <div className="container-fluid h-custom">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-9 col-lg-6 col-xl-5">
              <img
                src="./images/logo.png"
                className="img-fluid"
                alt="Sample image"
              />
            </div>
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1 border  border-5 border-gray rounded-5 p-5   ">
              <h1
                style={{
                  marginBottom: "10px",
                  color: "green",
                  textAlign: "center",
                }}
              >
                Login
              </h1>
              <form onSubmit={handleSubmit}>
                {/* Email input */}
                <div className="form-outline mb-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    id="form3Example3"
                    className="form-control form-control-lg"
                    placeholder="Enter a valid email address"
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
                  />
                  <label className="form-label" htmlFor="form3Example4">
                    Password
                  </label>
                </div>

                <div className="text-center text-lg-start mt-4 pt-2">
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg"
                    style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
                  >
                    Login
                  </button>
                  <p className="small fw-bold mt-2 pt-1 mb-0">
                    Already have an account?{" "}
                    <a href="/Register" className="link-danger">
                      Register
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

export default Login;
