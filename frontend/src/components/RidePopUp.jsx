import React from "react";

const RidePopUp = ({
  ride,
  setRidePopUp,
  setConfirmRidePopUp,
  confirmRide,
}) => {
  // console.log(ride);
  let imgurl =
    "https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png";

  return (
    <>
      <h5 className="p-3 text-center w-[93%] absolute top-0 ">
        <i className="font-bold text-xl text-gray-200  ri-git-commit-fill"></i>
      </h5>

      <h3 className=" text-center font-semibold text-2xl mt-5 mb-5">
        New Ride Available!
      </h3>
      <div className=" mb-2 flex item-center justify-between  p-3 gap-5  w-full border-2 rounded-xl bg-gray-200  ">
        <div className="flex ">
          <img className="h-12" src={`${imgurl}`} alt="" />
          <div className="">
            <div className="text-lg font-medium">
              {ride &&
                `${ride.ride.userId.fullname.firstname} ${ride.ride.userId.fullname.lastname}`}
            </div>
            <div className="text-gray-600 text-xs">
              {ride && `${ride.ride.userId.email}`}
            </div>
          </div>
        </div>
        <div className="">
          <div className="text-xl font-medium">
            {ride && `${ride.distance}`}
          </div>
          <div className="text-gray-600 text-xs">Distance</div>
        </div>
      </div>
      <div className="flex gap-5 justify-between flex-col items-center">
        <div className="w-full">
          <div className="flex items-center gap-2  p-3 mb-2  border-b-2">
            <i className="text-xl ri-map-pin-user-line"></i>
            <div>
              <h3 className="text-lg font-medium">
                {ride && `${ride.ride.pickup}`}
              </h3>
              <p className="text-sm -mt-1 text-gray-600"> Pickup Location</p>
            </div>
          </div>
          <div className="flex items-center gap-2   p-3  mb-2 border-b-2">
            <i className="text-xl ri-map-pin-user-fill"></i>
            <div>
              <h3 className="text-lg font-medium">
                {ride && `${ride.ride.destination}`}
              </h3>
              <p className="text-sm -mt-1 text-gray-600">
                Destination Location
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2   p-3  mb-2 ">
            <i className="text-xl ri-cash-line"></i>
            <div>
              <h3 className="text-lg font-medium">
                {ride && `${ride.ride.fare}`}
              </h3>
              <p className="text-sm -mt-1 text-gray-600"> Cash Payment</p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between w-full">
          <button
            onClick={() => {
              setRidePopUp(false);
            }}
            className=" p-2 px-5 rounded-lg  bg-red-500 font-semibold text-white text-xl "
          >
            Ignore
          </button>
          <button
            onClick={() => {
              setRidePopUp(false);
              setConfirmRidePopUp(true);
              confirmRide();
            }}
            className=" p-2 px-5 rounded-lg  bg-[#10b461] font-semibold text-white text-xl "
          >
            Accept
          </button>
        </div>
      </div>
    </>
  );
};

export default RidePopUp;
