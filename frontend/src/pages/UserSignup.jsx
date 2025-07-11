import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { UserDataContext } from "../context/UserContext";
const UserSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserDataContext);
  const submitHandler = async (e) => {
    e.preventDefault();
    const newUser = {
      fullname: {
        firstname: firstName,
        lastname: lastName,
      },
      email: email,
      password: password,
    };
    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/users/register`,
      newUser
    );
    if (response.status === 201) {
      setUser(response.data.user);
      localStorage.setItem("token", response.data.token);

      navigate("/home");
    }
    setEmail("");
    setPassword("");
    setFirstName("");
    setLastName("");
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
          <button className="bg-black text-white font-bold mb-7 rounded px-4 py-2 border w-full text-lg">
            Create New Account
          </button>
        </form>
        <p className="text-center">
          Already have a account?{" "}
          <Link to="/login" className=" text-blue-600">
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

export default UserSignup;
