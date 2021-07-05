import React from "react";
import styled from "styled-components";

import {Link} from "react-router-dom";
import { BannerPrincipal } from "./component/BannerPrincipal/BannerPrincipal";
import { DivFotoTexto } from "./component/DivFotoTexto/DivFotoTexto";
import { Mapa } from "../../components/Mapa/Mapa";
import { ListaEspecialista } from "./component/ListaEspecialista/ListaEspecialista";
import { Button } from "./component/Button/Button";

const HomePage = styled.section``;

const Home = () => {
  return (
    <>
      <HomePage>
        <BannerPrincipal />
        <DivFotoTexto />
        <ListaEspecialista />
      </HomePage>
      <Link  to="/contato" style={{ textDecoration: "none"}}><Button>
        <button>Contato</button>
      </Button></Link>
      <Mapa />
    </>
  );
};

export default Home;
