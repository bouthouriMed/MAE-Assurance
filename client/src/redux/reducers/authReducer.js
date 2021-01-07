import { AUTH_ERROR, LOGIN_SUCCESS, LOGOUT, REGISTER_SUCCESS, USER_LOADED } from "../actions/types";

const initialState = {
  loading: true,
  token: localStorage.getItem('token'),
  isAuthenticated: false,
  user: null,
};

export default function (state = initialState, { type, payload }) {
  switch (type) {
   
    case LOGIN_SUCCESS:
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        loading: false,
        token: payload.token,
        isAuthenticated: true,
        user: payload.appUser
      };
      case REGISTER_SUCCESS:
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        loading: false,
        token: payload.token,
        isAuthenticated: true,
        user: payload.appUser
      };

    case AUTH_ERROR:
    case LOGOUT:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        user: null,
        loading: false,
      };

    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading:false,
        user: payload.appUser
      }
    default:
      return state;
  }
}
