// store.js
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

// Configurazione per Redux Persist
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth", "utente"], // specifica i reducer da persistere
};

// Combina i tuoi reducer
const rootReducer = combineReducers({
  ricette: ricetteReducer,
  auth: authReducer,
  utente: utenteReducer,
  abbonamenti: abbonamentiReducer,
  carrelli: carrelliReducer,
  carrelliDettagli: carrelliDettagliReducer,
});

// Crea un reducer persistito
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configura lo store con il reducer persistito e il middleware necessario
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignora questi tipi di azione per il controllo di serializzabilità
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// Crea un persistor legato allo store
export const persistor = persistStore(store);

// Esporta lo store come default
export default store;
