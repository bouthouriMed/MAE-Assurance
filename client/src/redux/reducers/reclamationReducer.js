import { GET_RECLAMATIONS, GET_RECLAMATION } from "../actions/types";

const initialState = {
  loading: true,
  reclamations: [],
  reclamation: null,
};

export default function (state = initialState, { type, payload }) {
  switch (type) {
    case GET_RECLAMATIONS:
      return {
        ...state,
        loading: false,
        reclamations: payload,
      };
    case GET_RECLAMATION:
      return {
        ...state,
        loading: false,
        reclamation: payload,
      };

    default:
      return state;
  }
}
