import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { adicionarItem, editarItemPorId, setItemEditando } from "../Redux/listaSlice";
import styled from "styled-components";

function EditorDeItem({ modo }) {
  const dispatch = useDispatch();
  const itemEditando = useSelector((state) => state.lista.itemEditando);

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [contato, setContato] = useState("");

  useEffect(() => {
    if (modo === "editar" && itemEditando) {
      setNome(itemEditando.nome);
      setEmail(itemEditando.email);
      setContato(itemEditando.contato);
    }
  }, [modo, itemEditando]);

  const limparCampos = () => {
    setNome("");
    setEmail("");
    setContato("");
    dispatch(setItemEditando(null));
  };

  const handleAdicionar = () => {
    if (!nome || !email || !contato) {
      alert("Preencha todos os campos");
      return;
    }

    dispatch(adicionarItem({ nome, email, contato }));
    limparCampos();
  };

  const handleEditar = () => {
    if (!itemEditando) return;

    dispatch(
      editarItemPorId({
        id: itemEditando.id,
        nome,
        email,
        contato,
      })
    );
    limparCampos();
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

      {modo === "adicionar" ? (
        <Botao onClick={handleAdicionar}>Adicionar</Botao>
      ) : (
        <Botao onClick={handleEditar}>Editar último item</Botao>
      )}
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
