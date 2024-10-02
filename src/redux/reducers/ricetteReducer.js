import { GET_RICETTE } from "../actions/ricetteActions";

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
    default:
      return state;
  }
};

export default ricetteReducer;
