import React, { TableHTMLAttributes } from 'react';
import { MdModeEdit, MdDeleteForever } from 'react-icons/md';
import { Container } from './styles';

type TableProps = TableHTMLAttributes<HTMLTableElement>;

const Table: React.FC<TableProps> = () => {
  return (
    <Container>
      <thead>
        <tr>
          <th>Combo</th>
          <th>Valor</th>
          <th>Desconto</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Hotdog + Coca 300ml + Batata frita</td>
          <td>R$ 10,00</td>
          <td>R$ -3,00</td>
          <td>
            <button type="button">
              <MdModeEdit />
            </button>
            <button type="button">
              <MdDeleteForever />
            </button>
          </td>
        </tr>
        <tr>
          <td>Hotdog + Coca 300ml + Batata frita</td>
          <td>R$ 10,00</td>
          <td>R$ -3,00</td>
          <td>
            <button type="button">
              <MdModeEdit />
            </button>
            <button type="button">
              <MdDeleteForever />
            </button>
          </td>
        </tr>
        <tr>
          <td>Hotdog + Coca 300ml + Batata frita</td>
          <td>R$ 10,00</td>
          <td>R$ -3,00</td>
          <td>
            <button type="button">
              <MdModeEdit />
            </button>
            <button type="button">
              <MdDeleteForever />
            </button>
          </td>
        </tr>
        <tr>
          <td>Hotdog + Coca 300ml + Batata frita</td>
          <td>R$ 10,00</td>
          <td>R$ -3,00</td>
          <td>
            <button type="button">
              <MdModeEdit />
            </button>
            <button type="button">
              <MdDeleteForever />
            </button>
          </td>
        </tr>
        <tr>
          <td>Hotdog + Coca 300ml + Batata frita</td>
          <td>R$ 10,00</td>
          <td>R$ -3,00</td>
          <td>
            <button type="button">
              <MdModeEdit />
            </button>
            <button type="button">
              <MdDeleteForever />
            </button>
          </td>
        </tr>
        <tr>
          <td>Hotdog + Coca 300ml + Batata frita</td>
          <td>R$ 10,00</td>
          <td>R$ -3,00</td>
          <td>
            <button type="button">
              <MdModeEdit />
            </button>
            <button type="button">
              <MdDeleteForever />
            </button>
          </td>
        </tr>
        <tr>
          <td>Hotdog + Coca 300ml + Batata frita</td>
          <td>R$ 10,00</td>
          <td>R$ -3,00</td>
          <td>
            <button type="button">
              <MdModeEdit />
            </button>
            <button type="button">
              <MdDeleteForever />
            </button>
          </td>
        </tr>
        <tr>
          <td>Hotdog + Coca 300ml + Batata frita</td>
          <td>R$ 10,00</td>
          <td>R$ -3,00</td>
          <td>
            <button type="button">
              <MdModeEdit />
            </button>
            <button type="button">
              <MdDeleteForever />
            </button>
          </td>
        </tr>
        <tr>
          <td>Hotdog + Coca 300ml + Batata frita</td>
          <td>R$ 10,00</td>
          <td>R$ -3,00</td>
          <td>
            <button type="button">
              <MdModeEdit />
            </button>
            <button type="button">
              <MdDeleteForever />
            </button>
          </td>
        </tr>
        <tr>
          <td>Hotdog + Coca 300ml + Batata frita</td>
          <td>R$ 10,00</td>
          <td>R$ -3,00</td>
          <td>
            <button type="button">
              <MdModeEdit />
            </button>
            <button type="button">
              <MdDeleteForever />
            </button>
          </td>
        </tr>
        <tr>
          <td>Hotdog + Coca 300ml + Batata frita</td>
          <td>R$ 10,00</td>
          <td>R$ -3,00</td>
          <td>
            <button type="button">
              <MdModeEdit />
            </button>
            <button type="button">
              <MdDeleteForever />
            </button>
          </td>
        </tr>
        <tr>
          <td>Hotdog + Coca 300ml + Batata frita</td>
          <td>R$ 10,00</td>
          <td>R$ -3,00</td>
          <td>
            <button type="button">
              <MdModeEdit />
            </button>
            <button type="button">
              <MdDeleteForever />
            </button>
          </td>
        </tr>
      </tbody>
    </Container>
  );
};

export default Table;
