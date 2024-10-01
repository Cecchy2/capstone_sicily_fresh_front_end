import { combineReducers, configureStore } from "@reduxjs/toolkit";
import ricetteReducer from "../reducers/ricetteReducer";

const rootReducer = combineReducers({
  ricette: ricetteReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
