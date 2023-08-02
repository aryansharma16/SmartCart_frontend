import Layout from "../../components/Layout/Layout";
import { React, useState } from "react";
import "./Register_login.css";
import axios from "axios";
import toast from "react-hot-toast";
import { useAuth } from "../../context/auth";
import { useNavigate, useLocation } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [answer, setAnswer] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API}/api/v/auth/forgot-password`,
        {
          email,
          newPassword,
          answer
        }
      );
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
     

        navigate("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Somthing went Wrong 'catch'");
    }
  };
  
  return (
    <Layout title={"ForgotPasword | SmartCart"}>
      <div className="forgot-password-container">
        <div className="register_container">
          <div className="register_wrapper">
            <h2 className="register_heading">Forgot Password</h2>
            <h2 className="register_heading22">
         
              &#9851; Change Your Password Here! &#9851;
            </h2>
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
                  type="text"
                  className="form-control"
                  placeholder="Enter Your Crush Name"
                  value={answer}
                  onChange={(e) => setAnswer(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter your Password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
              </div>

              <div className="button_flex">
                <button
                  onClick={(e) => navigate("/forgot-password")}
                  className="button-57"
                >
                  <span class="text">Forgot Passord</span>
                  <span>Change!</span>
                </button>
                <button className="button-85" onClick={handleSubmit}>
                  Reset 
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ForgotPassword;
