import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    color: #C2C9D0;
    background: #111415;
    -webkit-font-smoothing: antialiased;
    font-family: 'Roboto', sans-serif;
  }

  ul {
    list-style: none;
  }

  body, input, button {
    font-size: 16px;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 400;
  }

  button {
    cursor: pointer;
  }

  hr {
    border: none;
    height: 1px;
    background-color: #242829;

    margin: 30px 0;
  }

  #root {
    height: 100vh;
  }


  main {
    padding: 45px 30px 30px 120px;

    display: flex;
    flex-direction: column;

    > header {
      font-size: 2em;
      margin-bottom: 30px;
    }

    section {
      display: flex;
      flex-wrap: wrap;
    }
  }

  /* Toastify */
  .Toastify__toast-container {
    width: 27rem;
  }

  .Toastify__toast-body {
    white-space: pre-line;
  }

  /* Modal custom */

  .react-confirm-alert-overlay {
    background: rgba(17, 20, 21, 0.8);
    z-index: 99999;

    .react-confirm-alert {
      background: #1c1f20;
      border-radius: .5rem;
      min-width: 40rem;
      min-height: 10rem;
      padding: 3rem;

      h1 {
        font-size: 1.3rem;
        color: #c2c9d0;
        span {
          font-weight: 700;
          color: #6859EA;
        }
      }

      .container-btns {
        margin-top: 3rem;
        display: flex;
        flex-direction: row;

        button:first-child {
          margin-right: .5rem;
        }
        button:last-child {
          margin-left: .5rem;
        }
      }
    }
  }

  #page-wrap {
    display: flex;
  }

  /* Position and sizing of burger button */
  .bm-burger-button {
    position: fixed;
    width: 3rem;
    height: 3rem;
    left: 2rem;
    top: 2.5rem;
    .bm-icon {
      width: 3rem;
      height: 3rem;
      fill: #c2c9d0;
      transition: fill .5s ease;
    }
    &:hover {
      .bm-icon {
        fill: #fff;
      }
    }
  }

  /* Color/shape of burger icon bars */
  .bm-burger-bars {
    background: #C2C9D0;
  }

  /* Color/shape of burger icon bars on hover*/
  .bm-burger-bars-hover {
    background: #fff;
    opacity: 1 !important;
  }

  /* General sidebar styles */
  .bm-menu {
    background: #1C1F20;
  }

  /* Styling of overlay */
  .bm-overlay {
    background: rgba(17, 20, 21, 0.8) !important;
  }

  .bm-cross-button {
    display: none;
  }

`;
