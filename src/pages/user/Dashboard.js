import React from "react";
import { useNavigate } from "react-router-dom";
import UserMenu from "../../components/Layout/UserMenu";
import Layout from "../../components/Layout/Layout";
import "../user/user.css"
const Dashboard = () => {
  const user = localStorage.getItem("name");
  const phone = localStorage.getItem("phone");
  const email = localStorage.getItem("email");

  return (
   <Layout>
     <div className="container-fluid m-3 p-3">
          <div className="row">
            <div className="col-md-3">
              <UserMenu />
            </div>
            <div className="col-md-9 user_container12 ">
              User Details
              <div className="customCard">Admin Name : {user}</div>
              <div className="customCard ">Admin Email : {email}</div>
              <div className="customCard ">Admin Contact : {phone}</div>
            </div>
          </div>
        </div>
   </Layout>
  );
};

export default Dashboard;
