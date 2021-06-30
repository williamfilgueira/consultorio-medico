import React from "react";
import styled from "styled-components";
import ItemLista from "./components/ItemLista/ItemLista";
import { Link } from "react-router-dom";
import "./style.css";

const ListaEspecialistaComponent = styled.div`
  .centralizer {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
`;

export const ListaEspecialista = () => {
  return (
    <ListaEspecialistaComponent>
      <div className="centralizer">
        <Link to="/especialista">
          <ItemLista especialidade="Ortopedia" imagem="/assets/ortopedia.png" />
        </Link>
        <Link to="/especialista">
          <ItemLista especialidade="Geratria" imagem="/assets/geriatra.png" />
        </Link>
        <Link to="/especialista">
          <ItemLista especialidade="Pediatria" imagem="/assets/pediatra.png" />
        </Link>
      </div>
    </ListaEspecialistaComponent>
  );
};
