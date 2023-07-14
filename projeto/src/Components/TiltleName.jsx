import React from "react";
//import imagem from "./imgs/fundo2.jpg";
import styled from "styled-components";

function TitleName() {
    return (
      <Conteiner>
        <div id="Conteiner">
         <h1>Bell T Boss</h1>
        </div>
      </Conteiner>
    );
  }
  
  export default TitleName;

  const Conteiner = styled.div`
  background-color: black;
  color: red;
  background-image: url(./img/fundo2.jpg);
    
  `; 