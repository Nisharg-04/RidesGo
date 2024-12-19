import React, { useContext, useEffect, useState } from "react";
import { CaptainDataContext } from "../context/CaptainContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const CaptainProtectedWrapper = ({ children }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [isloding, setIsloding] = useState(true);
  const { captain, setCaptain } = useContext(CaptainDataContext);
  useEffect(() => {
    if (!token) {
      navigate("/captain-login");
    }
  }, [token, navigate]);
  axios
    .get(`${import.meta.env.VITE_BASE_URL}/captains/profile`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      setCaptain(res.data);
      if (res.data === null) {
        navigate("/captain-login");
      }
      setIsloding(false);
    })
    .catch((err) => {
      console.log(err);
      navigate("/captain-login");
    });
  if (isloding) {
    return <div>Loading...</div>;
  }

  return <>{children}</>;
};
