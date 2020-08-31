import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  .my-class .page-wrap {

  }

  body {
    color: #C2C9D0;
    background: #111415;
    -webkit-font-smoothing: antialiased;
    font-family: 'Roboto', sans-serif;
  }

  body, input, button {
    font-size: 16px;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }

  #root {
    height: 100vh;
  }

  main {
    padding: 30px 30px 30px 105px;

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

  #page-wrap {
    display: flex;
  }

  /* Position and sizing of burger button */
  .bm-burger-button {
    position: fixed;
    width: 36px;
    height: 30px;
    left: 36px;
    top: 36px;
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
    background: rgba(0, 0, 0, .4) !important;
  }

  .bm-cross-button {
    display: none;
  }

`;
