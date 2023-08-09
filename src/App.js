import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Policy from "./pages/Policy";
import Contact from "./pages/Contact";
import PageNotFound from "./pages/PageNotFound";
import Register from "./pages/Auth/Register";
import Dashboard from "./pages/user/Dashboard";
// import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./pages/Auth/Login";
import CustomCss from "./pages/CustomCss";
import CustomStyling from "./pages/CustomStyling";
import PrivateRoute from "./components/Layout/Routes/Private";
import ForgotPassword from "./pages/Auth/ForgotPassword";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import AdminRoute from "./components/Layout/Routes/AdminRoute";
import { useEffect, useState } from "react";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import SampleUserComp from "./pages/user/SampleUserComp";
function App() {
  const [auth, setAuth] = useState({
    token: localStorage.getItem("token"),
  });

  useEffect(() => {
    const tokenExpiration = localStorage.getItem("tokenExpiration");
    if (tokenExpiration && new Date().getTime() > tokenExpiration) {
      // Token has expired, so log out the user
      setAuth({});
      localStorage.removeItem("token");
      localStorage.removeItem("tokenExpiration");
    }
  }, []);
  return (
    <>
      <Header auth={auth} setAuth={setAuth} />
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route exact path="/user" element={<PrivateRoute />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="samp" element={<SampleUserComp />} />
        </Route>

        <Route path="/dashboard/" element={<AdminRoute />}>
          <Route path="admin" element={<AdminDashboard />} />
        </Route>
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/customCSS" element={<CustomCss />} />
        <Route path="/customstyle" element={<CustomStyling />} />
        <Route path="/*" element={<PageNotFound />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/login"
          element={<Login token={auth} setAuth={setAuth} />}
        />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
