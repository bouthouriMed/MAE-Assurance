import axios from "axios";
import {
  AUTH_ERROR,
  REGISTER_SUCCESS,
  USER_LOADED,
  LOGIN_SUCCESS,
  LOGOUT
} from "./types";
import setTokenToHeader from "../../utils/setTokenToHeader";
import { toast } from "react-toastify";

// Register user
export const register = ({ firstname, lastname, email, password }) => async (
  dispatch
) => {
  try {
    const res = await axios.post("/api/user", {
      firstname,
      lastname,
      email,
      password,
    });
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });

    dispatch(loadUser());
  } catch (error) {
    const errors = error.response.data.errors;

    if (errors) {
      return errors.forEach((error) => toast.error(error.msg));
    }
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

// Login user
export const login = ({ email, password }) => async (dispatch) => {
  try {
    const res = await axios.post("/api/auth", { email, password });

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });

    dispatch(loadUser());
  } catch (error) {
    const errors = error.response.data.errors;

    if (errors) {
      return errors.forEach((error) => toast.error(error.msg));
    }

    dispatch({
      type: AUTH_ERROR,
    });
  }
};

// Load user
export const loadUser = () => async (dispatch) => {
  try {
    setTokenToHeader(localStorage.token);

    const res = await axios.get("/api/auth");
    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
  } catch (error) {
    const errors = error.response.data.errors;

    if(errors) {
      return errors.forEach(error => toast.error(error.msg))
    }
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

// Logout
export const logout = () => (dispatch) => {
  dispatch({

  });

  dispatch({
    type: LOGOUT,
  });
};
