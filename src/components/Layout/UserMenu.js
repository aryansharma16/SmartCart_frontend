import React from "react";
import Layout from "./Layout";
import { NavLink } from "react-router-dom"; // Make sure to import NavLink from 'react-router-dom'

const UserMenu = () => {
  return (
    <Layout>
      <div className="custom-admin-menu text-center top-pad">
        <h3 className="admin_panel_heading">User Dashboard</h3>
        <div className="list-group ">
          <NavLink
            to="/user/dashboard/orders"
            className="list-group-item list-group-item-action custom-nav-link"
            activeClassName="active"
          >
            Orders
          </NavLink>
          <NavLink
            to="/user/dashboard/profile"
            className="list-group-item list-group-item-action custom-nav-link"
            activeClassName="active"
          >
            Your Profile{" "}
          </NavLink>
         
        </div>
      </div>
    </Layout>
  );
};

export default UserMenu;
