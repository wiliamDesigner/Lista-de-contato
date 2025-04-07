import React from "react";
import { useSelector } from "react-redux";

function ListaContatos() {
  const contatos = useSelector((state) => state.lista.itens);

  console.log("Contatos atuais:", contatos); 

  return (
    <div style={styles.container}>
      <h2>Lista de Contatos</h2>
      {contatos.length === 0 ? (
        <p>Nenhum contato adicionado ainda.</p>
      ) : (
        <ul style={styles.lista}>
          {contatos.map((contato) => (
            <li key={contato.id} style={styles.item}>
              <p><strong>Nome:</strong> {contato.nome}</p>
              <p><strong>Email:</strong> {contato.email}</p>
              <p><strong>Contato:</strong> {contato.contato}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

const styles = {
  container: {
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  },
  lista: {
    listStyle: "none",
    padding: 0,
  },
  item: {
    backgroundColor: "#f4f4f4",
    border: "1px solid #ccc",
    padding: "15px",
    marginBottom: "10px",
    borderRadius: "8px",
  },
};

export default ListaContatos;
