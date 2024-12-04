import React, { useContext, useEffect,useState } from "react";
import { UserDataContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const UserProtectedWrapper = ({ children }) => {
  const navigate = useNavigate();
  const [isloding, setIsloding] = useState(true);
  const token = localStorage.getItem("token");
  const { user, setUser } = useContext(UserDataContext);
  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token, navigate]);
  axios
    .get(`${import.meta.env.VITE_BASE_URL}/users/profile`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      setUser(res.data);
      if (res.data.user === null) {
        navigate("/login");
      }
      setIsloding(false);
    })
    .catch((err) => {
      console.log(err);
      navigate("/login");
    });
  if (isloding) {
    return <div>Loading...</div>;
  }
  return <>{children}</>;
};
