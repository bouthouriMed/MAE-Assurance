import { combineReducers } from "redux";
import authReducer from "./authReducer";
import reclamationReducer from "./reclamationReducer";

export default combineReducers({
  authReducer,
  reclamationReducer,
});
