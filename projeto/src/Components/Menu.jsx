import React from "react";
import styled from "styled-components";

function Menu() {
  return (
    <Container>
      <h2>Contato</h2>
      <h2>Planos e Preços</h2>
      <h2>Loja</h2>
    </Container>
  );
}

export default Menu;


const Container = styled.div`
    display: grid;
    background-color: black;
    color: red;
    margin-top: 30px;
   
  h2{
    display: flex;
    border: 1px solid red;
    margin: 0 20px;
    margin-left: 60%;
    justify-content: space-between;
  }
`;
