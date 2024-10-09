import { combineReducers, configureStore } from "@reduxjs/toolkit";
import ricetteReducer from "../reducers/ricetteReducer";
import authReducer from "../reducers/authReducer";
import utenteReducer from "../reducers/utenteReducer";
import abbonamentiReducer from "../reducers/abbonamentiReducer";

const rootReducer = combineReducers({
  ricette: ricetteReducer,
  auth: authReducer,
  utente: utenteReducer,
  abbonamenti: abbonamentiReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
