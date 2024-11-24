import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

function Login() {
    const[email,setemail]=useState()
    const[password,setpassword]=useState()
    const navigate=useNavigate();

    const handlesubmit=()=>{
        if(email&&password){
            navigate("/Dashboard")
        }
        else{
            alert("its mandatory to fill the all fields")
        }
    }
  return (
    <div className="container">
      <div className="left-section">
        <h1>Welcome to OmniAssist</h1>
        <h2>Your aid in health care support</h2>
        <p>
          Access essential resources, submit inquiries, and receive timely
          assistance from our dedicated support team. Streamline your
          healthcare experience with secure login access. Your well-being is
          our priority.
        </p>
      </div>
      <div className="right-section">
        <h2>Login</h2>
        <form className="login-form" onSubmit={handlesubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e)=>setemail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e)=>setpassword(e.target.value)}
            />
          </div>
          <div className="remember-me">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember Me</label>
          </div>
          <button type="submit" className="login-button">Login</button>
        </form>
        <a href="#" className="forgot-password">Forgot Password</a>
      </div>
    </div>
  );
}

export default Login;
