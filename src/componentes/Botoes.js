
import React from "react";
import { useDispatch } from "react-redux";
import{adicionarItem}from "../Redux/listaSlice";
import{removerItem}from "../Redux/listaSlice";
import{editarItem}from "../Redux/listaSlice";


function Botoes() {

  const dispatch =useDispatch();

  return (
    <div style={styles.container2}>
      <button style={styles.item2} onClick={()=>dispatch(removerItem())}>Remover</button>
      <button style={styles.item2} onClick={()=>dispatch(adicionarItem())} >Adição</button>
      <button style={styles.item2} onClick={()=>dispatch(editarItem())} >Edição</button> 
    </div>
  );
}

const styles = {
  container2: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "170vh",
    gap: "40px", 
  },
  item2: {
    padding: "15px 42px",
    backgroundColor:"#A19999",
    border:"none",
    borderRadius:"8px",
    color:"#F9F6F6",
    cursor:"pointer",
    fontSize:"17px",
  },

  
};

export default Botoes;
