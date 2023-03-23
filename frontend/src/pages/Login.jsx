import axios from "axios";
import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";
import "@passageidentity/passage-auth";
import login from "../images/signup.jpg"
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { TextToSpeech } from "../TextToSpeech";
import Loading from "../components/Loading";

export const Login = () => {
   
  const [email ,setUserName]=useState('');
  const [password ,setPassword]=useState('');
  const [isLoading,setIsLoading]=useState(false);



  const navigation =useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    if(email === "" || password===""){
      alert("Please fill all the fields!")
      return;
    }
    console.log(email,password)
    const res = await fetch('https://LOC.adityasurve1.repl.co/user/userlogin', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password
      }), // body data type must match "Content-Type" header
    })
    if(res.status===200){
      const data = await res.json();
      console.log(data)
      localStorage.setItem("token",data.token);
      localStorage.setItem("userId",data.user._id);
      localStorage.setItem("isAdmin",data.user.admin);
      console.log(data.user.admin)
      if(data.user.admin===false){
        navigation("/")
       
      }else{
        navigation("/admin/dashboard")
      }
    }else{
      alert("Crediantial Invalid");
    }
    setIsLoading(false);
  };
  if(isLoading) return <Loading/>

  return (
    <>
      <div className="container-fluid">
        <div className="row" style={{ marginTop: "-5rem" }}>
          <div className="col-md-6" >

            <div className="login-left">

              <h3>Sign in to accelerate your job search.</h3>
              <h5 style={{ fontWeight: "400" }} className="mt-4">Be a part of the Wavve Family and access free job tips and a curated job palette.</h5>
            </div>
            
            <div  className="mt-3 login-left">
            <div className="input-div  mt-2">
        
            <input className="input-filed2"  type='text' name="email" placeholder="Enter Your Email" value={email} onChange={(e)=>{setUserName(e.target.value)}} /> <br></br>
            </div>
            <div className="input-div mt-2">
          
            <input className="input-filed2" type='password'  placeholder="Enter Your Password" name="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/> <br></br>
            </div>
            <button className="login-button2 mt-3" onClick={submitHandler} disabled={isLoading} >login</button>
            <p className="mt-4 mx-5">Not a member? <Link to="/sign-up">Sign up</Link></p>
            </div>
          

            {/* <passage-auth app-id={"0ZpFbJsBa1IWamTgtAyFEYNP"}></passage-auth> */}
          </div>
          <div className="col-md-6">
            <img src={login} className="img-fluid" />
          </div>
        </div>


      </div>
      <br></br>
      <br></br>
      <br></br>
     
    </>
  );
};
