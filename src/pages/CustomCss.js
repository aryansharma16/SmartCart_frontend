import React, { useState } from "react";
import Layout from "../components/Layout/Layout";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const CustomCss = () => {
  const navigate = useNavigate();
  const [cssplate, setCssplate] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/v/customcss/writecss", {
        cssplate,
      });
      if (res.data.success) {
        toast.success(res.data.message);
        // navigate("/login");
        console.log(res.data);
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <Layout title={"Home | SmartCart"}>
      <div className="home-page">
        <h1 className="home-page__title">Welcome to SmartCart</h1>
        <h3 className="home-page__title">Write your custom CSS</h3>
        <div className="custom-textarea-container">
          <textarea
            className="custom-textarea"
            rows="10"
            columns="10"
            placeholder="Enter your text here"
            onChange={(e) => setCssplate(e.target.value)}
          ></textarea>
        </div>
        <button className="button-89" type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </Layout>
  );
};

export default CustomCss;
