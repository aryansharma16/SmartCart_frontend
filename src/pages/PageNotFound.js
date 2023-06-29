import React from "react";
import Layout from "../components/Layout/Layout";
import { MdPageview } from "react-icons/md";
import { Link } from "react-router-dom";
const PageNotFound = () => {
  return (
    <Layout title={"Page-Not-Found"}>
      <div className="page-not-found">
        <h1 className="title">404</h1>
        <h2 className="subtitle">Oops! Page not found.</h2>
        <p className="description">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>
       <Link> <MdPageview /> </Link>
        <Link className="home-link" href="/">Go back to homepage</Link>
      </div>
    </Layout>
  );
};

export default PageNotFound;
