import React from "react";
import styled from "styled-components";
import ItemLista from "./components/ItemLista/ItemLista";
import { Link } from "react-router-dom";

const ListaEspecialistaComponent = styled.div`
  .centralizer {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    text-decoration: none;
    padding: 50px;
  }
`;

export const ListaEspecialista = () => {
  return (
    <ListaEspecialistaComponent>
      <div className="centralizer">
        <Link
          to="/especialista"
          style={{ textDecoration: "none", color: "white" }}
        >
          <ItemLista titulo="Ortopedista" imagem="/assets/ortopedia.png" />
        </Link>
        <Link
          to="/especialista"
          style={{ textDecoration: "none", color: "white" }}
        >
          <ItemLista
            titulo="Geratria"
            especialidade="Geratria"
            imagem="/assets/geriatra.png"
          />
        </Link>
        <Link
          to="/especialista"
          style={{ textDecoration: "none", color: "white" }}
        >
          <ItemLista
            titulo="Pediatria"
            especialidade="Pediatria"
            imagem="/assets/pediatra.png"
          />
        </Link>
      </div>
    </ListaEspecialistaComponent>
  );
};
