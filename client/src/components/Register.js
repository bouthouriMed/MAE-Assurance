import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

import { register } from "../redux/actions/authActions";

import Footer from "./Footer";

import toUpperCase from "../utils/toUpperCase";
import { toast } from "react-toastify";

function Register() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    maritalStatus: "",
    profession: "",
    userName: "",
    password1: "",
    password2: "",
    sex: "",
    role: "",
    email: "",
  });

  const {
    firstName,
    lastName,
    maritalStatus,
    profession,
    userName,
    password1,
    password2,
    sex,
    role,
    email,
  } = formData;

  const dispatch = useDispatch();
  const isAuthenticated = useSelector(
    (state) => state.authReducer.isAuthenticated
  );
  const user = useSelector((state) => state.authReducer.appUser);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    const userData = {
      firstName,
      lastName,
      maritalStatus,
      profession,
      userName,
      password: password1,
      sex,
      role,
      email,
    };
    e.preventDefault();
    if (password1 == password2) {
      dispatch(register(userData));
    } else {
      toast.error("Password don't match")
    }
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
          <form className="form-signin mt-4" onSubmit={handleSubmit}>
            <h1 className="title">Sign Up</h1>

            <div className="row">
              <div className="col-6">
                <label className="sr-only mb-4">Nom</label>
                <input
                  type="text"
                  className="form-control mb-4"
                  placeholder="Nom"
                  name="firstName"
                  onChange={handleChange}
                  value={firstName}
                  required
                  autofocus
                />
                <label className="sr-only mb-4">Etat Civile</label>
                <select
                  className="form-control mb-4"
                  name="maritalStatus"
                  onChange={handleChange}
                  value={maritalStatus}
                >
                  <option value="" disabled selected>
                    Etat Civile
                  </option>
                  <option value="Célibateire">Célibataire</option>
                  <option value="Veuf">Veuf</option>
                  <option value="Marié">Marié</option>
                </select>
                <label className="sr-only mb-4">Profession</label>
                <input
                  type="text"
                  className="form-control mb-4"
                  placeholder="Profession"
                  name="profession"
                  onChange={handleChange}
                  value={profession}
                  required
                />
                <label className="sr-only mb-4">Nom d'utilisateur</label>
                <input
                  type="text"
                  className="form-control mb-4"
                  placeholder="Nom d'utilisateur"
                  name="userName"
                  onChange={handleChange}
                  value={userName}
                  required
                />
                <label className="sr-only mb-4">Mot de passe</label>
                <input
                  type="password"
                  className="form-control mb-4"
                  placeholder="Mot de passe"
                  name="password1"
                  onChange={handleChange}
                  value={password1}
                  required
                />
                <div className="checkbox mb-3">
                  <label>
                    <input type="checkbox" value="remember-me" /> Remember me
                  </label>
                </div>
              </div>

              <div className="col-6">
                <label className="sr-only mb-4">Prénom</label>
                <input
                  type="text"
                  className="form-control mb-4"
                  placeholder="Prénom"
                  name="lastName"
                  onChange={handleChange}
                  value={lastName}
                  required
                  autofocus
                />
                <label className="sr-only mb-4">Sex</label>
                <select
                  className="form-control mb-4"
                  name="sex"
                  onChange={handleChange}
                  value={sex}
                >
                  <option value="" disabled selected>
                    Sex
                  </option>
                  <option value="Homme">Homme</option>
                  <option value="Femme">Femme</option>
                </select>
                <label className="sr-only mb-4">Vous êtes</label>
                <select
                  className="form-control mb-4"
                  name="role"
                  onChange={handleChange}
                  value={role}
                >
                  <option value="" disabled selected>
                    Vous êtes
                  </option>
                  <option value="Adhérant">Adhérent</option>
                  <option value="Agent">Agent MAE</option>
                  <option value="Admin">Admin</option>
                </select>
                <label className="sr-only mb-4">Email</label>
                <input
                  type="email"
                  className="form-control mb-4"
                  placeholder="Email"
                  name="email"
                  onChange={handleChange}
                  value={email}
                  required
                />
                <label className="sr-only mb-4">
                  Confirmation mot de passe
                </label>
                <input
                  type="password"
                  className="form-control mb-4"
                  placeholder="Confirmation mot de passe"
                  name="password2"
                  onChange={handleChange}
                  value={password2}
                  required
                />
              </div>
            </div>

            <button
              className="btn btn-lg btn-primary btn-block"
              type="submit"
              style={{ backgroundColor: "rgb(63,81,181)" }}
            >
              Sign up
            </button>
            <p className="mt-5 mb-3 text-muted">
              {" "}
              Already a member ?{" "}
              <Link to="/login">
                <a href="#">Sign in here</a>
              </Link>
            </p>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Register;
