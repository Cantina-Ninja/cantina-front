import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { MdModeEdit, MdDeleteForever } from 'react-icons/md';
import { Container } from './styles';

export interface TableProps {
  columns?: string[] | [];
  rows: object[];
  routeEdit?: string;
  routeRemove?: string;
  handleRemoveRow?: any;
  state?: any;
}

export const TableItem: React.FC<TableProps> = ({
  rows,
  routeEdit,
  routeRemove,
  handleRemoveRow,
}: any) => {
  return (
    <tr>
      {Object.entries(rows).map(
        ([a, b]: any) => a !== 'id' && <td key={a}>{b}</td>,
      )}
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
  state,
}) => {
  const handleRemoveRow = (id: any) => {
    state(rows.filter((item: any) => id !== item.id));
  };

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
            key={`tb-${item.id}`}
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
