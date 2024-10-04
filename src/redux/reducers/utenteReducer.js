import { UPLOAD_AVATAR } from "../actions/imagesUploadActions";
import { GET_PROFILE, UPDATE_PROFILE } from "../actions/utentiActions";

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
    case UPDATE_PROFILE:
      return {
        ...state,
        utente: action.payload,
      };
    case UPLOAD_AVATAR:
      return {
        ...state,
        utente: {
          ...state.utente,
          avatar: action.payload.avatar,
        },
      };
    default:
      return state;
  }
};

export default utenteReducer;
