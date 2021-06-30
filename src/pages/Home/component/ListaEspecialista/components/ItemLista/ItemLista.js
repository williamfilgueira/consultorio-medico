import React from "react";
import "./style.css";

export default function ItemLista(props) {
  return (
    <div className="box-especialidade">
      <div className="nome-especialidade"></div>
      <img
        className="imagem-especialista"
        src={props.imagem}
        alt={props.especialidade}
      />
    </div>
  );
}
