import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Spinner = () => {
  const [count, setCount] = useState(5); // Updated initial state to 6
  const navigate = useNavigate();
const location = useLocation();
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevValue) => prevValue - 1); // Updated the decrement logic
    }, 1000);

    if (count === 1) {
      navigate("/login", { stat: location.pathname });
    }

    return () => clearInterval(interval);
  }, [count, navigate, location]);

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "90vh" }}
    >
      <button className="btn btn-primary" type="button" disabled>
        <span
          className="spinner-grow spinner-grow-sm"
          role="status"
          aria-hidden="true"
        ></span>
        &nbsp; &nbsp; Redirecting to you in {count - 1} seconds....{" "}
        {/* Updated countdown display */}
      </button>
    </div>
  );
};

export default Spinner;