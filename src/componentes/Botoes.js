import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { adicionarItem, removerItem } from "../Redux/listaSlice";
import EditorDeItem from "../componentes/editordeIten"; 

function Botoes() {
  const dispatch = useDispatch();
  const [mostrarEditor, setMostrarEditor] = useState(false); 

  return (
    <div style={styles.wrapper}>
      <div style={styles.container2}>
        <button style={styles.item2} onClick={() => dispatch(removerItem())}>
          Remover
        </button>
        <button style={styles.item2} onClick={() => dispatch(adicionarItem())}>
          Adição
        </button>
        <button style={styles.item2} onClick={() => setMostrarEditor(true)}>
          Edição
        </button>
      </div>

      {mostrarEditor && <EditorDeItem />} {}
    </div>
  );
}

const styles = {
  wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  container2: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "20vh",
    gap: "40px",
  },
  item2: {
    padding: "15px 42px",
    backgroundColor: "#A19999",
    border: "none",
    borderRadius: "8px",
    color: "#F9F6F6",
    cursor: "pointer",
    fontSize: "17px",
  },
};

export default Botoes;
