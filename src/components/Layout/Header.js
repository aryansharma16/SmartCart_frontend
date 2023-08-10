import React, { useEffect, useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { GrWorkshop } from "react-icons/gr";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faUserSlash } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Header = ({ auth, setAuth }) => {
  const navigate = useNavigate();
  
  const handleLogout = (e) => {
    e.preventDefault();

    setAuth({
      ...auth,
      token: "", // Corrected: Removed square brackets around "token"
    });
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    localStorage.removeItem("role");
    navigate("/login");
  };
  const role = localStorage.getItem("role");

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            SmartCart <GrWorkshop />{" "}
            {/* Corrected: Removed unnecessary "to" prop */}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon white-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to="/" className="nav-link">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/category" className="nav-link">
                  Category
                </NavLink>
              </li>
              <li>
                <NavLink to="/customCSS" className="nav-link">
                  Custom
                </NavLink>
              </li>
              <li>
                <NavLink to="/customstyle" className="nav-link">
                  CustomStyle
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/cart" className="nav-link">
                  <FontAwesomeIcon
                    icon={faCartShopping}
                    style={{ fontSize: "16px", color: "#4E4FEB" }}
                  />
                  &#160;(0)
                </NavLink>
              </li>

              {/* Render different links based on whether the user is logged in */}
              {!auth?.token ? (
                <>
                  <li className="nav-item">
                    <NavLink to="/register" className="nav-link">
                      Register
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/login" className="nav-link">
                      Login
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  <div className="dropdown">
                    <button
                      className="btnMore btn-secondary dropdown-toggle button-28"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <span className="icon" style={{ color: "green" }}>
                        <FontAwesomeIcon icon={faUser} />
                        &nbsp;
                      </span>
                      {localStorage.getItem("name")}
                    </button>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton"
                    >
                      <li>
                        {role === "1" ? (
                          <NavLink
                            to="/dashboard/admin"
                            className="dropdown-item"
                          >
                          Admin Dash....
                          </NavLink>
                        ) : (
                          <NavLink
                            to="/user/dashboard"
                            className="dropdown-item"
                          >
                            User Dashboard
                          </NavLink>
                        )}
                      </li>

                      <li>
                        <NavLink to="/about" className="dropdown-item">
                          About
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/contact" className="dropdown-item">
                          Contact
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/policy" className="dropdown-item">
                          Privacy Policy
                        </NavLink>
                      </li>
                      <li id="logout_style">
                        {/* Logout button */}
                        <NavLink
                          to="/login"
                          className="nav-link"
                          onClick={handleLogout}
                        >
                          <button className="button-82-pushable" role="button">
                            <span className="button-82-shadow"></span>
                            <span className="button-82-edge"></span>
                            <span className="button-82-front text">
                              <FontAwesomeIcon
                                icon={faUserSlash}
                                style={{ fontSize: "16px", color: "purple" }}
                              />
                              &nbsp; Logout
                            </span>
                          </button>
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
