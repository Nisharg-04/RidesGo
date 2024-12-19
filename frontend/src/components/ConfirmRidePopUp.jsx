import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const ConfirmRidePopUp = ({ setConfirmRidePopUp, ride, distance }) => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");
  let imgurl =
    "https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png";
  // console.log(ride);
  const submitHandler = async (e) => {
    e.preventDefault();
    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/rides/start-ride`,
      {
        otp,
        rideId: ride._id,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    // console.log(response.data);
    setConfirmRidePopUp(false); 
    navigate("/captain-riding");


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
            <div className="text-lg font-medium">{`${ride?.userId.fullname.firstname} ${ride?.userId.fullname.lastname}`}</div>
            <div className="text-gray-600 text-xs">{`${ride?.userId.email}`}</div>
          </div>
        </div>
        <div className="">
          <div className="text-xl font-medium">{`${distance}`}</div>
          <div className="text-gray-600 text-xs">Distance</div>
        </div>
      </div>
      <div className="flex gap-5 justify-between flex-col items-center">
        <div className="w-full">
          <div className="flex items-center gap-2  p-3 mb-2  border-b-2">
            <i className="text-xl ri-map-pin-user-line"></i>
            <div>
              {/* <h3 className="text-lg font-medium">51651 2nd Cross Rd,</h3> */}
              <p className="text-sm -mt-1 text-gray-600">{`${ride?.pickup}`}</p>
            </div>
          </div>
          <div className="flex items-center gap-2   p-3  mb-2 border-b-2">
            <i className="text-xl ri-map-pin-user-fill"></i>
            <div>
              {/* <h3 className="text-lg font-medium">561/15 2nd Cross Rd,</h3> */}
              <p className="text-sm -mt-1 text-gray-600">
                {`${ride?.destination}`}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2   p-3  mb-2 ">
            <i className="text-xl ri-cash-line"></i>
            <div>
              <h3 className="text-lg font-medium">{`${ride?.fare}`}</h3>
              <p className="text-sm -mt-1 text-gray-600"> Cash Payment</p>
            </div>
          </div>
        </div>
        <div className="w-[95%] flex flex-col gap-4 mt-4">
          <form
            className="flex flex-col gap-4"
            onSubmit={(e) => {
              submitHandler(e);
            }}
          >
            <input
              type="text"
              className=" font-mono bg-[#eeeeee] px-5 py-2 text-lg rounded-lg w-full mt-3"
              placeholder="Enter OTP"
              onChange={(e) => {
                setOtp(e.target.value);
              }}
            />
            <button
              type="submit"
              className="text-center p-2 rounded-lg w-full bg-[#10b461] font-semibold text-white text-xl "
            >
              {" "}
              Confirm
            </button>
          </form>
          {/* <button className="text-center p-2 rounded-lg w-full bg-[#10b461] font-semibold text-white text-xl ">
            Confirm
          </button> */}
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
