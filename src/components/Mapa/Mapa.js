import React from "react";
import styled from "styled-components";

const DivTexto = styled.div`
  width: 70%;
  text-align: center;
  align-items: center;
  font-size: 14px;
  color:#909295;
  p{
    color: #90959d;
  }
`;

const Centralizer = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-items: center;
  align-items: center;
  padding: 20px;
  margin: 50px;
`;
const MapaComponent = styled.iframe`
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`;

export const Mapa = () => {
  return (
    <Centralizer>
      <DivTexto>

        <h2>
          Estamos lovalizados no endereço C.C. Calipso, Av. da Las Islas
          Canarias, 5, 35508 <p>Costa Teguise - Las Palmas - Espanha</p>
        </h2>
      </DivTexto>
      <MapaComponent
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57173988.07523422!2d-49.35058593749992!3d28.998531814051795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe9f2ea2793fd6662!2sCl%C3%ADnica%20Jorgani!5e0!3m2!1spt-BR!2sbr!4v1625007045910!5m2!1spt-BR!2sbr"
        width="600"
        height="450"
        loading="lazy"
      ></MapaComponent>
    </Centralizer>
  );
};
