import { CREA_RICETTA_SUCCESS, DELETE_RICETTA, GET_RICETTE } from "../actions/ricetteActions";

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
        ricette: [...state.ricette, action.payload], // Add the new recipe to the existing list
      };
    case DELETE_RICETTA:
      return {
        ...state,
        ricette: state.ricette.filter((ricetta) => ricetta.id !== action.payload),
      };
    default:
      return state;
  }
};

export default ricetteReducer;
