import styled from 'styled-components';
import { Field } from 'formik';
import { Link } from 'react-router-dom';

export const SearchInput = styled(Field)`
  padding: 5px;
  margin-right: 16px;
`;

export const SearchButton = styled.button`
  padding: 5px;
  cursor: pointer;
`;

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
  :not(:last-child) {
    margin-bottom: 8px;
  }
`;
