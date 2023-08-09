import React, { useEffect, useState } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
// import Spinner from "./Spinner";/
import Spinner from "../Spinner.js/Spinner";

export default function AdminRoute() {
  const token = localStorage.getItem("token");
  const role= localStorage.getItem('role');

  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true); // State for showing the spinner

  useEffect(() => {
    // Simulate loading for 3 seconds
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => {
      clearTimeout(loadingTimeout);
    };
  }, []);

  useEffect(() => {
    console.log(token,typeof(role) ,"here iam t r ")
    if ((!isLoading && !token )|| role !=="1") {
      navigate("/login");
    }
  }, [navigate, isLoading, token,role]);

  return isLoading  ? <Spinner /> : token ? <Outlet /> : <Navigate to="/login" />;
}
