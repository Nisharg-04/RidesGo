import React, { useContext, useEffect } from "react";
import { CaptainDataContext } from "../context/CaptainContext";
const CaptainDetails = () => {
  let { captain } = useContext(CaptainDataContext);
  captain = captain.captain;
  let imgurl =
    "https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png";

  return (
    <div className="mt-2 w-full h-full p-2 flex flex-col gap-2 bg-white rounded-xl  ">
      <h5 className="text-center w-[93%] absolute top-0 ">
        <i className=" font-bold text-xl text-gray-200  ri-git-commit-fill"></i>
      </h5>
      <div className="  flex item-center justify-between p-2 gap-5  w-full  ">
        <div className="flex ">
          <img className="h-12" src={`${imgurl}`} alt="" />
          <div className="">
            <div className="text-lg font-medium">{`${captain?.fullname.firstname} ${captain?.fullname.lastname}`}</div>
            <div className="text-gray-600 text-xs">Maruti Suzuki Wagon R</div>
          </div>
        </div>
        <div className="">
          <div className="text-xl font-medium">₹295</div>
          <div className="text-gray-600 text-xs">Earned</div>
        </div>
      </div>
      <div className=" bg-gray-100 w-full flex items-center justify-between gap-2  p-3  rounded-xl">
        <div className=" flex flex-col items-center  p-2">
          <i className=" text-3xl font-thin ri-time-fill"></i>
          <h5 className="text-lg font-semibold ">10.2</h5>
          <p className="text-center text-xs text-gray-500">Hours Online</p>
        </div>
        <div className=" flex flex-col items-center  p-2">
          <i className=" text-3xl font-thin ri-speed-up-line"></i>
          <h5 className="text-lg font-semibold ">10.2</h5>
          <p className="text-center text-xs text-gray-500">Hours Online</p>
        </div>
        <div className=" flex flex-col items-center  p-2">
          <i className=" text-3xl font-thin ri-booklet-line"></i>
          <h5 className="text-lg font-semibold ">10.2</h5>
          <p className="text-center text-xs text-gray-500">Hours Online</p>
        </div>
      </div>
    </div>
  );
};

export default CaptainDetails;
