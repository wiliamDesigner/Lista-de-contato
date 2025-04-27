import React, { useState } from "react";
import styled from "styled-components";
import EditorDeItem from "../componentes/editordeIten";

function Botoes() {
  const [mostrarEditor, setMostrarEditor] = useState(false);
  const [modo, setModo] = useState(null);

  return (
    <Wrapper>
      <Container2>
        <Botao onClick={() => { setModo("adicionar"); setMostrarEditor(true); }}> Adição</Botao>
        <Botao onClick={() => { setModo("editar"); setMostrarEditor(true); }}> editar</Botao>
      </Container2>
      {mostrarEditor && <EditorDeItem modo={modo} />}
    </Wrapper>
  );
}


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Container2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20vh;
  gap: 40px;
`;

const Botao = styled.button`
  padding: 15px 42px;
  background-color: #a19999;
  border: none;
  border-radius: 8px;
  color: #f9f6f6;
  cursor: pointer;
  font-size: 17px;
`;

export default Botoes;
