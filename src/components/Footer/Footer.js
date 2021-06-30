import React from "react";
import styled from "styled-components";
import { IoLogoWhatsapp } from "react-icons/io";

const FooterComponent = styled.footer`
  background: rgb(75, 240, 226);
  box-sizing: border-box;
  padding: 20px 0 ;
  font-size: 1.4em;
  .centralizer {
    text-align: center;
  }
`;

const DataContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
 p {
    margin: 0;
    font-size: 1.4em;
  }
`;
const Footer = () => {
  return (
    <FooterComponent>
      <div className="centralizer">
        <img
          id="img-logo"
          alt="logo consultorio médico"
          src="/assets/logo.png"
        />
        <DataContent>
          <p>
            Telefone e Whatsapp (21) 9999-99999 <IoLogoWhatsapp color="green" />
          </p>
          <p>Clinica médica Life ltda.</p>
          <p>© Copyright 2001-{new Date().getUTCFullYear()}</p>
        </DataContent>
      </div>
    </FooterComponent>
  );
};

export default Footer;
