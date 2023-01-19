import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import ResponsiveAppBar from "../Navbar";
import { Container, Paper, ThemeProvider, useMediaQuery } from "@mui/material";
import ServerStatistic from "./components/ServerStatistic";
import TopClans from "./components/TopClans";
import TopPvP from "./components/TopPvP";

import InfoButtons from "./components/InfoButtons";
import TopFarm from "./components/TopRaid";
import TopOnline from "./components/TopOnline";
import { createTheme } from "@mui/system";
import NewsList from "./components/VkNews";

import Image from './bg.png'; // Import using relative path

const styles = {
  paperContainer: {
      backgroundImage: `url(${Image})`
  }
};

const Home = () => {
 

  return (
    //0b0d12
    <>
      <Paper style={styles.paperContainer}>
        <ResponsiveAppBar></ResponsiveAppBar>

        <Box sx={{ flexGrow: 1 }}>
          <Container maxWidth="xl">
            <Grid container  spacing={3}>
              <Grid item xs>
                <ServerStatistic />
                <TopPvP />
                <TopClans />
              </Grid>
              <Grid item xs={6} >
                <NewsList />
              </Grid>
              <Grid item xs>
                <InfoButtons />
                <TopFarm />
                <TopOnline />
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Paper>
    </>
  );
};

export default Home;
