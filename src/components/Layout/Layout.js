import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Helmet } from "react-helmet";
import  { Toaster } from "react-hot-toast";

// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

const Layout = ({ children, title, description, keywords, author }) => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />

        <title>{title}</title>
      </Helmet>

      <Header />

      <main style={{ minHeight: "86.62vh" }}>
        <Toaster />
        {children}
      </main>

      <Footer />
    </div>
  );
};

Layout.defaultProps = {
  title: "SmartCart - shope",
  description: "Mern Stack Project",
  keywords: "mern,react,node,mongodb,express,seo,bootstrap",
  auther: "Aryan",
};

export default Layout;
