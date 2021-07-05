import React from "react";
import { EspecialistaComponent } from "./style";
import { EspecialistaFotos } from "./style";
import {ContainedButtons} from "../../components/Button"
const Especialista = () => (
  <EspecialistaComponent>
    <EspecialistaFotos>cardiaco</EspecialistaFotos>

    <ContainedButtons/>

  </EspecialistaComponent>
);

export default Especialista;
