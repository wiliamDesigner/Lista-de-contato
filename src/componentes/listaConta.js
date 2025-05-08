import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import {  removerItemPorId, setItemEditando } from "../Redux/listaSlice";



function ListaContatos() {
  const contatos = useSelector((state) => state.lista.itens);
  const dispatch = useDispatch();

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
              <BotoesContainer>
              <BotaoEditar onClick={() => dispatch(setItemEditando(contato.id))}>
                Editar
                </BotaoEditar>
                <BotaoExcluir onClick={() => dispatch(removerItemPorId(contato.id))}>
                  Excluir
                </BotaoExcluir>
              </BotoesContainer>
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
  margin-bottom: 20px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BotoesContainer = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: center;
  gap: 20px;
  width: 100%;
`;

const Botao = styled.button`
  padding: 8px 20px;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
`;

const BotaoExcluir = styled(Botao)`
  background-color: #c94c4c;
  &:hover {
    background-color: #a83838;
  }
`;

const BotaoEditar = styled(Botao)`
  background-color: #4caf50;
  &:hover {
    background-color: #3e8e41;
  }
`;

export default ListaContatos;
