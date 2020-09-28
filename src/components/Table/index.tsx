import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import {
  MdModeEdit,
  MdDeleteForever,
  MdInfo,
  MdAddCircle,
} from 'react-icons/md';

import { Container } from './styles';
import api from '../../services/api';
import getExpiredProduct from '../../utils/getExpiredProduct';

export interface TableProps {
  columns?: string[] | [];
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
  rows,
  routeEdit,
  routeView,
  routeRemove,
  handleRemoveRow,
  routeAddCart,
  handleAddCart,
}: any) => {
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
          <button type="button" onClick={() => handleRemoveRow(rows.id)}>
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
    async (id: any) => {
      stateRows(rows.filter((item: any) => id !== item.id));
      try {
        await api.delete(`${routeRemove}/${id}`);
      } catch (error) {}
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
        {rows.map((item: any) => (
          <TableItem
            key={Math.random()}
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
