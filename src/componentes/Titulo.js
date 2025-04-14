import React from "react";
import styled from "styled-components";

function Titulo() {
  return (
    <Container>
      <Item>Nome</Item>
      <Item>Email</Item>
      <Item>Contato</Item>
    </Container>
  );
}


const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 15px;
  background-color: #a19999;
  margin-top: 40px;
  border-radius: 4px;
  width: 30%;
  margin: 0 auto;
`;

const Item = styled.h2`
  margin: 0;
  color: #f9f6f6;
`;

export default Titulo;
