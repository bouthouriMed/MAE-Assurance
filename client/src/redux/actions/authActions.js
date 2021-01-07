import axios from "axios";
import {
  AUTH_ERROR,
  REGISTER_SUCCESS,
  USER_LOADED,
  LOGIN_SUCCESS,
  LOGOUT,
} from "./types";
import setTokenToHeader from "../../utils/setTokenToHeader";
import { toast } from "react-toastify";

// Register user
export const register = (formData) => async (dispatch) => {
  try {
    const res = await axios.post(
      "http://localhost:8090/rest/api/user/signUp",
      formData
    );

    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });

    // dispatch(loadUser());
  } catch (error) {
    // const errors = error.response.data.errors;

    // if (errors) {
    //   return errors.forEach((error) => toast.error(error.msg));
    // }
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

// Login user
export const login = (formData) => async (dispatch) => {
  try {
    const res = await axios.post(
      "http://localhost:8090/rest/api/user/signIn",
      formData
    );

    if (res.data.token) {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });
      dispatch(loadUser());
    } else {
      dispatch({
        type: AUTH_ERROR,
      });
      toast.error('Wrong Crendetials')
    }
  } catch (error) {
    // const errors = error.response.data.errors;

    // if (errors) {
    //   return errors.forEach((error) => toast.error(error.msg));
    // }

    dispatch({
      type: AUTH_ERROR,
    });
  }
};

// Load user
export const loadUser = () => async (dispatch) => {
  try {
    setTokenToHeader(localStorage.token);

    const res = await axios.get(
      "http://localhost:8090/rest/api/user/verifyToken"
    );

    if (res.data.appUser) {
      dispatch({
        type: USER_LOADED,
        payload: res.data,
      });
    }
  } catch (error) {
 
    dispatch({
      type: AUTH_ERROR,
    });
    
  }
};

// Logout
export const logout = () => (dispatch) => {
  dispatch({
    type: LOGOUT,
  });
};
