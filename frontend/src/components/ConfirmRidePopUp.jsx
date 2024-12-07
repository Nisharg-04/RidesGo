import React from "react";
import { Link } from "react-router-dom";

const ConfirmRidePopUp = ({
  confirmRidePopUpPanelRef,
  setConfirmRidePopUp,
}) => {
  let imgurl =
    "https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png";

  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <h5 className="p-3 text-center w-[93%] absolute top-0 ">
        <i className="font-bold text-xl text-gray-200  ri-git-commit-fill"></i>
      </h5>

      <h3 className=" text-center font-semibold text-2xl mt-5 mb-5">
        Confirm This Ride To Start!
      </h3>
      <div className=" mb-2 flex item-center justify-between  p-3 gap-5  w-full border-2 rounded-xl bg-gray-200  ">
        <div className="flex ">
          <img className="h-12" src={`${imgurl}`} alt="" />
          <div className="">
            <div className="text-lg font-medium">Sarthak</div>
            <div className="text-gray-600 text-xs">Rajkot, Gujarat</div>
          </div>
        </div>
        <div className="">
          <div className="text-xl font-medium">2.2KM</div>
          <div className="text-gray-600 text-xs">Distance</div>
        </div>
      </div>
      <div className="flex gap-5 justify-between flex-col items-center">
        <div className="w-full">
          <div className="flex items-center gap-2  p-3 mb-2  border-b-2">
            <i className="text-xl ri-map-pin-user-line"></i>
            <div>
              <h3 className="text-lg font-medium">51651 2nd Cross Rd,</h3>
              <p className="text-sm -mt-1 text-gray-600"> 2nd Block, . Nagar</p>
            </div>
          </div>
          <div className="flex items-center gap-2   p-3  mb-2 border-b-2">
            <i className="text-xl ri-map-pin-user-fill"></i>
            <div>
              <h3 className="text-lg font-medium">561/15 2nd Cross Rd,</h3>
              <p className="text-sm -mt-1 text-gray-600">
                {" "}
                2nd Block, R.T. Nagar
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2   p-3  mb-2 ">
            <i className="text-xl ri-cash-line"></i>
            <div>
              <h3 className="text-lg font-medium">193.53</h3>
              <p className="text-sm -mt-1 text-gray-600"> Cash Payment</p>
            </div>
          </div>
        </div>
        <div className="w-[95%] flex flex-col gap-4 mt-4">
          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}
          >
            <input
              type="text"
              className=" font-mono bg-[#eeeeee] px-5 py-2 text-lg rounded-lg w-full mt-3"
              placeholder="Enter OTP"
            />
          </form>
          <Link
            className="text-center p-2 rounded-lg w-full bg-[#10b461] font-semibold text-white text-xl "
            to="/captain-riding"
            onClick={() => {
              setConfirmRidePopUp(false);
            }}
          >
            Confirm
          </Link>
          <button
            onClick={() => {
              setConfirmRidePopUp(false);
            }}
            className=" p-2 rounded-lg w-full bg-red-500 font-semibold text-white text-xl "
          >
            Cancel
          </button>
        </div>
      </div>
    </>
  );
};

export default ConfirmRidePopUp;
