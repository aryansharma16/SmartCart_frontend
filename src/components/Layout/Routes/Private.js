import React, { useEffect, useState } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
// import Spinner from "./Spinner";/
import Spinner from "../Spinner.js/Spinner";

export default function PrivateRoute() {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true); // State for showing the spinner

  useEffect(() => {
    // Simulate loading for 3 seconds
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => {
      clearTimeout(loadingTimeout);
    };
  }, []);

  useEffect(() => {
    if (!isLoading && !token) {
      navigate("/login");
    }
  }, [navigate, isLoading, token]);

  return isLoading  ? <Spinner /> : token ? <Outlet /> : <Navigate to="/login" />;
}
