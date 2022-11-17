import { Box } from 'components/Box';
import AppBar from 'components/AppBar';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <Box width="1200px" ml="auto" mr="auto" px={5}>
      <AppBar />
      <Outlet />
    </Box>
  );
};
