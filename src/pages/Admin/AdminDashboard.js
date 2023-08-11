import React from "react";
import Layout from "../../components/Layout/Layout";
import AdminMenu from "../../components/Layout/AdminMenu";
import "../../pages/Admin/admin.css";
const AdminDashboard = () => {
  const user = localStorage.getItem("name");
  const phone = localStorage.getItem("phone");
  const email = localStorage.getItem("email");
  return (
    <Layout>
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9 admin_panel_content22">
            Admin Details
            <div className="customCard">Admin Name : {user}</div>
            <div className="customCard ">Admin Email : {email}</div>
            <div className="customCard ">Admin Contact : {phone}</div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AdminDashboard;
