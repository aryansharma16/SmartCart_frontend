import React, { useEffect, useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { GrWorkshop } from "react-icons/gr";
import { useAuth } from "../../context/auth";

const Header = ({auth ,setAuth}) => {
  // const [auth, setAuth] = useAuth();
  const navigate = useNavigate(); 
      const handleLogout = (e) => {
    e.preventDefault();

    setAuth({
      ...auth,

      ["token"]: "",
    });
    localStorage.removeItem("token");
navigate("/login")
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary ">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            SmartCart <GrWorkshop to="/" />
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
            <span className="navbar-toggler-icon"></span>
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
                  Cart(0)
                </NavLink>
              </li>
              {/* {auth.token } */}
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
                  <li className="nav-item" id="logout_style">
                    <NavLink
                      to="/login"
                      className="nav-link"
                      onClick={handleLogout}
                    >
                      <button class="button-82-pushable" role="button">
                        <span class="button-82-shadow"></span>
                        <span class="button-82-edge"></span>
                        <span class="button-82-front text">Logout</span>
                      </button>
                    </NavLink>
                  </li>
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
