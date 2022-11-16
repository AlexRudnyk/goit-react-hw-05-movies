import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavItem = styled(NavLink)`
  text-decoration: none;
  color: ${p => p.theme.colors.text};
  padding: ${p => p.theme.space[3]}px;

  &.active {
    color: ${p => p.theme.colors.accent};
  }
`;
