import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";

import ricetteReducer from "../reducers/ricetteReducer";
import authReducer from "../reducers/authReducer";
import utenteReducer from "../reducers/utenteReducer";
import abbonamentiReducer from "../reducers/abbonamentiReducer";
import carrelliReducer from "../reducers/carrelliReducer";
import carrelliDettagliReducer from "../reducers/carrelloDettaglioReducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth", "utente"],
};

const rootReducer = combineReducers({
  ricette: ricetteReducer,
  auth: authReducer,
  utente: utenteReducer,
  abbonamenti: abbonamentiReducer,
  carrelli: carrelliReducer,
  carrelliDettagli: carrelliDettagliReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export default store;
