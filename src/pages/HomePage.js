import React, { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";

const HomePage = () => {
  const [auth, setAuth] = useState(JSON.parse(localStorage.getItem("token")) || {});

  // useEffect(() => {
  //   // Save authentication information to local storage whenever it changes
  //   localStorage.setItem("token", JSON.stringify(auth));
  // }, [auth]);

  return (
    <Layout title={"Home | SmartCart"}>
      <div className="home-page">
        <h1 className="home-page__title">Welcome to SmartCart</h1>
        <p className="home-page__description">
          Start shopping smarter with SmartCart, the ultimate online shopping platform.
          <pre>{JSON.stringify(auth.token , null, 4)}</pre>

          <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown button
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>
        </p>
      </div>
    </Layout>
  );
};

export default HomePage;
