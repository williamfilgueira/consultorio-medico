import React from "react";
import styled from 'styled-components';

const MapaComponent = styled.iframe`
    

`;
export const Mapa = () => {
  return (
    <MapaComponent
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57173988.07523422!2d-49.35058593749992!3d28.998531814051795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe9f2ea2793fd6662!2sCl%C3%ADnica%20Jorgani!5e0!3m2!1spt-BR!2sbr!4v1625007045910!5m2!1spt-BR!2sbr"
      width="600"
      height="450"
      loading="lazy"
    ></MapaComponent>
  );
};
