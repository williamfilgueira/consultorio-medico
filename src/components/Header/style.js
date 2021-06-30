import styled from 'styled-components';

export const HeaderComponent = styled.header`
  background: rgb(75, 240, 226);
  .centralizer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    > a {
      width: 100px;
      img {
        width: 100%;
      }
    }
    > nav {
      display: flex;
      gap: 10px;
      div {
        transition: 0.3s;
        :hover {
          transform: scale(1.1);
        }
        a {
          font-size: 1.8em;
          text-decoration: none;
          color: white;
          text-transform: uppercase;
        }
      }
    }
  }
`;

