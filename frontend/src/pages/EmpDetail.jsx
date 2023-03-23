import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import meeting from "../images/meeting.jpg";

const EmpDetail = () => {
  const location = useLocation();
  const { empData } = location.state || { from: { pathname: "/" } };

  const hitRealUpdateAPI = () => {
    fetch(
      `https://LOC.adityasurve1.repl.co/user/realUpdate?id=${empData._id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("Profile Viewed!", data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    hitRealUpdateAPI();
    console.log(empData);
  }, []);
  return (
    <div className="profile-page">
      <section className="relative block h-500-px">
        <div className="just-bg-img absolute top-0 w-full h-full bg-center bg-cover">
          <span
            id="blackOverlay"
            className="w-full h-full absolute opacity-50 bg-black"
          />
        </div>
        <div
          className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
          style={{ transform: "translateZ(0px)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x={0}
            y={0}
          >
            <polygon
              className="text-blueGray-200 fill-current"
              points="2560 0 2560 100 0 100"
            />
          </svg>
        </div>
      </section>
      <section className="relative py-16 bg-blueGray-200 mt-14">
        <div className="container mx-auto px-4">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
            <div className="px-6 mt-28">
              <div className="text-center mt-12">
                <h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                  {empData?.firstname} {empData?.lastname}
                </h3>
                <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                  {empData?.location}
                  <br />
                  {empData?.email?.toLowerCase()}
                  <br />
                  {empData?.mobilenum}
                </div>
                <div className="mb-2 text-blueGray-600 mt-10 flex space-x-2 flex-wrap justify-center">
                  {empData &&
                    empData?.jobTitle &&
                    Array.isArray(empData?.jobTitle) &&
                    empData?.jobTitle?.map((jobTitle) => {
                      return (
                        <div
                          data-te-chip-init
                          data-te-ripple-init
                          class="[word-wrap: break-word] my-[5px] flex h-[32px] cursor-pointer items-center rounded-[16px] border-2 border-gray-500 py-0 px-[12px] text-[19px] font-normal normal-case leading-loose text-gray-700 shadow-none transition-[opacity] duration-300 ease-linear hover:border-black"
                          data-te-ripple-color="dark"
                        >
                          {jobTitle}
                        </div>
                      );
                    })}
                </div>
                <div className="mb-2 text-blueGray-600">
                  <i className="fas fa-university mr-2 text-lg text-blueGray-400" />
                  University of Computer Science
                </div>
              </div>
              <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-9/12 px-4">
                    <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                      {empData?.previousJobDesc}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EmpDetail;
