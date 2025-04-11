import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editarItem } from "../Redux/listaSlice";

function EditorDeItem() {
  const dispatch = useDispatch();
  const itens = useSelector((state) => state.lista.itens);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [contato, setContato] = useState("");

  const handleEditar = () => {
    if (itens.length === 0) return;

    const ultimoItem = itens[itens.length - 1]; 
    dispatch(
      editarItem({
        id: ultimoItem.id,
        nome,
        email,
        contato,
      })
    );
  };

  return (
    <div style={styles.itens}>
      <input
        style={styles.itens2}
        type="text"
        placeholder="Nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <input
        style={styles.itens2}
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        style={styles.itens2}
        type="text"
        placeholder="Contato"
        value={contato}
        onChange={(e) => setContato(e.target.value)}
      />
      <button style={styles.itens2} onClick={handleEditar}>
        Editar último item
      </button>
    </div>
  );
}

const styles = {
  itens: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "20vh",
    gap: "20px",
  },
  itens2: {
    padding: "15px 10px",
    backgroundColor: "#A19999",
    border: "none",
    borderRadius: "8px",
    color: "#F9F6F6",
    cursor: "pointer",
    fontSize: "17px",
    textAlign: "center",
  },
};

export default EditorDeItem;
