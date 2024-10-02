import { combineReducers, configureStore } from "@reduxjs/toolkit";
import ricetteReducer from "../reducers/ricetteReducer";
import authReducer from "../reducers/authReducer";

const rootReducer = combineReducers({
  ricette: ricetteReducer,
  auth: authReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
