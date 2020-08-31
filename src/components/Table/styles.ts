import styled from 'styled-components';

export const Container = styled.table`
  border-collapse: collapse;
  text-align: left;

  button {
    background: none;
    border: 0;
    font-size: 20px;
    & {
      margin: 0 15px;
    }

    svg {
      transition: fill 0.3s;
      fill: #c2c9d0;
      &:hover {
        fill: #fff;
      }
    }
  }

  thead {
    th {
      font-size: 20px;
      font-weight: 400;
    }
  }
  tbody tr {
    background-color: #1c1f20;
    border-bottom: 5px solid #111415;
    font-size: 17px;

    transition: background-color 0.2s;
    &:hover {
      background: #242829;
      td {
        color: #c2c9d0;
      }
    }
    td {
      :last-child {
        text-align: right;
      }
    }
  }
  th,
  td {
    color: #c2c9d0;
    padding: 15px 25px;
    border-collapse: collapse;
  }
`;
