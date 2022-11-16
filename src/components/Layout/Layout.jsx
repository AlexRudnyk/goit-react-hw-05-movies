import { Box } from 'components/Box';
import AppBar from 'components/AppBar';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <Box>
      <AppBar />
      <Outlet />
    </Box>
  );
};
