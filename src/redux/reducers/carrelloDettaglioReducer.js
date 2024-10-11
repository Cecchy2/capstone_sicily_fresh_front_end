import {
  CREA_CARRELLO_DETTAGLIO,
  DELETE_CARRELLO_DETTAGLIO,
  GET_CARRELLO_DETTAGLIO,
  RESET_CARRELLO_DETTAGLIO,
} from "../actions/carrelloDettaglioActions";

const initialState = {
  carrelliDettagli: [],
};

const carrelliDettagliReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_CARRELLO_DETTAGLIO:
      return {
        ...state,
        carrelliDettagli: state.carrelliDettagli.filter((carrelloDettaglio) => carrelloDettaglio.id !== action.payload),
      };
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
    case RESET_CARRELLO_DETTAGLIO:
      return initialState;
    default:
      return state;
  }
};

export default carrelliDettagliReducer;
