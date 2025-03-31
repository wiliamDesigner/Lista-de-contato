import { configureStore } from "@reduxjs/toolkit";
import listaReducer from "./listaSlice";
import counterReducer from "../store/counterSlice"

export const store = configureStore({
  reducer: {
    lista: listaReducer,
    counter:counterReducer,
  },
});

export default store;