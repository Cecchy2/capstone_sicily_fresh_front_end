import { CREA_CARRELLO } from "../actions/carrelloAction";

const initialState = {
  carrelli: [],
};

const carrelliReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREA_CARRELLO:
      return {
        ...state,
        carrelli: [...state.carrelli, action.payload],
      };
    default:
      return state;
  }
};

export default carrelliReducer;
