import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  itens: [], // Lista vazia para armazenar os dados
};

  let nextId=1;

const listaSlice = createSlice({
  name: "lista",
  initialState,
  reducers: {
    adicionarItem: (state,action) => {
      const{nome,email,contato}=action.payload;
      state.itens.push({
        id: nextId++,
        nome,
        email,
        contato,
      });
    },
    removerItem:(state,action)=>{
      state.itens.pop();
    },
    editarItem:(state,action)=>{
      const{id,nome,email,contato}=action.payload;
      const index=state.itens.findIndex(iten=>iten.id===id);
      if(index !== -1){
        state.itens[index]={id,nome,email,contato};
      }
    }
  },
});

export const { adicionarItem,removerItem,editarItem } = listaSlice.actions;
export default listaSlice.reducer;