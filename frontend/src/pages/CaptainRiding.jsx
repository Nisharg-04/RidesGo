import React from "react";
import { Link } from "react-router-dom";

function CaptainRiding() {
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

      <div className="h-[85%] w-screen">
        {/* image for temp use */}
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt=""
        />
      </div>
      <div className="rounded-t-2xl h-[20%] w-screen flex flex-col justify-start gap-5 items-center fixed bottom-0 p-5 bg-yellow-500">
        <div className="flex items-center justify-between w-full">
          <div className=" ml-5 flex flex-col justify-center items-center">
            <h5 className="text-2xl font-semibold">
              <i className="text-2xl ri-pin-distance-line"></i>
            </h5>
            <p className="text-xl font-semibold">Distance</p>
            <h6>2.2 KM</h6>
          </div>
          <div className="mr-5">
            <button
              onClick={() => {}}
              className="text p-3 rounded-lg  w-full bg-[#10b461] font-semibold text-white text-xl "
            >
              Complete Ride
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CaptainRiding;
