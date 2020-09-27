import React from 'react';
import PaginationItems, { ReactJsPaginationProps } from 'react-js-pagination';

import { Container } from './styles';

const Pagination: React.FC<ReactJsPaginationProps> = ({
  activePage,
  itemsCountPerPage,
  totalItemsCount,
  pageRangeDisplayed,
  onChange,
}) => {
  return (
    <Container>
      <PaginationItems
        hideFirstLastPages
        activePage={activePage}
        itemsCountPerPage={itemsCountPerPage}
        totalItemsCount={totalItemsCount}
        pageRangeDisplayed={pageRangeDisplayed}
        onChange={onChange}
      />
    </Container>
  );
};

export default Pagination;
