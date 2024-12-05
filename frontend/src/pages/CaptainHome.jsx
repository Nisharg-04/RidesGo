import React from "react";
import { Link } from "react-router-dom";
import CaptainDetails from "../components/CaptainDetails";
import RidePopUp from "../components/RidePopUp";

const CaptainHome = () => {
  return (
    <div className="h-screen relative overflow-hidden">
      <img
        className=" absolute left-5 top-5 w-12"
        src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
        alt=""
      />
      <Link
        to="/captain/logout"
        className="fixed h-10 w-10 flex items-center justify-center bg-white rounded-full top-2 right-2 z-50 hover:bg-gray-200"
      >
        <i class=" text-lg font-semibold ri-logout-circle-r-line"></i>
      </Link>

      <div className="h-[60%] w-screen">
        {/* image for temp use */}
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt=""
        />
      </div>
      <div className="h-[45%] w-screen flex flex-col justify-start gap-5 items-center fixed bottom-0 p-5 bg-white">
        <CaptainDetails />
      </div>

      <div className="">
        <RidePopUp />
      </div>
    </div>
  );
};

export default CaptainHome;
