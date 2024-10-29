import {
  CHANGE_STATO_CARRELLO_DETTAGLIO,
  CREA_CARRELLO_DETTAGLIO,
  DELETE_CARRELLO_DETTAGLIO,
  GET_CARRELLO_DETTAGLIO,
  GET_CARRELLO_DETTAGLIO_BY_RICETTA,
  GET_CARRELLO_DETTAGLIO_FORNITORE,
  RESET_CARRELLO_DETTAGLIO,
} from "../actions/carrelloDettaglioActions";

const initialState = {
  carrelliDettagli: [],
  carrelloDettagliFornitore: [],
};

const carrelliDettagliReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_STATO_CARRELLO_DETTAGLIO:
      return {
        ...state,
        carrelliDettagli: state.carrelliDettagli.map((carrelloDettaglio) =>
          carrelloDettaglio.id === action.payload.id ? { ...carrelloDettaglio, ...action.payload } : carrelloDettaglio
        ),
      };
    case GET_CARRELLO_DETTAGLIO_BY_RICETTA:
      return {
        ...state,
        carrelliDettagli: action.payload,
      };
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
    case GET_CARRELLO_DETTAGLIO_FORNITORE:
      return {
        ...state,
        carrelloDettagliFornitore: action.payload,
      };
    case RESET_CARRELLO_DETTAGLIO:
      return initialState;
    default:
      return state;
  }
};

export default carrelliDettagliReducer;
