import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { CaptainDataContext } from "../context/CaptainContext";
const CaptainSignup = () => {
  const navigate = useNavigate();
  const { captain, setCaptain } = useContext(CaptainDataContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [vehicleColor, setVehicleColor] = useState("");
  const [vehicleType, setVehicleType] = useState("");
  const [vehicleNumber, setVehicleNumber] = useState("");
  const [vehicleCapacity, setVehicleCapacity] = useState(1);
  const submitHandler = async (e) => {
    e.preventDefault();
    const newCaptain = {
      fullname: {
        firstname: firstName,
        lastname: lastName,
      },
      email: email,
      password: password,
      vehicle: {
        color: vehicleColor,
        plate: vehicleNumber,
        capacity: vehicleCapacity,
        vehicleType: vehicleType,
      },
    };

    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/captains/register`,
      newCaptain
    );
    if (response.status === 201) {
      setCaptain(response.data.user);
      localStorage.setItem("token", response.data.token);

      navigate("/captain-home");
    }

    // console.log(newCaptain);
    setEmail("");
    setPassword("");
    setFirstName("");
    setLastName("");
    setVehicleColor("");
    setVehicleNumber("");
    setVehicleType("");
    setVehicleCapacity(0);
  };
  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img
          className="w-20 mb-10"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt="Logo"
        />
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
        >
          <h3 className="text-lg font-medium mb-2">What's Your name</h3>
          <div className="flex gap-4 mb-6 ">
            <input
              className="bg-[#eeeeee] w-1/2  rounded px-4 py-2 border  text-lg placeholder:text-sm "
              type="text"
              name=""
              id=""
              placeholder="First name"
              required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              className="bg-[#eeeeee]    w-1/2 rounded px-4 py-2 border  text-lg placeholder:text-sm "
              type="text"
              name=""
              id=""
              placeholder="Last name"
              required
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <h3 className="text-lg font-medium mb-2">Enter email</h3>

          <input
            className="bg-[#eeeeee] w-full mb-5 rounded px-4 py-2 border  text-lg placeholder:text-sm "
            type="email"
            name=""
            id=""
            placeholder="email@example.com"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h3 className="text-lg font-medium mb-2">Enter Password</h3>

          <input
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg  placeholder:text-sm"
            type="password"
            name=""
            id=""
            placeholder="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <h3 className="text-lg font-medium mb-2">
            Enter Vehicle Information
          </h3>
          <div className="flex gap-4 mb-6 ">
            <input
              className="bg-[#eeeeee] w-1/2  rounded px-4 py-2 border  text-lg placeholder:text-sm "
              type="text"
              name=""
              id=""
              placeholder="Vechicle Color"
              required
              value={vehicleColor}
              onChange={(e) => setVehicleColor(e.target.value)}
            />
            <input
              className="bg-[#eeeeee]    w-1/2 rounded px-4 py-2 border  text-lg placeholder:text-sm "
              type="text"
              name=""
              id=""
              placeholder="Vehicle Number"
              required
              value={vehicleNumber}
              onChange={(e) => setVehicleNumber(e.target.value)}
            />
          </div>
          <div className="flex gap-4 mb-6 ">
            <input
              className="bg-[#eeeeee]    w-1/2 rounded px-4 py-2 border  text-lg placeholder:text-sm "
              type="number"
              name=""
              id=""
              placeholder="Vehicle Capacity"
              required
              // value={vehicleCapacity}
              onChange={(e) => setVehicleCapacity(e.target.value)}
            />

            <select
              className="bg-[#eeeeee] w-1/2  rounded px-4 py-2 border  text-[15px] placeholder:text-sm "
              name=""
              id=""
              required
              value={vehicleType}
              onChange={(e) => setVehicleType(e.target.value)}
            >
              <option className="" value="" disabled>
                Vehicle Type
              </option>
              <option value="car">Car</option>
              <option value="motorcycle">Bike</option>
              <option value="auto">Auto</option>
            </select>
          </div>

          <button className="bg-black text-white font-bold mb-7 rounded px-4 py-2 border w-full text-lg">
            Create Captain Account
          </button>
        </form>
        <p className="text-center mb-5">
          Already have a account?{" "}
          <Link to="/captain-login" className=" text-blue-600">
            Login here
          </Link>
        </p>
      </div>
      <div>
        <p className="text-[10px] leading-tight">
          By proceeding, you consent to get calls, WhatsApp or SMS messages,
          including by automated means, from Uber and its affiliates to the
          number provided.
        </p>
      </div>
    </div>
  );
};

export default CaptainSignup;
