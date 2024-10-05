import {
  CREA_RICETTA_SUCCESS,
  DELETE_RICETTA,
  GET_RICETTA_BY_ID,
  GET_RICETTE,
  GET_RICETTE_BY_FORNITORE,
} from "../actions/ricetteActions";

const initialState = {
  ricette: [],
};

const ricetteReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RICETTE:
      return {
        ...state,
        ricette: action.payload,
      };
    case CREA_RICETTA_SUCCESS:
      return {
        ...state,
        ricette: [...state.ricette, action.payload],
      };
    case DELETE_RICETTA:
      return {
        ...state,
        ricette: state.ricette.filter((ricetta) => ricetta.id !== action.payload),
      };
    case GET_RICETTA_BY_ID:
      return {
        ...state,
        ricettaDettaglio: action.payload,
      };
    case GET_RICETTE_BY_FORNITORE:
      return {
        ...state,
        ricette: action.payload,
      };
    default:
      return state;
  }
};

export default ricetteReducer;
