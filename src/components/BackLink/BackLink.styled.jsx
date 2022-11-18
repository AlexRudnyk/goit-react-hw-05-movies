import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Back = styled(Link)`
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
