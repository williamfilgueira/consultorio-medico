import React from "react";
import { Link } from "react-router-dom";

// style 
import {HeaderComponent} from "./style";

const Header = () => {
  return (
    <HeaderComponent>
      <div className="centralizer">
        <Link to="/">
          <img alt="logo consultorio médico" src="/assets/logo.png" />
        </Link>
        <nav>
          <div>
            <Link to="/">Home</Link>
          </div>
          <div>
            <Link to="/especialista">Especialistas</Link>
          </div>
          <div>
            <Link to="/contato">Contato</Link>
          </div>
        </nav>
      </div>
    </HeaderComponent>
  );
};

export default Header;
