import React from "react";
import Layout from "../components/Layout/Layout";
import  {useAuth} from '../../src/context/auth'
const HomePage = () => {
  const [auth,setAuth] = useAuth();
  return (
    <Layout title={"Home | SmartCart"}>
      <div className="home-page">
        <h1 className="home-page__title">Welcome to SmartCart</h1>
        <p className="home-page__description">
          Start shopping smarter with SmartCart, the ultimate online shopping platform.
          <pre>{JSON.stringify(auth,null,4)}</pre>
        </p>
      </div>
    </Layout>
  );
};

export default HomePage;
