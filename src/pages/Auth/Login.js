import { React, useState } from "react";
import Layout from "../../components/Layout/Layout";
import "./Register_login.css";
import axios from "axios";
import toast from "react-hot-toast";
import { useAuth } from "../../context/auth";

import { useNavigate } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/v/auth/login", {
        email,
        password,
      });
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });
        localStorage.setItem('auth', JSON.stringify(res.data))
        navigate("/");
        console.log(res);
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Somthing went Wrong 'catch'");
    }
  };
  return (
    <Layout>
      <div className="register_container">
        <div className="register_wrapper">
          <h2 className="register_heading">Login Here</h2>
          <form onSubmit={handleSubmit}>
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

            <button type="submit" className="button-85">
              Submit
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
