import styled from "styled-components";

export const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  button {
    width: 250px;
    padding: 5px;
    border: 1px solid;
    border-radius: 10px;
    background-color: #4bf0e2;
    color: white;
    font-size: 20px;
    box-shadow: 2px 2px 9px 1px silver;
    transition: 0.4s;
    cursor: pointer;
    :hover{
        background-color: #29abe2;
    }
  }
`;
