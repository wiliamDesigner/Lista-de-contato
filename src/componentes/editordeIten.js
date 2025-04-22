import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { adicionarItem, editarItem } from "../Redux/listaSlice";
import styled from "styled-components";

function EditorDeItem() {
  const dispatch = useDispatch();
  const itens = useSelector((state) => state.lista.itens);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [contato, setContato] = useState("");

  const handleAdicionar=()=>{
    if(!nome||!email||!contato){
      alert("preencha todos os campos");
      return;
    }
    dispatch(adicionarItem({nome,email,contato}));

    setNome("");
    setEmail("");
    setContato("");
  }
  
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
    <Itens>
      <Campo
        type="text"
        placeholder="Nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <Campo
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Campo
        type="text"
        placeholder="Contato"
        value={contato}
        onChange={(e) => setContato(e.target.value)}
      />
      <Botao onClick={handleAdicionar}>Editar último item</Botao>
    </Itens>
  );
}


const Itens = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20vh;
  gap: 20px;
  flex-wrap: wrap;
`;

const Campo = styled.input`
  padding: 15px 10px;
  background-color: #a19999;
  border: none;
  border-radius: 8px;
  color: #f9f6f6;
  font-size: 17px;
  text-align: center;
  outline: none;

  &::placeholder {
    color: #f0eaea;
  }
`;

const Botao = styled.button`
  padding: 15px 10px;
  background-color: #a19999;
  border: none;
  border-radius: 8px;
  color: #f9f6f6;
  font-size: 17px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #8a8888;
  }
`;

export default EditorDeItem;
