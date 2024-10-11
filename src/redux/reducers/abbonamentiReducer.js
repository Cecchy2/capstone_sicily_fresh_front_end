import { CREA_ABBONAMENTO, GET_ABBONAMENTO_CLIENTE } from "../actions/abbonamentiActions";

const initialState = {
  abbonamenti: [],
};

const abbonamentiReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ABBONAMENTO_CLIENTE:
      return {
        ...state,
        abbonamenti: action.payload,
      };
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
