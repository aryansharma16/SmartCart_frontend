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
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<PrivateRoute />}>
          <Route path="" element={<Dashboard />} />
        </Route>
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/customCSS" element={<CustomCss />} />
        <Route path="/customstyle" element={<CustomStyling />} />
        <Route path="/*" element={<PageNotFound />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
