import styled from 'styled-components';
import { push as Menu } from 'react-burger-menu';

export const MenuSlide = styled(Menu)`
  .logo {
    display: flex !important;
    padding: 50px 0 50px 0;
    align-items: center;
    flex-direction: column;

    img {
      display: flex;
    }
  }
  .container-menus {
    display: flex !important;
    flex-direction: column;

    a {
      transition: color 0.2s;
      display: flex !important;
      flex: 1;

      color: #c2c9d0;
      display: flex;
      padding-left: 60px;
      text-decoration: none;
      font-size: 17px;

      & + a {
        margin-top: 50px;
      }
    }
  }
  .active_menu {
    color: #fff !important;
    position: relative;

    &:before {
      content: '';
      position: absolute;
      width: 1em;
      height: 2em;
      background: #6859ea;
      left: 0;
      top: -0.5em;
      border-radius: 0 5px 5px 0;
    }
  }
`;
