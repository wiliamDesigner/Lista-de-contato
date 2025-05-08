import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  itens: [],
  itemEditando: null,
};

let nextId = 1;

const listaSlice = createSlice({
  name: "lista",
  initialState,
  reducers: {
    adicionarItem: (state, action) => {
      const { nome, email, contato } = action.payload;
      state.itens.push({
        id: nextId++,
        nome,
        email,
        contato,
      });
    },
    removerItemPorId: (state, action) => {
      const id = action.payload;
      state.itens = state.itens.filter((item) => item.id !== id);
    },
    editarItemPorId: (state, action) => {
      const { id, nome, email, contato } = action.payload;
      const index = state.itens.findIndex((iten) => iten.id === id);
      if (index !== -1) {
        state.itens[index] = { id, nome, email, contato };
      }
    },
    setItemEditando: (state, action) => {
      state.itemEditando = action.payload;
    },
  },
});

export const {
  adicionarItem,
  editarItemPorId,
  removerItemPorId,
  setItemEditando,
} = listaSlice.actions;

export default listaSlice.reducer;
