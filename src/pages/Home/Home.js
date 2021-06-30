import React from "react";
import styled from "styled-components";

import { BannerPrincipal } from "./component/BannerPrincipal/BannerPrincipal";
import { DivFotoTexto } from "./component/DivFotoTexto/DivFotoTexto";
// import { Mapa } from "../../components/Mapa/Mapa";
import { ListaEspecialista } from "./component/ListaEspecialista/ListaEspecialista";

const HomePage = styled.section``;

const Home = () => {
  return (
    <>
      <HomePage>
        <BannerPrincipal />
        <DivFotoTexto />
        <ListaEspecialista />
      </HomePage>
      {/* <Mapa /> */}
    </>
  );
};

export default Home;
