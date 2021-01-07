import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Link, Redirect } from "react-router-dom";
import { login } from "../redux/actions/authActions";
import Footer from "./Footer";

import NavbarAuth from "./NavbarAuth";

function Login() {
  const [formData, setFormData] = useState({
    userName: "",
    password: "",
  });

  const dispatch = useDispatch();
  const isAuthenticated = useSelector(
    (state) => state.authReducer.isAuthenticated
  );
  const user = useSelector((state) => state.authReducer.appUser);

  const { userName, password } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(login(formData));
  };

  if (isAuthenticated == true) {
    // const Name = toUpperCase(user.firstName);
    // toast.success(`Welcome ${Name}`);
    return <Redirect to="/" />;
  }

  return (
    <div>
      <div className="login-page">
        <div className="container m-auto">
          <form class="form-signin mt-4" onSubmit={handleSubmit}>
            <h1 class="mb-3 title">Sign In</h1>
            <label for="inputEmail" class="sr-only mb-4">
              Username
            </label>
            <input
              type="text"
              id="inputEmail"
              class="form-control mb-4"
              placeholder="Username"
              name="userName"
              value={userName}
              onChange={handleChange}
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
              name="password"
              value={password}
              onChange={handleChange}
              required
            />
            <div class="checkbox mb-3">
              <label>
                <input type="checkbox" value="remember-me" /> Remember me
              </label>
            </div>
            <button
              class="btn btn-lg btn-primary btn-block"
              type="submit"
              style={{ backgroundColor: "rgb(63,81,181)" }}
            >
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
      <Footer />
    </div>
  );
}

export default Login;
