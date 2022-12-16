import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ResponsiveAppBar from './components/Navbar';
import { Container } from '@mui/material';
import ServerStatistic from './components/ServerStatistic';
import TopClans from './components/TopClans';
import TopPvP from './components/TopPvP';
import VkPage from './components/VkNews';
import InfoButtons from './components/InfoButtons';
import TopFarm from './components/TopFarm';

const gridItem = {
  paddingRight: '12px',
  paddingLeft: '12px'
};

const gridContainer = {
  paddingTop: '24px',
  paddingBottom: '24px'
};

const Home = () => {
  return (
    //0b0d12
    <>
      <Grid>
        <Box sx={{ flexGrow: 1 }}>
          <ResponsiveAppBar></ResponsiveAppBar>
          <Container maxWidth="xl">
            <Grid container style={gridContainer}>
              <Grid item xs={3}>
                <Grid item xs={12}>
                  <ServerStatistic />
                </Grid>
                <Grid item xs={12}>
                  <TopPvP />
                </Grid>
                <Grid item xs={12}>
                  <TopClans />
                </Grid>
              </Grid>
              <Grid item xs={6} style={gridItem}>
                <VkPage />
              </Grid>
              <Grid item xs style={gridItem}>
                <InfoButtons />
                <TopFarm />
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Grid>
    </>
  );
};

export default Home;
