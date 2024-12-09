import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef, useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import CaptainDetails from "../components/CaptainDetails";
import RidePopUp from "../components/RidePopUp";
import { SocketContext } from "../context/SocketContext";
import { CaptainDataContext } from "../context/CaptainContext";

import ConfirmRidePopUp from "../components/ConfirmRidePopUp";

const CaptainHome = () => {
  const [ridePopUp, setRidePopUp] = useState(true);
  const [confirmRidePopUp, setConfirmRidePopUp] = useState(false);
  const ridePopUpPanelRef = useRef(null);
  const confirmRidePopUpPanelRef = useRef(null);
  const { captain } = useContext(CaptainDataContext);
  const { sendMessage, receiveMessage } = useContext(SocketContext);

  useEffect(() => {
    console.log(captain);
    sendMessage("join", { userId: captain._id, userType: "captain" });
    // socket.on("ride-request", (data) => {
    //   setRidePopUp(true);
    // });
  }, []);
  useGSAP(
    function () {
      if (ridePopUp) {
        gsap.to(ridePopUpPanelRef.current, {
          transform: "translateY(0%)",
        });
      } else {
        gsap.to(ridePopUpPanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [ridePopUp]
  );
  useGSAP(
    function () {
      if (confirmRidePopUp) {
        gsap.to(confirmRidePopUpPanelRef.current, {
          transform: "translateY(0%)",
        });
      } else {
        gsap.to(confirmRidePopUpPanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [confirmRidePopUp]
  );
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

      <div className="h-[60%] w-screen">
        {/* image for temp use */}
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt=""
        />
      </div>
      <div className=" rounded-t-2xl h-[45%] w-screen flex flex-col justify-start gap-5 items-center fixed bottom-0 p-5 bg-white">
        <CaptainDetails />
      </div>

      <div
        ref={ridePopUpPanelRef}
        className="z-10 w-full translate-y-full fixed bottom-0 p-3 bg-white"
      >
        <RidePopUp
          ridePopUpPanelRef={ridePopUpPanelRef}
          setConfirmRidePopUp={setConfirmRidePopUp}
          setRidePopUp={setRidePopUp}
        />
      </div>
      <div
        ref={confirmRidePopUpPanelRef}
        className="z-10 h-screen w-full translate-y-full fixed bottom-0 p-3 bg-white"
      >
        <ConfirmRidePopUp
          confirmRidePopUpPanelRef={confirmRidePopUpPanelRef}
          setConfirmRidePopUp={setConfirmRidePopUp}
        />
      </div>
    </div>
  );
};

export default CaptainHome;
