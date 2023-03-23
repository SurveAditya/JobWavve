"use client";
import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import JobCard from "./JobCard";
import JobList from "./JobList.jsx";
import JobTable from "./JobTable";
import Loading from "./Loading";
export default function MyJobs() {
  const { email } = useParams();

  //   const { data, isFetching } = useGetJobByEmployeeQuery(email); // fetch data for email
  //   if (isFetching) return <Loading />;
  const [adminJobs, setAdminJobs] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

  const fetchAdminJobs = async () => {
    axios
      .get(`https://LOC.adityasurve1.repl.co/user/jobs/`, {
        headers: { token: localStorage.getItem("token") },
        auth: { user: { _id: localStorage.getItem("token") } },
      })
      .then((response) => {
        console.log(response);
        setAdminJobs(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    setIsLoading(true);
    fetchAdminJobs();
  }, []);

  if(isLoading) return <Loading/>
  return (
    <div className="pt-14 p-10">
      <div className="bg-primary/10 p-5 rounded-2xl">
        <h1 className="font-semibold text-xl">My Jobs</h1>
      </div>

      {adminJobs?.length ? (
        <JobList jobs={adminJobs} />
      ) : (
        <div className="flex items-center justify-center flex-col h-[70vh] gap-4">
          <h3 className="text-base font-medium">You didn't post any Job</h3>
          <Link to="/dashboard/add-job">
            <button className="px-4 py-2 border text-white bg-blue-500 rounded-full hover:bg-blue-700 transition-all hover:px-6">
              Add Now
            </button>
          </Link>
        </div>
      )}
      <br />
    </div>
  );
}
