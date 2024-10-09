import { CREA_ABBONAMENTO } from "../actions/abbonamentiActions";

const initialState = {
  abbonamenti: [],
};

const abbonamentiReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREA_ABBONAMENTO:
      return {
        ...state,
        abbonamenti: [...state.abbonamenti, action.payload],
      };
    default:
      return state;
  }
};

export default abbonamentiReducer;
