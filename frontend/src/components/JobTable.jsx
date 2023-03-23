import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { BiCurrentLocation } from "react-icons/bi";
import { FaMarker } from "react-icons/fa";
import { Link } from "react-router-dom";
import User from "../images/shitti.jpg";
const JobTable = ({ jobData }) => {
  // const [emp, setEmp] = useState([]);
  const [emp, setRecEmp] = useState([]);
  function fetchRecEmp() {
    const data = { 
      vacancyId: jobData?._id,
    }
    axios
      .post(`https://LOC.adityasurve1.repl.co/user/recommendemployee`, data)
      .then((response) => {
        console.log(response);
        setRecEmp(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  // function fetchEmp() {
  //   const data = {
  //     creator: jobData?.creater || "640c5839ec422bf7374c5de0", 
  //     user: localStorage.getItem("userId"), 
  //     vacancy: jobData?._id,
  //   }
  //   axios
  //     .post(`https://LOC.adityasurve1.repl.co/job/employeeapply`, data)
  //     .then((response) => {
  //       console.log(response);
  //       setEmp(response.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }
  useEffect(() => {
    fetchRecEmp();
  }, [jobData?._id]);

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-[80%]">
      <div className="bg-gray-100 p-4 flex items-center justify-between">
        <h1>{jobData?.company}</h1>
        <Link
          to={`/job-detail/${jobData?._id}`}
          state={{ jobData: jobData }}
          type="button"
          class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        >
          Detail
        </Link>
      </div>
      {emp && Array.isArray(emp) && emp.length && (
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              {/* <th scope="col" className="p-4">
                  <div className="flex items-center">
                    <input
                      id="checkbox-all-search"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label htmlFor="checkbox-all-search" className="sr-only">
                      checkbox
                    </label>
                  </div>
                </th> */}
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Position
              </th>
              <th scope="col" className="px-6 py-3">
                Location
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {emp?.map((emp) => {
              return (
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  {/* <td className="w-4 p-4">
                  <div className="flex items-center">
                    <input
                      id="checkbox-table-search-1"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label htmlFor="checkbox-table-search-1" className="sr-only">
                      checkbox
                    </label>
                  </div>
                </td> */}
                  <th
                    scope="row"
                    className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    <img
                      className="w-10 h-10 rounded-full"
                      src={User}
                      alt="Jese image"
                    />
                    <div className="pl-3">
                      <div className="text-base font-semibold">{emp?.firstname} {emp?.lastname}</div>
                      <div className="font-normal text-gray-500">
                        {emp?.email}
                      </div>
                    </div>
                  </th>
                  <td className="px-6 py-4">{emp?.jobTitle[0]}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <BiCurrentLocation className="w-5 h-5"/>
                      {emp?.location}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <Link
                      to={`/employee-detail/${emp?._id}}`}
                      state={{ empData: emp }}
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      View
                    </Link>
                  </td>
                </tr>
              );
            })}
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              {/* <td className="w-4 p-4">
                  <div className="flex items-center">
                    <input
                      id="checkbox-table-search-2"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label htmlFor="checkbox-table-search-2" className="sr-only">
                      checkbox
                    </label>
                  </div>
                </td> */}
              <th
                scope="row"
                className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                <img
                  className="w-10 h-10 rounded-full"
                  src={User}
                  alt="Jese image"
                />
                <div className="pl-3">
                  <div className="text-base font-semibold">Bonnie Green</div>
                  <div className="font-normal text-gray-500">
                    bonnie@flowbite.com
                  </div>
                </div>
              </th>
              <td className="px-6 py-4">Designer</td>
              <td className="px-6 py-4">
                <div className="flex items-center">
                      <BiCurrentLocation className="w-5 h-5"/>
                  New York, USA
                </div>
              </td>
              <td className="px-6 py-4">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  View
                </a>
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              {/* <td className="w-4 p-4">
                  <div className="flex items-center">
                    <input
                      id="checkbox-table-search-2"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label htmlFor="checkbox-table-search-2" className="sr-only">
                      checkbox
                    </label>
                  </div>
                </td> */}
              <th
                scope="row"
                className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                <img
                  className="w-10 h-10 rounded-full"
                  src={User}
                  alt="Jese image"
                />
                <div className="pl-3">
                  <div className="text-base font-semibold">Jese Leos</div>
                  <div className="font-normal text-gray-500">
                    jese@flowbite.com
                  </div>
                </div>
              </th>
              <td className="px-6 py-4">Vue JS Developer</td>
              <td className="px-6 py-4">
                <div className="flex items-center">
                <BiCurrentLocation className="w-5 h-5"/>
                  Mumbai
                </div>
              </td>
              <td className="px-6 py-4">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  View
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
};

export default JobTable;
