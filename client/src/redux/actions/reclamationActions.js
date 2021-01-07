import {
  ADD_FINAL_RECLAMATION,
  ADD_RECLAMATION,
  GET_RECLAMATION,
  GET_RECLAMATIONS,
  RECLAMATION_ERROR,
} from "./types";
import axios from "axios";
import setTokenToHeader from "../../utils/setTokenToHeader";
import { toast } from "react-toastify";

// Add Reclamation
export const addReclamation = (formData, history, status) => async (
  dispatch
) => {
  try {
    setTokenToHeader(localStorage.token);
    const res = await axios.post(
      "http://localhost:8090/rest/api/reclamation/saveStepOne",
      formData
    );

    dispatch({
      type: ADD_RECLAMATION,
      payload: res.data,
    });
    toast.success("Réclamation validée");
    history.push("/");
  } catch (error) {
    console.log(error);
    toast.error("Failed to save to database");
  }
};

// Get all Reclamations
export const getAllReclamations = () => async (dispatch) => {
  try {
    const res = await axios.get(
      "http://localhost:8090/rest/api/reclamation/getReclamations"
    );
    dispatch({
      type: GET_RECLAMATIONS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: RECLAMATION_ERROR,
    });
  }
};

// Get Reclamation by ID
export const getReclamationById = (id, history, status, role) => async (
  dispatch
) => {
  try {
    const res = await axios.get(
      `http://localhost:8090/rest/api/reclamation/getReclamation/${id}`
    );
    dispatch({
      type: GET_RECLAMATION,
      payload: res.data,
    });
    if (role === "Adhérant") {
      history.push("/user-reclamation");
    } else {
      history.push("/super-user-reclamation");
    }
  } catch (error) {
    dispatch({
      type: RECLAMATION_ERROR,
    });
  }
};

// Get my reclamations
export const getMyReclamations = () => async (dispatch) => {
  try {
    const res = await axios.get(
      "http://localhost:8090/rest/api/reclamation/getReclamations"
    );
    dispatch({
      type: GET_RECLAMATIONS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: RECLAMATION_ERROR,
    });
  }
};

// Confirm reclamation
export const confirmReclamation = (formData, history) => async (dispatch) => {
  try {
    setTokenToHeader(localStorage.token);
    const res = await axios.post(
      "http://localhost:8090/rest/api/reclamation/saveStepTwo",
      formData
    );

    dispatch({
      type: ADD_RECLAMATION,
      payload: res.data,
    });
    toast.success("Réclamation Confirmé");
    history.push("/reclamations-table");
  } catch (error) {
    console.log(error);
    toast.error("Failed to save");
  }
};

// ConfirmExpertise
export const confirmExpertise = (formData, history) => async (dispatch) => {
  try {
    setTokenToHeader(localStorage.token);
    const res = await axios.post(
      "http://localhost:8090/rest/api/reclamation/saveStepThree",
      formData
    );

    dispatch({
      type: ADD_RECLAMATION,
      payload: res.data,
    });
    toast.success("Expert Confirmé");
    history.push("/reclamations-table");
  } catch (error) {
    console.log(error);
    toast.error("Failed to save data");
  }
};

// Confirm Post Expertise
export const confirmPostExpertise = (formData, history) => async (dispatch) => {
  try {
    setTokenToHeader(localStorage.token);
    const res = await axios.post(
      "http://localhost:8090/rest/api/reclamation/saveStepFour",
      formData
    );

    dispatch({
      type: ADD_RECLAMATION,
      payload: res.data,
    });
    toast.success("Expertise Confirmé");
    history.push('/')
  } catch (error) {
    console.log(error);
    toast.error("Failed to save data");
  }
};

// Confirm Post Expertise
export const finishExpertise = (formData, history) => async (dispatch) => {
  try {
    setTokenToHeader(localStorage.token);
    const res = await axios.post(
      "http://localhost:8090/rest/api/reclamation/saveFinalStep",
      formData
    );

    dispatch({
      type: ADD_RECLAMATION,
      payload: res.data,
    });
    toast.success("Reclamation terminée");
    history.push('/')
  } catch (error) {
    console.log(error);
    toast.error("Failed to save data");
  }
};


// Delete reclamation by ID
export const deleteReclamationById = (id) => async dispatch => {
  try {
    const res = await axios.get(`http://localhost:8090/rest/api/reclamation/deleteReclamation/${id}`)

    dispatch({
      type: GET_RECLAMATIONS,
      payload: res.data
    })
  } catch (error) {
    console.log(error)
    toast.error("Error deleting items")
  }
}


// SetMeeting
export const setMeeting = (request, history) => async (dispatch) => {
  const res = await axios.post(
    "http://localhost:8090/rest/api/reclamation/takeMeeting",
    request
  );

  if (res.data == true) {
    toast.success("Rendez vous envoyé");
    history.push("/mes-reclamations");
  }
};

// Pre Expertise
export const preExpertise = (reclamation, history) => async (dispatch) => {
  const res = await axios.post(
    "http://localhost:8090/rest/api/reclamation/takeMeeting",
    reclamation
  );

  if (res.data == true) {
    dispatch({
      type: ADD_RECLAMATION,
      payload: reclamation,
    });
    toast.success("Réclamation validée");
    history.push("/reclamations-table");
  }
};
