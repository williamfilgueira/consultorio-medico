import styled from "styled-components";

export const BannerContainer = styled.div`
  height: 75vh;
  max-height: 800px;
  min-height: 400px;
  background-image: url("/assets/recepcao.png");
  background-repeat: no-repeat;
  background-size: cover;
  .centralizer {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    color: white;
  }
`;

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  text-align: center;
  h1 {
    margin: 0;
    font-size: 8.5em;
  }
  p {
    margin: 0;
    font-size: 5.5em;
  }
`;