import React, { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";

const HomePage = () => {
  const [auth, setAuth] = useState(
    JSON.parse(localStorage.getItem("token")) || {}
  );



  return (
    <Layout title={"Home | SmartCart"}>
      <div className="home-page">
        <h1 className="home-page__title">
          Welcome to SmartCart{" "}
          <span className="userName_home"> Dear'
  {localStorage.getItem("name")}
          </span>
        </h1>

        <p className="home-page__description">
          Start shopping smarter with SmartCart, the ultimate online shopping
          platform.
         
        </p>
      </div>
    </Layout>
  );
};

export default HomePage;
