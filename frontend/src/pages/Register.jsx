import axios from "axios";
import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";
import "@passageidentity/passage-auth";
import login from "../images/signup.jpg";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const Register = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [disability, setDisability] = useState("");
  const [interestedJob, setInterestedJob] = useState("");
  const [skills, setSkill] = useState("");
  const [education, setEducation] = useState("");
  const [experience, setExperience] = useState("");
  const [hobbies, setHobbile] = useState("");

  const navigation = useNavigate();

  const submitHandler = async (e) => {
    if (
      name === "" ||
      password === "" ||
      email === "" ||
      disability === "" ||
      interestedJob === ""
    ) {
      alert("Please fill all the fields!");
    }

    e.preventDefault();

    const res = await axios.post("http://localhost:4000/register", {
      name,
      email,
      password,
      disability,
      interestedJob,
      skills,
      education,
      experience,
      hobbies,
    });
    console.log(res);

    localStorage.setItem("token", res.token);
    localStorage.setItem("userId", res.userId);
    // localStorage.setItem("isAdmin", data.user.admin);
    if (res.status === 200) {
      navigation("/");
    } else {
      alert("Enter Unique Crediantial");
    }
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row" style={{ marginTop: "-5rem" }}>
          <div className="col-md-6">
            <div className="login-left ">
              <h3>Sign in to accelerate your job search.</h3>
              <h5 style={{ fontWeight: "400" }} className="mt-4">
                Be a part of the Wavve Family and access free job tips and a
                curated job palette.
              </h5>
            </div>

            <div className="mt-3 login-left">
              <div className="row">
                <div className="col-md-6 ">
                  <div className="input-div  mt-2">
                    <input
                      className="input-filed"
                      type="text"
                      name="namew"
                      placeholder="Enter Your name"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                    />{" "}
                    <br></br>
                  </div>
                  <div className="input-div mt-2">
                    <input
                      className="input-filed"
                      type="text"
                      placeholder="Enter Your email"
                      name="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />{" "}
                    <br></br>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="input-div mt-2">
                    <input
                      className="input-filed"
                      type="password"
                      placeholder="Enter Your password"
                      name="password"
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                    />{" "}
                    <br></br>
                  </div>
                  <div className="input-div mt-2">
                    <input
                      className="input-filed"
                      type="text"
                      placeholder="Enter Your disability"
                      name="disability"
                      value={disability}
                      onChange={(e) => {
                        setDisability(e.target.value);
                      }}
                    />{" "}
                    <br></br>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="input-div mt-2">
                    <input
                      className="input-filed"
                      type="text"
                      placeholder="Enter Your interestedJob"
                      name="interestedJob"
                      value={interestedJob}
                      onChange={(e) => {
                        setInterestedJob(e.target.value);
                      }}
                    />{" "}
                    <br></br>
                  </div>
                  <div className="input-div mt-2">
                    <input
                      className="input-filed"
                      type="text"
                      placeholder="Enter Your skills"
                      name="interestedJob"
                      value={skills}
                      onChange={(e) => {
                        setSkill(e.target.value);
                      }}
                    />{" "}
                    <br></br>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="input-div mt-2">
                    <input
                      className="input-filed"
                      type="text"
                      placeholder="Enter Your education"
                      name="interestedJob"
                      value={education}
                      onChange={(e) => {
                        setEducation(e.target.value);
                      }}
                    />{" "}
                    <br></br>
                  </div>
                  <div className="input-div mt-2">
                    <input
                      className="input-filed"
                      type="text"
                      placeholder="Enter Your experience"
                      name="interestedJob"
                      value={experience}
                      onChange={(e) => {
                        setExperience(e.target.value);
                      }}
                    />{" "}
                    <br></br>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="input-div mt-2">
                    <input
                      className="input-filed"
                      type="text"
                      placeholder="Enter Your hobbies"
                      name="interestedJob"
                      value={hobbies}
                      onChange={(e) => {
                        setHobbile(e.target.value);
                      }}
                    />{" "}
                    <br></br>
                  </div>
                </div>
              </div>

              <button className="login-button mt-3" onClick={submitHandler}>
                Sign up
              </button>

              <p className="mt-4 " style={{ marginLeft: "6rem" }}>
                Already a member? <Link to="/login">login here</Link>
              </p>
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
