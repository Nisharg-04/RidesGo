import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="h-full">
      <div className="bg-cover bg-center bg-[url('D:\Nisharg\UberClone\frontend\src\pages\cover1.jpg')] pt-8 h-screen flex justify-between flex-col w-full ">
        <img
          className="ml-9 w-20"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt="Logo"
        />
        <div className="bg-white pb-5 py-4 px-4">
          <h2 className="text-3xl  font-bold">Get Started With Uber</h2>
          <Link
            to="/login"
            className="inline-block text-xl text-center w-full bg-black text-white py-3 font-bold rounded mt-5"
          >
            Continue
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
