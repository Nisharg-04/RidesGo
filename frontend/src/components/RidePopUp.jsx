import React from "react";

const RidePopUp = () => {
  let imgurl =
    "https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png";

  return (
    <div
      //   ref={confirvehiclePanelRef}
      className="z-10 w-full fixed bottom-0 p-3 bg-white"
    >
      <h5 className="p-3 text-center w-[93%] absolute top-0 ">
        <i className=" font-bold text-xl text-gray-200  ri-git-commit-fill"></i>
      </h5>

      <h3 className=" text-center font-semibold text-2xl mt-5 mb-5">
        New Ride Available!
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
        <button
          onClick={() => {
            // setLookingDriver(true);
            // setconfirmVehiclePanel(false);
          }}
          className=" p-1 rounded-lg w-full bg-[#10b461] font-semibold text-white text-xl "
        >
          Confirm
        </button>
        <button
          onClick={() => {
            // setLookingDriver(true);
            // setconfirmVehiclePanel(false);
          }}
          className=" p-1 rounded-lg w-full bg-red-500 font-semibold text-white text-xl "
        >
          Ignore
        </button>
      </div>
    </div>
  );
};

export default RidePopUp;
