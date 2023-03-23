import Button from "react-bootstrap/Button";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import header from "../images/image.png";

import { HiLocationMarker } from "react-icons/hi";
import { BsBoxArrowUpRight } from "react-icons/bs";
import Footer from "../components/Footer";
import logo from "../images/logo.jpg";
import { IoLocationSharp } from "react-icons/io5";
import { TextToSpeech } from "../TextToSpeech";
import Slideshow from "../components/Slider";

export const Home = () => {
  let navigate = useNavigate();

  const [jobData, setjobData] = useState([]);
  const [filter, setFilter] = useState();

  console.log(filter);
  const options = {
    method: "GET",
    url: "https://LOC.adityasurve1.repl.co/user/recommendjobs",
    headers: {
      "content-type": "application/json",
      Authentication: `Bearer ${localStorage.getItem("token")}`,
    },
  };

  const fetchData = async () => {
    // const response = await axios.request(options);
    axios
      .get("https://LOC.adityasurve1.repl.co/user/recommendjobs", {
        headers: { token: localStorage.getItem("token") },
        auth: { user: { _id: localStorage.getItem("token") } },
      })
      .then((response) => {
        console.log(response);
        // setjobData(response.data);
        setjobData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    // console.log(response.data.organic_results);
    // setjobData(response.data.organic_results);
  };

  function fetchAllJobs() {
    axios
      .get("https://LOC.adityasurve1.repl.co/user/jobs", {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log(response);
        // setjobData(response.data);
        if (jobData.length === 0) {
          setjobData(response.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
  useEffect(() => {
    // if(localStorage.getItem("isAdmin")){
    //   navigate("/admin/dashboard")
    //   return
    // }
    fetchData();
    // fetchAllJobs();
  }, [filter]);

  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            <div className="mx-5" style={{ marginTop: "7rem" }}>
              <h1>An all-inclusive job board to help you find your fit.</h1>
              <p className="mt-1 margin-top-small">
                Unleashing the potential of individuals with
                special skills. Together we can help you get going in your
                job search journey.
              </p>

              <div className="upload-file-container center">
                <a href="http://10.120.102.90:3000/home" style={{ textDecoration: "none" }}>
                  <center>
                    <p className="font-size-text">
                      {" "}
                      Create your CV or your existing<br></br> resume & allow us
                      to do the magic !
                    </p>
                  </center>
                </a>
                {/* <input className="custom-file-input" type="file" />  */}
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <img src={header} className="img-fluid" />
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>


<div>
  <h1 className="text-center">Fetured Section</h1>
  <hr class="w-48 h-1 mx-auto my-4 bg-gray-300 border-0 rounded md:my-10 dark:bg-gray-700"/>
  <Slideshow />
</div>
      {jobData && Array.isArray(jobData) && jobData.length !== 0 && (
        <div className="container mt-5">
          <div className="row">
            <div>
              <h1>Recommended jobs for you!</h1>
            </div>
            {/* <div className='d-flex'>
            <Button className='button-filter' onClick={()=>{setFilter("all") }}  >All</Button>
            <Button className='button-filter' onClick={()=>{setFilter("Tech") }} >Tech</Button>
            <Button className='button-filter' onClick={()=>{setFilter("Design") }} >Design</Button>
            <Button className='button-filter' onClick={()=>{setFilter("Art") }} >Art</Button>
            <Button className='button-filter' onClick={()=>{setFilter("Operations") }} >Operations</Button>
            <Button className='button-filter' onClick={()=>{setFilter("Culinary Arts") }} >Culinary Arts</Button>
            <Button className='button-filter' onClick={()=>{setFilter("Business") }} >Business
            </Button>
            <Button className='button-filter'>Social Services</Button>
          </div> */}

            <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
            <div className="grid grid-cols-3 gap-4">
              {jobData &&
                Array.isArray(jobData) &&
                jobData?.map((item) => (
                  <div class="flex justify-center w-full">
                    <div class="block max-w-sm rounded-lg bg-white p-6 shadow-lg dark:bg-neutral-700 w-full">
                      <h5 class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                        {item.title}
                      </h5>
                      <span className="font-bold">{item.company}</span>
                      <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                        {item.description}
                      </p>
                      <p class="mb-4 text-sm text-neutral-900 dark:text-neutral-200">
                        <IoLocationSharp className="inline mr-2" />
                        {item.location}
                      </p>
                      <div className="flex flex-wrap space-x-2">
                        {item?.skills?.map((skill, index) => {
                          return (
                            <div
                              key={index}
                              className="py-2 px-3 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 w-fit flex space-x-2"
                            >
                              {skill}
                            </div>
                          );
                        })}
                      </div>
                      <Link
                        to={`/job-detail/${item._id}`}
                        state={{ jobData: item }}
                        className="inline-block rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] ml-auto"
                        data-te-ripple-init
                        data-te-ripple-color="light"
                      >
                        View
                      </Link>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      )}
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
};
