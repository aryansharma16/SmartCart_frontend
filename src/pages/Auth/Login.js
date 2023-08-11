import { React, useState } from "react";
import Layout from "../../components/Layout/Layout";
import "./Register_login.css";
import axios from "axios";
import toast from "react-hot-toast";
// import { useAuth } from "../../context/auth";

import { useNavigate, useLocation } from "react-router-dom";
const Login = ({ auth, setAuth }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [auth, setAuth] = useAuth();
  // const [auth, setAuth] = useState();

  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API}/api/v/auth/login`,
        {
          email,
          password,
        }
      );
      if (res && res.data.success) {
        setAuth({
          ...auth,

          ["token"]: res.data.token,
        });
        // Save authentication information to local storage
        // setAuth(res.data.token)
        localStorage.setItem("token", JSON.stringify(res.data.token));
        localStorage.setItem("name", res.data.user.name);
        localStorage.setItem("role", res.data.user.role);
        localStorage.setItem("email", res.data.user.email);
        localStorage.setItem("phone", res.data.user.phone);
        console.log(res.data.user.role);
        console.log(res.data.user);
        if (res.data.user.role === 1) {
        console.log(res.data.user.role,"hii shf");

          navigate("/dashboard/admin");
        }else{

          navigate("/user/dashboard");
        }
        toast.success(res.data && res.data.message);
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong in the 'catch' block");
    }
    const role = localStorage.getItem("role");

  };
  return (
    <Layout title={"Login | Shope"}>
      <div className="register_container">
        <div className="register_wrapper">
          <h2 className="register_heading">Login Here</h2>
          <form>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Enter Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <input
                type="password"
                className="form-control"
                placeholder="Enter your Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="button_flex">
              <button
                onClick={(e) => navigate("/forgotpassword")}
                className="button-57"
              >
                <span class="text">Forgot Passord</span>
                <span>Change!</span>
              </button>
              <button className="button-85" onClick={handleSubmit}>
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
