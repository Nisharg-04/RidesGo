import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";
import LocationSearchPanel from "../components/LocationSearchPanel";
import VehiclePanel from "../components/VehiclePanel";
import ConfirmedVehicle from "../components/ConfirmedVehicle";
import LookingForDrivers from "../components/LookingForDrivers";
import WaitingForDriver from "../components/WaitingForDriver";
import axios from "axios";
function Home() {
  const [pickUp, setPickUp] = useState("");
  const [destination, setDestination] = useState("");
  const [panelOpen, setPanelOpen] = useState(false);
  const [vehiclePanel, setVehiclePanel] = useState(false);
  const [confirmVehiclePanel, setconfirmVehiclePanel] = useState(false);
  const [image, setImage] = useState("");
  const [lookingDriver, setLookingDriver] = useState(false);
  const [waitingDriver, setWaitingDriver] = useState(false);

  const [pickupSuggestions, setPickupSuggestions] = useState([]);
  const [destinationSuggestions, setDestinationSuggestions] = useState([]);

  const panelRef = useRef(null);
  const panelCloseRef = useRef(null);
  const vehiclePanelRef = useRef(null);
  const confirvehiclePanelRef = useRef(null);
  const lookingForDriverRef = useRef(null);
  const waitingForDriverRef = useRef(null);
  const fetchSuggestions = async (query, type) => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/maps/get-suggestions`,
        {
          params: { input: query },
        }
      );
      if (type === "pickup") {
        setPickupSuggestions(response.data);
      } else {
        setDestinationSuggestions(response.data);
      }
    } catch (error) {
      console.error("Error fetching suggestions:", error);
    }
  };

  const handlePickupChange = (e) => {
    const value = e.target.value;
    if (e.target.name === "pickup") setPickUp(value);

    if (e.target.name === "destination") setDestination(value);
    if (value) {
      fetchSuggestions(value, "pickup");
    } else {
      setPickupSuggestions([]);
    }
  };
  const handleSelectSuggestion = (e, location) => {
    setPickUp(location);
    setPickupSuggestions([]);

    setDestination(location);
    setDestinationSuggestions([]);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Form Submitted");
  };

  useGSAP(
    function () {
      if (panelOpen) {
        gsap.to(panelRef.current, {
          height: "70%",
          padding: "24px",
        });
        gsap.to(panelCloseRef.current, {
          opacity: 1,
        });
      } else {
        gsap.to(panelRef.current, {
          height: "0%",
          padding: "0px",
        });
        gsap.to(panelCloseRef.current, {
          opacity: 0,
        });
      }
    },
    [panelOpen]
  );

  useGSAP(
    function () {
      if (vehiclePanel) {
        gsap.to(vehiclePanelRef.current, {
          transform: "translateY(0%)",
        });
      } else {
        gsap.to(vehiclePanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [vehiclePanel]
  );

  useGSAP(
    function () {
      if (confirmVehiclePanel) {
        gsap.to(confirvehiclePanelRef.current, {
          transform: "translateY(0%)",
        });
      } else {
        gsap.to(confirvehiclePanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [confirmVehiclePanel]
  );

  useGSAP(
    function () {
      if (lookingDriver) {
        gsap.to(lookingForDriverRef.current, {
          transform: "translateY(0%)",
        });
      } else {
        gsap.to(lookingForDriverRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [lookingDriver]
  );
  useGSAP(
    function () {
      if (waitingDriver) {
        gsap.to(waitingForDriverRef.current, {
          transform: "translateY(0%)",
        });
      } else {
        gsap.to(waitingForDriverRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [waitingDriver]
  );

  return (
    <div className="h-screen relative overflow-hidden">
      <img
        className=" absolute left-5 top-5 w-20"
        src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
        alt=""
      />
      <div className="h-screen w-screen">
        {/* image for temp use */}
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt=""
        />
      </div>
      <div className="flex flex-col justify-end h-screen absolute top-0 w-full ">
        <div className="h-[30%] p-6 bg-white relative">
          <h5
            ref={panelCloseRef}
            className="absolute top-6 right-6 text-2xl font-bold"
            onClick={() => {
              setPanelOpen(false);
            }}
          >
            <i className="ri-arrow-down-wide-line"></i>
          </h5>
          <h4 className="text-2xl font-semibold">Find a trip</h4>
          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}
          >
            <div className="line absolute h-16 w-1 top-[45%] left-10 bg-gray-900 rounded-full"></div>

            <input
              onClick={() => setPanelOpen(true)}
              className="bg-[#eeeeee] text-base px-12 py-2 rounded-lg w-full mt-5"
              type="text"
              name="pickup"
              value={pickUp}
              onChange={(e) => {
                setPickUp(e.target.value);
                handlePickupChange(e);
              }}
              placeholder="Add a pick-up location"
              id=""
            />
            <input
              onClick={() => setPanelOpen(true)}
              className="bg-[#eeeeee] text-base px-12 py-2 rounded-lg w-full mt-3"
              type="text"
              name="destination"
              value={destination}
              onChange={(e) => {
                setDestination(e.target.value);
                handlePickupChange(e);
              }}
              placeholder="Enter your destination"
              id=""
            />
          </form>
        </div>
        <div ref={panelRef} className="bg-white">
          <LocationSearchPanel
            suggestions={pickupSuggestions}
            onSelect={(location) => handleSelectSuggestion(location)}
            setPanelOpen={setPanelOpen}
            setVehiclePanel={setVehiclePanel}
          />
        </div>
      </div>

      <VehiclePanel
        setVehiclePanel={setVehiclePanel}
        vehiclePanelRef={vehiclePanelRef}
        setconfirmVehiclePanel={setconfirmVehiclePanel}
        setImage={setImage}
      />
      <ConfirmedVehicle
        setconfirmVehiclePanel={setconfirmVehiclePanel}
        setLookingDriver={setLookingDriver}
        confirvehiclePanelRef={confirvehiclePanelRef}
        image={image}
      />
      <LookingForDrivers
        setLookingDriver={setLookingDriver}
        lookingForDriverRef={lookingForDriverRef}
        image={image}
      />
      <WaitingForDriver
        setLookingDriver={setLookingDriver}
        waitingForDriverRef={waitingForDriverRef}
      />
    </div>
  );
}

export default Home;
