import styled from "styled-components";

export const ContatoComponent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column, wrap;
  padding: 20px;
`;
export const Centralizer = styled.div`
  align-items: center;
  align-content: center;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px;
  .containerFormulario {
  
    margin: 0 auto;
  }
`;

export const Formulario = styled.form`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  flex-wrap: wrap;
  border: 1px solid #4bf0e2;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 2px 2px 2px 1px silver;
  border-radius: 10px;
  padding: 20px;
  .containerLabel{
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    flex-direction: column;
    max-width: 1280px;
    width: 45vw;
    margin: 0 auto;
  }


  label {
    text-shadow: 2px 2px 2px 2px silver;
    padding: 5px;
    color: #909295;
    font-weight: 600;
    font-size: 15px;
  }
  label > input {
    width: 290px;
    position: relative;
    display: flex;
    flex-direction: column;
    font-size: 12px;
    border: 1px solid #4bf0e2;
    border-radius: 10px;
  }
  div {
    margin: 0 auto;

    > input {
      border: 1px solid #4bf0e2;
      border-radius: 10px;
      margin: 10px;
      width: 150px;
      color: white;
      background-color: #4bf0e2;
      transition: 0.4s;
      :hover {
        background-color: #29abe2;
      }
    }
  }
  .containerImagem {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    h2 {
      color: #909295;
    }
    img {
      width: 250px;
      border-radius: 10px;
    }
  }
`;
