import React from "react";
import { Link } from "react-router-dom";

import logo from "../assets/img/logo.jpg";

function Navbar() {
  return (
    <nav className="navbar navbar-light bg-light static-top">
      <div className="container">
        <Link to="/">
          <img src={logo} width="300" height="50" />
        </Link>
        <div>
          <Link to="/login">
            <a className="btn btn-primary mr-4" href="#">
              Sign In
            </a>
          </Link>
          <Link to="/register">
            <a className="btn btn-secondary" href="#">
              Sign Up
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
