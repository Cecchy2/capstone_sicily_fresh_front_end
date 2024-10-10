import { CREA_CARRELLO_DETTAGLIO, GET_CARRELLO_DETTAGLIO } from "../actions/carrelloDettaglioActions";

const initialState = {
  carrelliDettagli: [],
};

const carrelliDettagliReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREA_CARRELLO_DETTAGLIO:
      return {
        ...state,
        carrelliDettagli: [...state.carrelliDettagli, action.payload],
      };
    case GET_CARRELLO_DETTAGLIO:
      return {
        ...state,
        carrelliDettagli: action.payload,
      };
    default:
      return state;
  }
};

export default carrelliDettagliReducer;
