import { GET_PROFILE } from "../actions/utentiActions";

const initialState = {
  utente: {},
};

const utenteReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROFILE:
      return {
        ...state,
        utente: action.payload,
      };
    default:
      return state;
  }
};

export default utenteReducer;
