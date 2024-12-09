import React from "react";

const LookingForDrivers = ({
  lookingForDriverRef,
  image,
  pickUp,
  destination,
  fare,
  createRide,
}) => {
  let imgurl = "";
  if (image === "car") {
    imgurl =
      "https://www.asaproadworthys.com.au/wp-content/uploads/2021/11/Select.jpeg";
  } else if (image === "bike") {
    imgurl =
      "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png";
  } else {
    imgurl =
      "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png";
  }
  return (
    <>
      <h5 className="p-3 text-center w-[93%] absolute top-0 ">
        <i className=" font-bold text-xl text-gray-200  ri-git-commit-fill"></i>
      </h5>

      <h3 className=" text-center font-semibold text-2xl mt-2 mb-5">
        Looking for Drivers Nearby..
      </h3>
      <div className="flex gap-5 justify-between flex-col items-center">
        <img className="h-20" src={`${imgurl}`} alt="" />
        <div className="w-full">
          <div className="flex items-center gap-2  p-3 mb-2  border-b-2">
            <i className="text-xl ri-map-pin-user-line"></i>
            <div>
              <h3 className="text-sm font-medium">{`${pickUp}`}</h3>
              
            </div>
          </div>
          <div className="flex items-center gap-2   p-3  mb-2 border-b-2">
            <i className="text-xl ri-map-pin-user-fill"></i>
            <div>
              <h3 className="text-sm font-medium">{`${destination}`}</h3>
            </div>
          </div>
          <div className="flex items-center gap-2   p-3  mb-2 ">
            <i className="text-xl ri-cash-line"></i>
            <div>
              <h3 className="text-sm font-medium">{`${fare}`}</h3>
              <p className="text-xs -mt-1 text-gray-600"> Cash Payment</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LookingForDrivers;
