import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { IoLocationSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const JobList = (props) => {

  const adminJobs = props.jobs;

  return (
    <div className="grid grid-cols-3 gap-5">
      {adminJobs?.map((item, index) => {
        return (
          <div key={index} class="flex justify-center w-full">
            <div class="block max-w-sm rounded-lg bg-white p-6 shadow-lg dark:bg-neutral-700 w-full">
              <h5 class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                {item.title}
              </h5>
              <span>{item.company}</span>
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
                to={`/job-data/${item._id}`}
                state={{ jobData: item }}
                className="inline-block rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] ml-auto"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                View
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default JobList;
