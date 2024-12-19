import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef, useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import CaptainDetails from "../components/CaptainDetails";
import RidePopUp from "../components/RidePopUp";
import { SocketContext } from "../context/SocketContext";
import { CaptainDataContext } from "../context/CaptainContext";
import axios from "axios";
import ConfirmRidePopUp from "../components/ConfirmRidePopUp";
import LiveTracking from "../components/LiveTracking";

const CaptainHome = () => {
  const [ridePopUp, setRidePopUp] = useState(false);
  const [confirmRidePopUp, setConfirmRidePopUp] = useState(false);
  const ridePopUpPanelRef = useRef(null);
  const confirmRidePopUpPanelRef = useRef(null);
  let { captain } = useContext(CaptainDataContext);
  captain = captain.captain;
  const [ride, setRide] = useState(null);
  const [ridec, setRidec] = useState(null);
  const [distance, setDistance] = useState(null);
  // const { sendMessage, receiveMessage} = useContext(SocketContext);
  // useEffect(() => {
  //   console.log(captain);
  //   sendMessage("join", { userId: captain._id, userType: "captain" });

  //   const updateLocation = () => {
  //     navigator.geolocation.getCurrentPosition((position) => {
  //       const location = {
  //         ltd: position.coords.latitude,
  //         lng: position.coords.longitude,
  //       };
  //       console.log(location);

  //       sendMessage("update-location-captain", {
  //         userId: captain._id,
  //         userType: "captain",
  //         location,
  //       });
  //     });
  //   };

  //   const locationInterval = setInterval(updateLocation, 10000);
  //   updateLocation();
  //   return () => {
  //     clearInterval(locationInterval);
  //   };

  //   // socket.on("ride-request", (data) => {
  //   //   setRidePopUp(true);
  //   // });
  // }, []);

  // console.log(socket);
  // socket.on("new-ride", (data) => {
  //   console.log(data);
  //   // setRidePopUp(true);
  // });

  const { socket } = useContext(SocketContext);

  useEffect(() => {
    // console.log(captain);
    socket.emit("join", {
      userId: captain._id,
      userType: "captain",
    });
    const updateLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          socket.emit("update-location-captain", {
            userId: captain._id,
            location: {
              ltd: position.coords.latitude,
              lng: position.coords.longitude,
            },
          });
        });
      }
    };

    const locationInterval = setInterval(updateLocation, 10000);
    updateLocation();

    return () => clearInterval(locationInterval);
  }, []);

  socket.on("new-ride", (data) => {
    // console.log(data.ride);
    setDistance(data.distance);
    setRide(data);
    setRidePopUp(true);
  });

  async function confirmRide() {
    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/rides/confirm`,
      {
        rideId: ride.ride._id,
        captainId: captain._id,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    console.log(response.data.ride);
    setRidec(response.data.ride);
 
  }

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
        <i className=" text-lg font-semibold ri-logout-circle-r-line"></i>
      </Link>

      <div className="h-[60%] w-screen">
        {/* image for temp use */}
        {/* <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt=""
        /> */}
        <LiveTracking/>
      </div>
      <div className=" h-[40%] w-screen flex flex-col justify-start gap-5 items-center fixed bottom-0 p-2 bg-white">
        <CaptainDetails />
      </div>

      <div
        ref={ridePopUpPanelRef}
        className="z-10 w-full translate-y-full fixed bottom-0 p-3 bg-white"
      >
        <RidePopUp
          ride={ride}
          ridePopUpPanelRef={ridePopUpPanelRef}
          setConfirmRidePopUp={setConfirmRidePopUp}
          setRidePopUp={setRidePopUp}
          confirmRide={confirmRide}
        />
      </div>
      <div
        ref={confirmRidePopUpPanelRef}
        className="z-10 h-screen w-full translate-y-full fixed bottom-0 p-3 bg-white"
      >
        <ConfirmRidePopUp
          ride={ridec}
          distance={distance}
          confirmRidePopUpPanelRef={confirmRidePopUpPanelRef}
          setConfirmRidePopUp={setConfirmRidePopUp}
        />
      </div>
    </div>
  );
};

export default CaptainHome;
