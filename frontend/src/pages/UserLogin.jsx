import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserDataContext } from "../context/UserContext";
import axios from "axios";
const UserLogin = () => {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserDataContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState({});
  const submitHandler = async (e) => {
    e.preventDefault();
    const loginUser = { email, password };
    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/users/login`,
      loginUser
    );

    if (response.status == 200) {
      setUser(response.data.user);
      localStorage.setItem("token", response.data.token);
      navigate("/home");
    }
    setEmail("");
    setPassword("");
  };
  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img className=" w-24 ml-2 mb-2" src="logo.png" alt="Logo" />

        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
        >
          <h3 className="text-xl font-medium mb-2">What's Your email</h3>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base "
            type="email"
            name=""
            id="email"
            placeholder="email@example.com"
            required
          />
          <h3 className="text-xl font-medium mb-2">Enter Password</h3>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg  placeholder:text-base"
            type="password"
            name=""
            id="password"
            placeholder="password"
            required
          />
          <button className="bg-black text-white font-bold mb-7 rounded px-4 py-2 border w-full text-xl">
            Login
          </button>
        </form>
        <p className="text-center">
          New Here?{" "}
          <Link to="/signup" className=" text-blue-600">
            Create new Account
          </Link>
        </p>
      </div>
      <div>
        <Link
          to="/captain-login"
          className="bg-[#10b461] flex items-center justify-center text-white font-bold mb-5 rounded px-4 py-2 border w-full text-xl"
        >
          Sign in as Caption
        </Link>
      </div>
    </div>
  );
};

export default UserLogin;
