import React from 'react';
import { Link } from 'react-router-dom';
import { MdModeEdit, MdDeleteForever } from 'react-icons/md';
import { Container } from './styles';

export interface TableProps {
  columns?: string[] | [];
  rows: object[];
  routeEdit?: string;
  routeRemove?: string;
}

export const TableItem: React.FC<TableProps> = ({
  rows,
  routeEdit,
  routeRemove,
}: any) => {
  return (
    <tr>
      {Object.entries(rows).map(
        ([a, b]: any) => a !== 'id' && <td key={a}>{b}</td>,
      )}
      <td>
        {routeEdit && (
          <button type="button">
            <MdModeEdit />
          </button>
        )}
        {routeRemove && (
          <button type="button">
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
}) => {
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
          />
        ))}
      </tbody>
    </Container>
  );
};

export default Table;
