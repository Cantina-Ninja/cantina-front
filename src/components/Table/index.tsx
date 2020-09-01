import React from 'react';
import { Link } from 'react-router-dom';
import { MdModeEdit, MdDeleteForever } from 'react-icons/md';
import { Container } from './styles';

export interface TableProps {
  header: string[];
  data: object[];
  routeEdit: string;
  routeRemove: string;
}

export const TableItem: React.FC = (item: any) => (
  <tr>
    {Object.values(item).map((value: any) => (
      <td key={value}>{value}</td>
    ))}
    <td>
      {item.routeEdit && (
        <button type="button">
          <MdModeEdit />
        </button>
      )}
      {item.routeRemove && (
        <button type="button">
          <MdDeleteForever />
        </button>
      )}
    </td>
  </tr>
);

const Table: React.FC<TableProps> = ({
  header,
  data,
  routeEdit,
  routeRemove,
}) => {
  return (
    <Container>
      <thead>
        <tr>
          {header.map((title: string) => (
            <th key={title}>{title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item: any, key) => (
          <TableItem
            key={item.titulo}
            {...item}
            routeEdit={routeEdit}
            routeRemove={routeRemove}
          />
        ))}
      </tbody>
    </Container>
  );
};

export default Table;
