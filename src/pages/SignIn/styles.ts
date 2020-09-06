import styled from 'styled-components';
import bgSignIn from '../../assets/bgSignIn.jpg';

export const Main = styled.div`
  display: flex;

  width: 100vw;
  height: 100vh;

  .container-bg {
    flex: 65%;

    background: url(${bgSignIn}) no-repeat;
    background-size: cover;
  }

  .wapper-signin {
    flex: 35%;
    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;

    .signin-container {
      flex: flex;
      flex-direction: row;
      width: 60%;

      header {
        display: flex;
        flex-direction: row;
        line-height: 1.3;
        margin-bottom: 35px;

        align-items: center;

        img {
          margin-left: 25px;
        }

        h2 {
          font-size: 1.2rem;
        }
        h1 {
          color: #fff;
          font-size: 2rem;
        }
      }

      footer {
        div + div {
          margin-top: 12px;
        }
      }

      button {
        margin-top: 35px;
      }
    }
  }
`;
