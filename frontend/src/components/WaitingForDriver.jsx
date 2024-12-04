import React from "react";

const WaitingForDriver = ({ waitingForDriverRef }) => {
  let imgurl =
    "https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png";
  return (
    <div
      ref={waitingForDriverRef}
      className="z-10 w-full fixed bottom-0 translate-y-full px-3 py-8 bg-white"
    >
      <h5 className="p-3 text-center w-[93%] absolute top-0 ">
        <i className=" font-bold text-xl text-gray-200  ri-git-commit-fill"></i>
      </h5>
      <div className=" mt-4 mb-2 relative overflow-hidden h-2 bg-gray-200">
        <div className="absolute inset-0 bg-blue-500 h-full animate-scrolling-line"></div>
      </div>

      <h3 className=" text-center font-semibold text-2xl mt-2 mb-5">
        Waiting For Driver To Confirm..
      </h3>
      {/* <div className="flex gap-5 justify-between flex-col items-center"> */}
      <div className="flex item-center justify-between ">
        <img className="h-20    " src={`${imgurl}`} alt="" />
        <div className="text-right">
          <div className="text-lg font-medium">Sarthak</div>
          <div className="text-xl font-bold">GJ24K7909</div>
          <div className="text-gray-600 text-sm">Maruti Suzuki Wagon R</div>
        </div>
      </div>

      <div className="w-full mt-5">
        <div className="flex items-center gap-2  p-3 mb-2  border-b-2">
          <i className="text-xl ri-shake-hands-line"></i>
          <div>
            <h3 className="text-lg font-medium">
              Meet Me At the Pickup Location
            </h3>
            <p className="text-sm -mt-1 text-gray-600"> 2 min away</p>
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
    </div>
    // </div>
  );
};

export default WaitingForDriver;
