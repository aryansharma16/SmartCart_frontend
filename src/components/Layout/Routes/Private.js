import React, { useEffect, useState } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import Spinner from "../Spinner.js/Spinner";

export default function PrivateRoute() {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const role = localStorage.getItem('role');
  const [roles, setRole] = useState(0);

  useEffect(() => {
    setRole(role); // Run once on mount
  }, []);

  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => {
      clearTimeout(loadingTimeout);
    };
  }, []);

  useEffect(() => {
    if ((!isLoading && !token) || role !== "0") {
      navigate("*");
    }
  }, [navigate, isLoading, token, role]);

  return isLoading ? <Spinner /> : token ? <Outlet /> : <Navigate to="/login" />;
}
