import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  itens: [], // Lista vazia para armazenar os dados
};

const listaSlice = createSlice({
  name: "lista",
  initialState,
  reducers: {
    adicionarItem: (state) => {
      state.itens.push({ nome: "Novo Nome", email: "novo@email.com", contato: "9999-9999" });
    },
  },
});

export const { adicionarItem } = listaSlice.actions;
export default listaSlice.reducer;