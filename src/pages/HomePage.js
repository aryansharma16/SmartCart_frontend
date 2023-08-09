import React, { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";

const HomePage = () => {
  const [auth, setAuth] = useState(
    JSON.parse(localStorage.getItem("token")) || {}
  );

  // useEffect(() => {
  //   // Save authentication information to local storage whenever it changes
  //   localStorage.setItem("token", JSON.stringify(auth));
  // }, [auth]);

  return (
    <Layout title={"Home | SmartCart"}>
      <div className="home-page">
        <h1 className="home-page__title">Welcome to SmartCart</h1>
        <p className="home-page__description">
          Start shopping smarter with SmartCart, the ultimate online shopping
          platform.
          {localStorage.getItem("token")}
        </p>
      </div>
    </Layout>
  );
};

export default HomePage;
