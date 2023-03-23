import axios from "axios";
import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";
import "@passageidentity/passage-auth";
import login from "../images/signup.jpg";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { RxCross2 } from "react-icons/rx";

export const SignUp = () => {
  const [fname, setFName] = useState("");
  const [lname, setLName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [layoff, setLayoff] = useState(false);
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [desc, setDesc] = useState("");

  const [experience, setExperience] = useState("");
  const [newSkill, setNewSkill] = useState("");
  const [skillFields, setskillFields] = useState([]);
  const [newJobTitle, setNewJobTitle] = useState("");
  const [jobTitleFields, setjobTitleFields] = useState([]);

  const navigation = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();

    const data = {
      firstname: fname,
      lastname: lname,
      email,
      mobilenum: mobile,
      password,
      confPassword,
      skills: skillFields,
      experience: parseInt(experience),
      layoff: layoff === "false" ? false : true,
      jobTitle: jobTitleFields,
      location,
      previousJobDesc: desc,
    }

    console.log(data);
    if (
      fname === "" ||
      lname === "" ||
      password === "" ||
      email === "" ||
      confPassword === "" ||
      jobTitleFields.length === 0 ||
      location === ""
    ) {
      alert("Please fill all the fields!");
      return;
    }

    const res = await axios.post(
      "https://LOC.adityasurve1.repl.co/user/userregister",
      {
        firstname: fname,
        lastname: lname,
        email,
        mobilenum: mobile,
        password,
        confPassword,
        skills: skillFields,
        experience: parseInt(experience),
        layoff: layoff === "false" ? false : true,
        jobTitle: jobTitleFields,
        location,
        previousJobDesc: desc,
      }
    );
    console.log(res);

    if (res.status === 200) {
      navigation("/login");
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
              <h3>Sign in to accelerate your job search. ...</h3>
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
                      name="FNAME"
                      placeholder="Enter Your first name"
                      value={fname}
                      onChange={(e) => {
                        setFName(e.target.value);
                      }}
                      required
                    />{" "}
                    <br></br>
                  </div>
                  <div className="input-div  mt-2">
                    <input
                      className="input-filed"
                      type="number"
                      name="mno"
                      placeholder="Enter Your mobile number"
                      value={mobile}
                      onChange={(e) => {
                        setMobile(e.target.value);
                      }}
                      required
                    />{" "}
                    <br></br>
                  </div>
                </div>
                <div className="col-md-6 ">
                  <div className="input-div  mt-2">
                    <input
                      className="input-filed"
                      type="text"
                      name="LNAME"
                      placeholder="Enter Your last name"
                      value={lname}
                      onChange={(e) => {
                        setLName(e.target.value);
                      }}
                      required
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
                      required
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
                      required
                    />{" "}
                    <br></br>
                  </div>
                  <div className="input-div mt-2">
                    <input
                      className="input-filed"
                      type="number"
                      placeholder="Enter Your experience"
                      name="experience"
                      value={experience}
                      onChange={(e) => {
                        setExperience(e.target.value);
                      }}
                      required
                    />{" "}
                    <br></br>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="input-div mt-2">
                    <input
                      className="input-filed"
                      type="password"
                      placeholder="Confirm Your password"
                      name="confPassword"
                      value={confPassword}
                      onChange={(e) => {
                        setConfPassword(e.target.value);
                      }}
                      required
                    />{" "}
                    <br></br>
                  </div>
                  <div className="input-div mt-2">
                    <input
                      className="input-filed"
                      type="text"
                      placeholder="Enter Your address"
                      name="address"
                      value={location}
                      onChange={(e) => {
                        setLocation(e.target.value);
                      }}
                      required
                    />{" "}
                    <br></br>
                  </div>
                </div>
                <div className="col-md-6 flex items-center">
                  <div className="input-div mt-2 space-x-2 flex items-center px-4">
                    <p className="m-0">Layoff</p>
                    <input
                      className="border ml-2"
                      type="checkbox"
                      id="layoff"
                      name="layoff"
                      value={layoff}
                      onChange={(e) => {
                        setLayoff(e.target.value);
                      }}
                    />{" "}
                    <br></br>
                  </div>
                </div>
                <div className="input-div mt-2 flex flex-col">
                  <label className="mb-2">Job Titles</label>
                  <div>
                    <div className="flex space-x-2 flex-wrap">
                      {jobTitleFields.map((item, index) => {
                        return (
                          <div
                            key={index}
                            className="py-2.5 px-4 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 w-fit flex space-x-2"
                          >
                            {item}{" "}
                            <RxCross2
                              onClick={() => {
                                const newjobFields = jobTitleFields.filter(
                                  (item, i) => i !== index
                                );
                                setjobTitleFields(newjobFields);
                              }}
                              className="ml-2 h-5 w-5"
                            />
                          </div>
                        );
                      })}
                    </div>
                    <div className="flex space-x-2 items-center ">
                      <input
                        placeholder="Web developer, Designer, etc..."
                        className="border"
                        type="text"
                        value={newJobTitle}
                        onChange={(e) => {
                          setNewJobTitle(e.target.value);
                        }}
                      />
                      <div
                        onClick={(e) => {
                          e.preventDefault();
                          if (newJobTitle !== "") {
                            setjobTitleFields([...jobTitleFields, newJobTitle]);
                            setNewJobTitle("");
                          }
                        }}
                        className="px-4 py-2 border text-white bg-blue-500 rounded-full hover:bg-blue-700 transition-all hover:px-6"
                      >
                        Add Job Title
                      </div>
                    </div>
                  </div>
                </div>
                <div className="input-div mt-2 flex flex-col">
                  <label className="mb-2">Skills</label>
                  <div>
                    <div className="flex space-x-2 flex-wrap">
                      {skillFields.map((item, index) => {
                        return (
                          <div
                            key={index}
                            className="py-2.5 px-4 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 w-fit flex space-x-2"
                          >
                            {item}{" "}
                            <RxCross2
                              onClick={() => {
                                const newSkillFields = skillFields.filter(
                                  (item, i) => i !== index
                                );
                                setskillFields(newSkillFields);
                              }}
                              className="ml-2 h-5 w-5"
                            />
                          </div>
                        );
                      })}
                    </div>
                    <div className="flex space-x-2 items-center ">
                      <input
                        placeholder="React, Node, etc..."
                        className="border"
                        type="text"
                        value={newSkill}
                        onChange={(e) => {
                          setNewSkill(e.target.value);
                        }}
                      />
                      <div
                        onClick={(e) => {
                          e.preventDefault();
                          if(newSkill !== ""){
                            setskillFields([...skillFields, newSkill]);
                            setNewSkill("");
                          }
                        }}
                        className="px-4 py-2 border text-white bg-blue-500 rounded-full hover:bg-blue-700 transition-all hover:px-6"
                      >
                        Add Skill
                      </div>
                    </div>
                  </div>
                </div>
                <div className="input-div mt-2 flex flex-col">
                  <label className="mb-2" htmlFor="description">
                    Previous Job Description
                  </label>
                  <textarea
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}
                    rows={8}
                    id="description"
                  />
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
