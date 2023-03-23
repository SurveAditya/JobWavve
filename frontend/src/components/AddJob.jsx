"use client";
import React, { useEffect } from "react";
import { toast } from "react-hot-toast";
import { AiOutlineSwap } from "react-icons/ai";
import { BsCalendarDate, BsFillPersonFill, BsSearch } from "react-icons/bs";
import { FiTrash } from "react-icons/fi";
import { IoIosAirplane } from "react-icons/io";
import { MdAirlineSeatReclineExtra } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { BiCurrentLocation } from "react-icons/bi";
import { FaChild } from "react-icons/fa";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import axios from "axios";
// import { useAddJobMutation } from "../../../features/job/jobAPI";

const AddJob = () => {
  //   const {
  //     user: { _id, email, companyName },
  //   } = useSelector((state) => state.auth);

  //   const [addJob, { isError, isLoading, isSuccess, error, data }] =
  //     useAddJobMutation();
  const navigate = useNavigate();

  //   useEffect(() => {
  //     if (isLoading) {
  //       toast.loading("Adding Job with all the details", {
  //         id: "jobLoad",
  //         duration: 1000,
  //       });
  //     }
  //     if (isSuccess) {
  //       toast.success("Job added successfully", {
  //         id: "jobAdd",
  //         icon: "✅",
  //         style: {
  //           borderRadius: "10px",
  //           background: "#333",
  //           color: "#fff",
  //         },
  //       });
  //     }
  //     if (isError) {
  //       toast.error("Failed to add the Job", { id: "jobFail" });
  //     }
  //   }, [isLoading, isSuccess, isError, error, data]);

  // form states..
  const [position, setPosition] = useState("");
  const [location, setLocation] = useState("");
  const [experience, setExperience] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [salary, setSalary] = useState("");
  const [desc, setDesc] = useState("");
  const [company, setCompany] = useState("");

  const [newSkill, setNewSkill] = useState("");
  const [skillFields, setskillFields] = useState([]);
  const [newRes, setNewRes] = useState("");
  const [resFields, setresFields] = useState([]);
  const [newReq, setNewReq] = useState("");
  const [reqFields, setreqFields] = useState([]);
  const [newBenefit, setNewBenefit] = useState("");
  const [benefitField, setbenefitField] = useState([]);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (
      !position ||
      !location ||
      !experience ||
      !contactEmail ||
      !salary ||
      !desc ||
      !skillFields.length ||
      !resFields.length ||
      !reqFields.length ||
      !benefitField.length
    ) {
      toast.error("Please fill all the fields", { id: "jobFail" });
      return;
    }
    if (!contactEmail.includes("@")) {
      toast.error("Please enter a valid email", { id: "jobFail" });
      return;
    }
    const obj = {
      title: position,
      company: company,
      location: location,
      minexp: parseInt(experience),
      salary: parseInt(salary),
      description: desc,
      skills: skillFields,
      responsibilities: resFields,
      qualifications: reqFields,
      benefits: benefitField,
      contactEmail: contactEmail,
    };
    console.log("form data", obj);
    // setTimeout(() => {
    //   navigate("/jobs");
    // }, 2500);
    // const url = "https://LOC.adityasurve1.repl.co/user/postjob";
    // const response = await fetch(url, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(obj), // body data type must match "Content-Type" header
    // });

    axios
      .post(`https://LOC.adityasurve1.repl.co/user/postjob`, {
        title: position,
        company: company,
        location: location,
        minexp: parseInt(experience),
        salary: parseInt(salary),
        description: desc,
        skills: skillFields,
        responsibilities: resFields,
        qualifications: reqFields,
        benefits: benefitField,
        contactEmail: contactEmail,
      })
      .then((data) => {
        console.log(data);
        if (data.status === "success") {
          toast.success("Job added successfully", {
            id: "jobAdd",
            icon: "✅",
            style: {
              borderRadius: "10px",
              background: "#333",
              color: "#fff",
            },
          });
          setTimeout(() => {
            navigate("/jobs");
          }, 2500);
        } else {
          toast.error("Failed to add the Job", { id: "jobFail" });
        }
      })
      .catch((error) => {
        console.log(error);
      });

    // const data = await response.json();
    // console.log(data);

    setPosition("");
    setLocation("");
    setExperience("");
    setContactEmail("");
    setSalary("");
    setDesc("");
    setskillFields([]);
    setresFields([]);
    setreqFields([]);
    setbenefitField([]);
  };

  return (
    <div className="flex flex-col items-center overflow-auto p-10">
      <form
        className="bg-secondary/20 shadow-lg p-10 rounded-2xl flex flex-wrap gap-3 max-w-3xl justify-between"
        onSubmit={onSubmit}
      >
        <h1 className="w-full text-2xl text-blue-600 mb-5">
          Add a new position
        </h1>
        <div className="flex flex-col w-full max-w-xs">
          <label className="mb-2" htmlFor="position">
            Position
          </label>
          <input
            value={position}
            onChange={(e) => setPosition(e.target.value)}
            type="text"
            id="position"
            className="border"
          />
        </div>
        <div className="flex flex-col w-full max-w-xs">
          <label className="mb-2" htmlFor="experience">
            Company
          </label>
          <input
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            type="text"
            id="experience"
            className="border"
          />
        </div>
        <div className="flex flex-col w-full max-w-xs">
          <label className="mb-2" htmlFor="location">
            Location
          </label>
          <input
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            type="text"
            id="location"
            className="border"
          />
        </div>
        <div className="flex flex-col w-full max-w-xs">
          <label className="mb-2" htmlFor="experience">
            Experience
          </label>
          <input
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
            type="text"
            id="experience"
            className="border"
          />
        </div>
        <div className="flex flex-col w-full max-w-xs">
          <label className="mb-2" htmlFor="email">
            Contact Email
          </label>
          <input
            value={contactEmail}
            onChange={(e) => setContactEmail(e.target.value)}
            type="email"
            id="contact-email"
            className="border"
          />
        </div>
        <div className="flex flex-col w-full max-w-xs">
          <label className="mb-2" htmlFor="salaryRange">
            Salary Range
          </label>
          <input
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
            type="text"
            id="salary"
            className="border"
          />
        </div>
        {/* <div className="flex flex-col w-full max-w-xs">
          <label className="mb-2" htmlFor="location">
            Job Type
          </label>
          <select id="location">
            <option value="On Site">On Site</option>
            <option value="Remote">Remote</option>
            <option value="Hybrid">Hybrid</option>
          </select>
        </div> */}
        <hr className="w-full mt-2 bg-black" />
        <div className="flex flex-col w-full">
          <label className="mb-2" htmlFor="description">
            Description
          </label>
          <textarea
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            rows={8}
            id="description"
          />
        </div>
        <div className="flex flex-col w-full">
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
                  setskillFields([...skillFields, newSkill]);
                  setNewSkill("");
                }}
                className="px-4 py-2 border text-white bg-blue-500 rounded-full hover:bg-blue-700 transition-all hover:px-6"
              >
                Add Skill
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full">
          <label className="mb-2">Responsibilities</label>
          <div>
            <div className="flex space-x-2 flex-wrap">
              {resFields.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="py-2.5 px-4 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 w-fit flex space-x-2"
                  >
                    {item}{" "}
                    <RxCross2
                      onClick={() => {
                        const newresFields = resFields.filter(
                          (item, i) => i !== index
                        );
                        setresFields(newresFields);
                      }}
                      className="ml-2 h-5 w-5"
                    />
                  </div>
                );
              })}
            </div>
            <div className="flex space-x-2 items-center">
              <input
                placeholder="Write a responsibily..."
                className="border"
                type="text"
                value={newRes}
                onChange={(e) => {
                  setNewRes(e.target.value);
                }}
              />
              <div
                onClick={(e) => {
                  e.preventDefault();
                  setresFields([...resFields, newRes]);
                  setNewRes("");
                }}
                className="px-4 py-2 border text-white bg-blue-500 rounded-full hover:bg-blue-700 transition-all hover:px-6"
              >
                Add Responsibily
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full">
          <label className="mb-2">Requirements</label>
          <div>
            <div className="flex space-x-2 flex-wrap">
              {reqFields.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="py-2.5 px-4 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 w-fit flex space-x-2"
                  >
                    {item}{" "}
                    <RxCross2
                      onClick={() => {
                        const newReqFilds = reqFields.filter(
                          (item, i) => i !== index
                        );
                        setreqFields(newReqFilds);
                      }}
                      className="ml-2 h-5 w-5"
                    />
                  </div>
                );
              })}
            </div>
            <div className="flex space-x-2 items-center ">
              <input
                placeholder="Write a qualification..."
                className="border"
                type="text"
                value={newReq}
                onChange={(e) => {
                  setNewReq(e.target.value);
                }}
              />
              <div
                onClick={(e) => {
                  e.preventDefault();
                  setreqFields([...reqFields, newReq]);
                  setNewReq("");
                }}
                className="px-4 py-2 border text-white bg-blue-500 rounded-full hover:bg-blue-700 transition-all hover:px-6"
              >
                Add Qualification
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full">
          <label className="mb-2">Benefits</label>
          <div>
            <div className="flex space-x-2 flex-wrap">
              {benefitField.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="py-2.5 px-4 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 w-fit flex space-x-2"
                  >
                    {item}{" "}
                    <RxCross2
                      onClick={() => {
                        const newBenefitField = benefitField.filter(
                          (item, i) => i !== index
                        );
                        setbenefitField(newBenefitField);
                      }}
                      className="ml-2 h-5 w-5"
                    />
                  </div>
                );
              })}
            </div>
            <div className="flex space-x-2 items-center">
              <input
                placeholder="Write a benefit..."
                className="border"
                type="text"
                value={newBenefit}
                onChange={(e) => {
                  setNewBenefit(e.target.value);
                }}
              />
              <div
                onClick={(e) => {
                  e.preventDefault();
                  if (newBenefit === "") return;
                  setbenefitField([...benefitField, newBenefit]);
                  setNewBenefit("");
                }}
                className="px-4 py-2 border text-white bg-blue-500 rounded-full hover:bg-blue-700 transition-all hover:px-6"
              >
                Add Benefit
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end items-center w-full mt-3">
          <button
            className="px-4 py-2 border text-white bg-blue-500 rounded-full hover:bg-blue-700 transition-all hover:px-6"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddJob;

// Position name
// Company name
// Experience
// Work Level
// Salary Range
// Employment Type
// Location
// Overview
// Responsibilities
// Requirements
// Skills
