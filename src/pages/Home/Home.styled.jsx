import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ItemLink = styled(Link)`
  text-decoration: none;
  color: #212121;
`;

export const Item = styled.li`
  :not(:last-child) {
    margin-bottom: 8px;
  }
`;
