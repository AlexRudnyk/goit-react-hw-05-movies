import { Box } from 'components/Box';
import { NavItem } from './AppBar.styled';

const AppBar = () => {
  return (
    <Box
      as="header"
      py={5}
      mb={5}
      boxShadow="0 1px 4px rgba(0, 0, 0, 1), -23px 0 20px -23px rgba(0, 0, 0, 0.8),
    23px 0 20px -23px rgba(0, 0, 0, 0.8), 0 0 40px rgba(0, 0, 0, 0.1) inset;"
    >
      <Box as="nav" px={4}>
        <NavItem to="/">Home</NavItem>
        <NavItem to="/movies">Movies</NavItem>
      </Box>
    </Box>
  );
};

export default AppBar;
