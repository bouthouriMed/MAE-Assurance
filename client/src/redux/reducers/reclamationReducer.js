import {
  GET_RECLAMATIONS,
  GET_RECLAMATION,
  ADD_RECLAMATION,
  UPDATE_RECLAMATION,
} from "../actions/types";

const initialState = {
  loading: true,
  reclamations: [],
  reclamation: null,
};

export default function (state = initialState, { type, payload }) {
  switch (type) {
    case ADD_RECLAMATION:
      return {
        ...state,
        loading: false,
        reclamation: {...state.reclamation, payload},
      };
    case UPDATE_RECLAMATION:
      console.log(payload);
      return {
        ...state,
        loading: false,
        reclamation: {
          ...state.reclamation,
          secondCarOwner: payload.secondCarOwner,
          secondDriverName: payload.secondDriverName,
          permitLicence2: payload.permitLicence2,
          Date: payload.Date,
          carModel: payload.carModel,
          serialNumber: payload.serialNumber,
          contractNumber: payload.contractNumber,
          isDamagedP: payload.isDamagedP,
          isDamagedR: payload.isDamagedR,
          damages: payload.damages,
          meetingDate: payload.meetingDate,
          prePhoto: payload.prePhoto,
          damageValue: payload.damageValue,
          devis1: payload.devis1,
          devis2: payload.devis2,
          blane: payload.blane,
          postPhoto: payload.postPhoto,
          piece: payload.piece,
          billValue: payload.billValue,
          moneyAmount: payload.moneyAmount,
        },
      };
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
