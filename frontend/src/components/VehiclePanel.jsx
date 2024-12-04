import React from "react";

const VehiclePanel = ({
  vehiclePanelRef,
  setVehiclePanel,
  setconfirmVehiclePanel,
  setImage,
}) => {
  return (
    <div
      ref={vehiclePanelRef}
      className="z-10 w-full fixed bottom-0 translate-y-full px-3 py-8 bg-white"
    >
      <h5
        onClick={() => {
          setVehiclePanel(false);
        }}
        className="p-3 text-center w-[93%] absolute top-0 "
      >
        <i className=" font-bold text-xl text-gray-200 ri-arrow-down-wide-line"></i>
      </h5>

      <h3 className="font-semibold text-2xl mt-2 mb-5">Choose a Vehicle</h3>

      <div
        onClick={() => {
          setconfirmVehiclePanel(true);
          setVehiclePanel(false);
          setImage("car");
        }}
        className="flex w-full p-3  mb-2 items-center justify-between border-2 active:border-black rounded-xl"
      >
        <img
          className="h-12"
          src="https://www.asaproadworthys.com.au/wp-content/uploads/2021/11/Select.jpeg"
          alt=""
        />
        <div className=" ml-4 w-1/2">
          <h4 className="text-lg font-medium">
            UberGo{" "}
            <span>
              <i className="ri-user-3-fill"></i>4
            </span>
          </h4>
          <h5 className="text-sm font-medium">2 mins away</h5>
          <p className="text-xs text-gray-600 font-medium">
            Afforadble, compact rides
          </p>
        </div>
        <h2 className="text-xl font-semibold">₹193.20</h2>
      </div>
      <div
        onClick={() => {
          setconfirmVehiclePanel(true);
          setVehiclePanel(false);
          setImage("bike");
        }}
        className="flex w-full p-3 mb-2 items-center justify-between border-2 active:border-black rounded-xl"
      >
        <img
          className="h-12"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png"
          alt=""
        />
        <div className=" ml-7 w-1/2">
          <h4 className="text-lg font-medium">
            Moto{" "}
            <span>
              <i className="ri-user-3-fill"></i>1
            </span>
          </h4>
          <h5 className="text-sm font-medium">3 mins away</h5>
          <p className="text-xs text-gray-600 font-medium">
            Afforadble motorcycle rides
          </p>
        </div>
        <h2 className="text-xl font-semibold">₹193.20</h2>
      </div>
      <div
        onClick={() => {
          setconfirmVehiclePanel(true);
          setVehiclePanel(false);
          setImage("auto");
        }}
        className="flex w-full p-3 mb-2 items-center justify-between border-2 active:border-black rounded-xl"
      >
        <img
          className="h-12"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png"
          alt=""
        />
        <div className=" ml-6 w-1/2">
          <h4 className="text-lg font-medium">
            UberAuto{" "}
            <span>
              <i className="ri-user-3-fill"></i>3
            </span>
          </h4>
          <h5 className="text-sm font-medium">5 mins away</h5>
          <p className="text-xs text-gray-600 font-medium">
            Afforadble Auto rides
          </p>
        </div>
        <h2 className="text-xl font-semibold">₹193.20</h2>
      </div>
    </div>
  );
};

export default VehiclePanel;
