import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

function ListaContatos() {
  const contatos = useSelector((state) => state.lista.itens);

  console.log("Contatos atuais:", contatos); 

  return (
    <Container>
      <h2>Lista de Contatos</h2>
      {contatos.length === 0 ? (
        <p>Nenhum contato adicionado ainda.</p>
      ) : (
        <Lista>
          {contatos.map((contato) => (
            <Item key={contato.id}>
              <p><strong>Nome:</strong> {contato.nome}</p>
              <p><strong>Email:</strong> {contato.email}</p>
              <p><strong>Contato:</strong> {contato.contato}</p>
            </Item>
          ))}
        </Lista>
      )}
    </Container>
  );
}

const Container = styled.div`
  padding: 20px;
  font-family: Arial, sans-serif;
`;

const Lista = styled.ul`
  list-style: none;
  padding: 0;
`;

const Item = styled.li`
  background-color: #f4f4f4;
  border: 1px solid #ccc;
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 8px;
`;

export default ListaContatos;
