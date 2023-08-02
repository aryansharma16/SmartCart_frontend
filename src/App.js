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
function App() {
  return (
    <><Header />
      <Routes>
      
        <Route path="/" element={<HomePage />} />
        <Route exact path="/" element={<PrivateRoute />}>
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/customCSS" element={<CustomCss />} />
        <Route path="/customstyle" element={<CustomStyling />} />
        <Route path="/*" element={<PageNotFound />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
