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
    background-color: #000000;
    display: flex;
    float: right;

  h2{
    color: #ff0202;
	padding: 22px 20px;
    
    
 

    
  }
`;
