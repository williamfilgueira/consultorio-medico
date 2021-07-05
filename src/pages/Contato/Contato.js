import React from "react";
import { ContatoComponent } from "./style";
import { Formulario } from "./style";
import { Centralizer } from "./style";

const Contato = () => {
  return (
    <ContatoComponent>
      <Centralizer>
        <div className="containerFormulario">
          <Formulario>
            <label>
              Nome:
              <input type="text" name="name" />
            </label>

            <label>
              Sobrenome:
              <input type="text" name="sobrenome" />
            </label>

            <label>
              Tel:
              <input type="tel" name="telefone" />
            </label>

            <label>
              Email:
              <input type="mail" name="email" />
            </label>

            <input type="submit" value="Enviar" />

            <div className="containerImagem">
              <h2>Funcionamos de segunda à segunda</h2>
              <img src="/assets/pint medico.jpg" />
            </div>
          </Formulario>
        </div>
      </Centralizer>
    </ContatoComponent>
  );
};

export default Contato;
