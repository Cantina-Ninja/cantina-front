import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { confirmAlert } from 'react-confirm-alert';
import {
  MdModeEdit,
  MdDeleteForever,
  MdInfo,
  MdAddCircle,
} from 'react-icons/md';

import 'react-confirm-alert/src/react-confirm-alert.css';
import Button from '../Button';

import { Container } from './styles';
import api from '../../services/api';
import getExpiredProduct from '../../utils/getExpiredProduct';

export interface TableProps {
  columns?: string[] | [];
  indexRow?: number;
  rows: object[];
  routeEdit?: string;
  routeView?: string;
  routeRemove?: string;
  routeAddCart?: string;
  handleRemoveRow?: Function;
  handleAddCart?: Function;
  stateRows?: any;
}

export const TableItem: React.FC<TableProps> = ({
  indexRow,
  rows,
  routeEdit,
  routeView,
  routeRemove,
  handleRemoveRow,
  routeAddCart,
  handleAddCart,
}: any) => {
  const submit = (item: any) => {
    confirmAlert({
      customUI: ({ onClose }) => {
        const handleClickedNo = () => {
          onClose();
        };
        const handleClickedYes = () => {
          onClose();
          console.log(111, indexRow);
          handleRemoveRow(item, indexRow);
        };
        return (
          <div className="custom-ui">
            <h1>
              Você tem certeza que deseja remover <span>{item?.title}</span> ?
            </h1>
            <div className="container-btns">
              <Button type="button" onClick={handleClickedNo}>
                Cancelar
              </Button>
              <Button type="button" onClick={handleClickedYes}>
                Confirmar
              </Button>
            </div>
          </div>
        );
      },
      closeOnEscape: true,
      closeOnClickOutside: false,
    });
  };

  return (
    <tr>
      {Object.entries(rows).map(([a, b]: any) => {
        if (a === 'validade' && getExpiredProduct(b))
          return (
            <td key={Math.random()}>
              <div className="validity--expired">{b}</div>
            </td>
          );
        if (a === 'validade')
          return (
            <td key={Math.random()}>
              <div className="validity">{b}</div>
            </td>
          );
        if (Array.isArray(b))
          return (
            <td key={Math.random()}>
              <div>{b[b.length - 1]}</div>
            </td>
          );
        return a !== 'id' && <td key={Math.random()}>{b}</td>;
      })}
      <td>
        {routeView && (
          <Link to={`${routeView}/${rows.id}/view`}>
            <MdInfo title="Mais detalhes" />
          </Link>
        )}
        {routeEdit && (
          <Link to={`${routeEdit}/${rows.id}/edit`}>
            <MdModeEdit title="Editar" />
          </Link>
        )}
        {routeRemove && (
          <button type="button" onClick={() => submit(rows)}>
            <MdDeleteForever title="Remover" />
          </button>
        )}
        {routeAddCart && (
          <button type="button" onClick={() => handleAddCart(rows.id)}>
            <MdAddCircle title="Add. Cart" />
          </button>
        )}
      </td>
    </tr>
  );
};

const Table: React.FC<TableProps> = ({
  columns = [],
  rows,
  routeEdit,
  routeView,
  routeRemove,
  routeAddCart,
  stateRows,
}) => {
  const handleRemoveRow = useCallback(
    async (itemRow: any, indexRow: number) => {
      try {
        if (routeRemove !== 'fake') {
          await api
            .delete(`${routeRemove}/${itemRow?.id}`)
            .then(response => {
              if (response.status === 200) {
                toast.success(response.data.mensagem, {
                  position: 'top-center',
                  autoClose: 6000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  toastId: response.data?.mensagem,
                });
                stateRows(rows.filter((item: any) => item.id !== itemRow?.id));
              }
            })
            .catch(error => {
              return error;
            });
        } else {
          stateRows(rows.filter((_, index) => index !== indexRow));
        }
      } catch (error) {
        console.log(error);
      }
    },
    [stateRows, rows, routeRemove],
  );

  const handleAddCart = useCallback(
    async (id: any) => {
      stateRows(rows.find((item: any) => id === item.id));
    },
    [stateRows, rows],
  );

  return (
    <Container>
      <thead>
        <tr>
          {columns?.map((title: string) => (
            <th key={Math.random()}>{title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((item: any, indexRow: number) => (
          <TableItem
            key={Math.random()}
            indexRow={indexRow}
            rows={item}
            routeEdit={routeEdit}
            routeView={routeView}
            routeRemove={routeRemove}
            routeAddCart={routeAddCart}
            handleAddCart={handleAddCart}
            handleRemoveRow={handleRemoveRow}
          />
        ))}
      </tbody>
    </Container>
  );
};
export default Table;
