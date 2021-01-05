import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";

import NavbarAuth from "./NavbarAuth";

function Login() {
  return (
    <div>
      <div className="login-page">
        <div className="container m-auto">
          <form class="form-signin mt-4">
            <h1 class="mb-3 title">
              Sign In
            </h1>
            <label for="inputEmail" class="sr-only mb-4">
              Email address
            </label>
            <input
              type="email"
              id="inputEmail"
              class="form-control mb-4"
              placeholder="Email address"
              required
              autofocus
            />
            <label for="inputPassword" class="sr-only mb-4">
              Password
            </label>
            <input
              type="password"
              id="inputPassword"
              class="form-control mb-4"
              placeholder="Password"
              required
            />
            <div class="checkbox mb-3">
              <label>
                <input type="checkbox" value="remember-me" /> Remember me
              </label>
            </div>
            <button class="btn btn-lg btn-primary btn-block" type="submit" style={{backgroundColor: 'rgb(63,81,181)'}}>
              Sign in
            </button>
            <p class="mt-5 mb-3 text-muted">
              {" "}
              Not a member yet ?{" "}
              <Link to="/register">
                <a href="#">Sign up here</a>
              </Link>{" "}
            </p>
          </form>
        </div>
      </div>
        <Footer/>
    </div>
  );
}

export default Login;
