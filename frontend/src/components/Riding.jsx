import React from "react";
import { Link } from "react-router-dom";

const Riding = () => {
  let imgurl =
    "https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png";
  return (
    <div className="h-screen relative overflow-hidden">
      <img
        className=" absolute left-5 top-5 w-12"
        src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
        alt=""
      />
      <Link
        to="/home"
        className="fixed h-10 w-10 flex items-center justify-center bg-white rounded-full top-2 right-2 z-50 hover:bg-gray-200"
      >
        <i className="text-lg font-semibold ri-home-5-line"></i>
      </Link>

      <div className="h-[60%] w-screen">
        {/* image for temp use */}
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt=""
        />
      </div>
      <div className="h-[45%] w-screen fixed bottom-0 p-5 bg-white">
        <h5 className=" text-center w-[93%] absolute top-0 ">
          <i className=" font-bold text-xl text-gray-200  ri-git-commit-fill"></i>
        </h5>
        <div className="flex item-center justify-between ">
          <img className="h-12 m-5" src={`${imgurl}`} alt="" />
          <div className="text-right">
            <div className="text-lg font-medium">Sarthak</div>
            <div className="text-lg font-bold">GJ24K7909</div>
            <div className="text-gray-600 text-xs">Maruti Suzuki Wagon R</div>
          </div>
        </div>

        <div className="w-full ">
          <div className="flex items-center gap-2  p-3 border-b-2">
            <i className="text-xl ri-map-pin-user-fill"></i>
            <div>
              <h3 className="text-lg font-medium">561/15 2nd Cross Rd,</h3>
              <p className="text-sm -mt-1 text-gray-600">
                {" "}
                2nd Block, R.T. Nagar
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2  p-3  ">
            <i className="text-xl ri-cash-line"></i>
            <div>
              <h3 className="text-lg font-medium">193.53</h3>
              <p className="text-sm -mt-1 text-gray-600"> Cash Payment</p>
            </div>
          </div>
          <button
            onClick={() => {}}
            className=" p-1 rounded-lg w-full bg-[#10b461] font-semibold text-white text-xl "
          >
            Make a Payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Riding;
