import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import aboutus from "../images/about_us.png";

const About = () => {
  return (
    <Layout title={"About Us | SmartCart"}>
      <div className="about-container">
        <div className="about-image">
        <img src={aboutus} alt="My Image" />
        </div>
        <div className="about-content">
          <h2 className="about-heading">About Us</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.
          </p>
          <p>
            Phasellus enim magna, varius et commodo a, pharetra sit amet nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.
          </p>
          <Link to="/" className="back-home-button">Back to Home</Link>
        </div>
      </div>
    </Layout>
  );
};

export default About;
