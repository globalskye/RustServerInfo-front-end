import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import AdbIcon from '@mui/icons-material/Adb';

const ResponsiveAppBar = () => {
  return (
    <AppBar position="static" style={{ backgroundColor: '#0b0d12' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, color: '#F5F5DC' }} />
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
