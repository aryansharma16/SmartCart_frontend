import { React, useState } from "react";
import Layout from "../../components/Layout/Layout";
import "./Register_login.css";
import axios from "axios";
import toast from "react-hot-toast";
// import SuccessToast from "../../components/Toast/SuccessToast";
// import ErrorToast from "../../components/Toast/ErrorToast";
import { useNavigate } from "react-router-dom";
const Register = () => {
  // States to store data
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const navigate = useNavigate();
  // const [showSuccessToast, setShowSuccessToast] = useState(false);

  // / form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/v/auth/register", {
        name,
        email,
        password,
        phone,
        address,
      });
      if (res && res.data.success) {
        toast.success(res.data.message);
        // setShowSuccessToast(true);
        navigate("/login");
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
          <h2 className="register_heading">Register Here</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <input
                type="text"
                placeholder="Enter Your Name"
                className="form-control"
                id="exampleInputEmail1"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
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
            <div className="mb-3">
              <input
                type="number"
                className="form-control"
                placeholder="Enter phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>

            <div className="button_flex">
              <button type="submit" className="button-85">
                Submit
              </button>
              <button onClick={(e) => navigate("/login")} class="button-57" role="button">
                <span class="text">Already Registerd</span>
                <span>Login</span>
              </button>
              
            </div>
          </form>
        </div>
      </div>
      {/* <SuccessToast
        show={showSuccessToast}
        setShow={setShowSuccessToast}
        message="Registration successful!"
      /> */}
    </Layout>
  );
};

export default Register;
