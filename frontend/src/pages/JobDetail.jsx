import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import meeting from "../images/meeting.jpg";
import { BsArrowRightShort, BsArrowReturnRight } from "react-icons/bs";
import { toast } from "react-hot-toast";
import PreviousBtn from "../components/PreviousBTN";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
const JobDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [replyOne, setReply] = useState("");

  const location = useLocation();
  const data = {};
  const {
    _id,
    companyName,
    position,
    // location,
    experience,
    workLevel,
    employmentType,
    salaryRange,
    skills,
    requirements,
    responsibilities,
    overview,
    queries,
    applicants,
  } = data?.data || {};

  const isJobHolder = true;

  const { jobData } = location.state || { from: { pathname: "/" } };

  console.log(jobData);


  useEffect(()=>{
    if(jobData === undefined){
      navigate('/')
    }
    // if(jobData?.id !== id){
    //   navigate('/')
    // }
    if(!jobData?.title && jobData?.title === ""){
      navigate('/')
    }
  })
  return (
    <div className="pt-14 grid grid-cols-12 gap-5 w-screen px-4 place-items-center">
      <div className="col-span-9 mb-10 w-[80%]">
        <div className="h-80 rounded-xl overflow-hidden">
          <img className="h-full w-full object-cover" src={meeting} alt="" />
        </div>
        <div className="space-y-5">
          <div className="flex justify-between items-center mt-5">
            <h1 className="text-xl font-semibold text-gray-900 px-5 py-1.5 bg-gray-100">
              {jobData?.title}
            </h1>

            <button className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline hover:bg-gray-800 hover:text-white duration transition-all">
              Apply
            </button>
            <span className=" bg-gray-900 text-sm text-white rounded-full p-2 px-4">
              Already Applied
            </span>
          </div>
          <div>
            <h1 className="text-gray-900 text-lg font-medium mb-3">Overview</h1>
            <p>{jobData?.description}</p>
          </div>
          <div>
            <h1 className="text-gray-900 text-lg font-medium mb-3">Skills</h1>
            <ul>
              {jobData?.skills?.map((skill, i) => (
                <li key={i} className="flex items-center">
                  <BsArrowRightShort  className="w-6 h-6"/> <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h1 className="text-gray-900 text-lg font-medium mb-3">Benefits</h1>
            <ul>
              {jobData?.benefits?.map((benefit, i) => (
                <li key={i} className="flex items-center">
                  <BsArrowRightShort  className="w-6 h-6"/> <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h1 className="text-gray-900 text-lg font-medium mb-3">
              Requirements
            </h1>
            <ul>
              {jobData?.requirements?.map((skill, i) => (
                <li key={i} className="flex items-center">
                  <BsArrowRightShort  className="w-6 h-6"/> <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h1 className="text-gray-900 text-lg font-medium mb-3">
              Responsibilities
            </h1>
            <ul>
              {jobData?.responsibilities?.map((skill, i) => (
                <li key={i} className="flex items-center">
                  <BsArrowRightShort  className="w-6 h-6"/> <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>
          <hr className="my-5" />
          <PreviousBtn />
        </div>
      </div>
      <div className="col-span-3">
        <div className="rounded-xl min-w-[200px] bg-gray-100 p-12 text-gray-900 space-y-5">
          <div>
            <p>Company</p>
            <h1 className="font-semibold text-lg">{jobData?.company}</h1>
          </div>
          <div>
            <p>Experience</p>
            <h1 className="font-semibold text-lg">{jobData?.minexp}</h1>
          </div>
          <div>
            <p>Salary</p>
            <h1 className="font-semibold text-lg">{jobData?.salary}</h1>
          </div>
          <div>
            <p>Location</p>
            <h1 className="font-semibold text-lg">{jobData?.location}</h1>
          </div>
        </div>
        <div className="mt-5 rounded-xl bg-gray-100 p-12 text-gray-900 space-y-5">
          <div>
            <h1 className="font-semibold text-lg">{jobData?.company}</h1>
          </div>
          <div>
            <p>Company Size</p>
            <h1 className="font-semibold text-lg">
              {/* {userData?.data?.comapnySize}
               */}
              10 - 50
            </h1>
          </div>
          <div>
            <p>Founded</p>
            <h1 className="font-semibold text-lg">2001</h1>
          </div>
          <div>
            <p>Email</p>
            <h1 className="font-semibold text-sm">
              {/* {userData?.data?.companyEmail} */}
              {jobData?.contactEmail}
            </h1>
          </div>
          <div>
            <p>Company Location</p>
            <h1 className="font-semibold text-lg">
              {/* {userData?.data?.companyLocation} */}
              {jobData?.location}
            </h1>
          </div>
          <div>
            <p>Website</p>
            <a className="font-semibold text-sm" href="#d">
              {/* {userData?.data?.companySite}
               */}
              www.{jobData?.company.toLowerCase()}.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
