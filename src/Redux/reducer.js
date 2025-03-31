const initialState = {
    dados: [], // Um array para armazenar os dados
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case "ADICIONAR_ITEM":
        return { ...state, dados: [...state.dados, action.payload] };
      default:
        return state;
    }
  };
  
  export default reducer;
  