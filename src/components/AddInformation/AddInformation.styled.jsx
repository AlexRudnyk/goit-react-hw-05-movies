import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ItemLink = styled(Link)`
  text-decoration: none;
  color: #212121;
  transition: color 0.15s ease-in-out;

  :hover,
  :focus {
    color: ${p => p.theme.colors.accent};
  }
`;

export const Item = styled.li`
  list-style: none;
  :not(:last-child) {
    margin-bottom: 8px;
  }
`;
