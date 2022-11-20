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

export const BackLink = styled(Link)`
  display: inline-block;
  margin-bottom: ${p => p.theme.space[4]}px;
  padding-top: ${p => p.theme.space[2]}px;
  padding-bottom: ${p => p.theme.space[2]}px;
  padding-left: ${p => p.theme.space[3]}px;
  padding-right: ${p => p.theme.space[3]}px;

  text-decoration: none;
  outline: 1px solid;
  border-radius: ${p => p.theme.radii.normal};
  color: ${p => p.theme.colors.text};
  transition: color 0.15s ease-in-out;

  :hover,
  :focus {
    color: ${p => p.theme.colors.accent};
  }
`;
