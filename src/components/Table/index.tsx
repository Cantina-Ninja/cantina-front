import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { MdModeEdit, MdDeleteForever } from 'react-icons/md';
import { Container } from './styles';
import api from '../../services/api';
import getExpiredProduct from '../../utils/getExpiredProduct';

export interface TableProps {
  columns?: string[] | [];
  rows: object[];
  routeEdit?: string;
  routeRemove?: string;
  handleRemoveRow?: Function;
  stateRows?: any;
}

export const TableItem: React.FC<TableProps> = ({
  rows,
  routeEdit,
  routeRemove,
  handleRemoveRow,
}: any) => {
  return (
    <tr>
      {Object.entries(rows).map(([a, b]: any) => {
        if (a === 'validade' && getExpiredProduct(b))
          return (
            <td key={a}>
              <div className="validity--expired">{b}</div>
            </td>
          );
        if (a === 'validade')
          return (
            <td key={a}>
              <div className="validity">{b}</div>
            </td>
          );
        return a !== 'id' && <td key={a}>{b}</td>;
      })}
      <td>
        {routeEdit && (
          <Link to={`${routeEdit}/${rows.id}/edit`}>
            <MdModeEdit />
          </Link>
        )}
        {routeRemove && (
          <button type="button" onClick={() => handleRemoveRow(rows.id)}>
            <MdDeleteForever />
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
  routeRemove,
  stateRows,
}) => {
  const handleRemoveRow = useCallback(
    async (id: any) => {
      stateRows(rows.filter((item: any) => id !== item.id));

      try {
        await api.delete(`${routeRemove}/${id}`);
      } catch (error) {
        console.error(error); // TODO
      }
    },
    [stateRows, rows, routeRemove],
  );

  return (
    <Container>
      <thead>
        <tr>
          {columns?.map((title: string) => (
            <th key={title}>{title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((item: any) => (
          <TableItem
            key={item.id}
            rows={item}
            routeEdit={routeEdit}
            routeRemove={routeRemove}
            handleRemoveRow={handleRemoveRow}
          />
        ))}
      </tbody>
    </Container>
  );
};
export default Table;
