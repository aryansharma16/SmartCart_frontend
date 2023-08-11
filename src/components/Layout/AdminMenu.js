import React from "react";
import { NavLink } from "react-router-dom"; // Make sure to import NavLink from 'react-router-dom'
import "../../pages/Admin/admin.css";
const AdminMenu = () => {
  return (
    <>
      <div className="custom-admin-menu text-center">
        <h3 className="admin_panel_heading">Admin Panel</h3>
        <div className="list-group" >
          <NavLink
            to="/dashboard/admin/create-category"
            className="list-group-item list-group-item-action custom-nav-link"
            activeClassName="active"
          >
            Create Category
          </NavLink>
          <NavLink
            to="/dashboard/admin/create-product"
            className="list-group-item list-group-item-action custom-nav-link"
            activeClassName="active"
          >
            Create Product
          </NavLink>
          <NavLink
            to="/dashboard/admin/users"
            className="list-group-item list-group-item-action custom-nav-link"
            activeClassName="active"
          >
            Users
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default AdminMenu;
