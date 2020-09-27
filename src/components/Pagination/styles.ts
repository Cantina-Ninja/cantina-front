import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 5rem;
  display: flex;
  justify-content: center;
  justify-items: center;

  ul.pagination {
    display: flex;
    li {
      * {
        transition: all 0.4s ease;
      }
      a {
        text-decoration: none;
        color: #c2c9d0;
        margin: 0 1rem;
        font-size: 1.5rem;
        padding: 0.5rem 1rem;
        border-radius: 5px;
        :hover {
          color: #fff;
        }
      }
      &.active a {
        background-color: #6859ea;
        color: #fff;
      }
    }
  }
`;
