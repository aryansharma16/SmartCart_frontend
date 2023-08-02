import React from "react";

const Spinner = () => {
  return (
    <div className="spinner-container">
      <button className="btn btn-primary" type="button" disabled>
        <span
          className="spinner-border spinner-border-sm"
          role="status"
          aria-hidden="true"
        ></span>
        Redirecting to dashboard....
      </button>
    </div>
  );
};

export default Spinner;
