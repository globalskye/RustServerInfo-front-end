import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import ResponsiveAppBar from "./components/Navbar";
import { Container, ThemeProvider, useMediaQuery } from "@mui/material";
import ServerStatistic from "./components/ServerStatistic";
import TopClans from "./components/TopClans";
import TopPvP from "./components/TopPvP";
import VkPage from "./components/VkNews";
import InfoButtons from "./components/InfoButtons";
import TopFarm from "./components/TopRaid";
import TopOnline from "./components/TopOnline";
import { createTheme } from "@mui/system";

const gridItem = {
  paddingRight: "12px",
  paddingLeft: "12px",
};

const gridContainer = {
  paddingTop: "24px",
  paddingBottom: "24px",
};
const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

const Home = () => {
  const minWidth600 = !useMediaQuery("(min-width:600px)");

  return (
    //0b0d12
    <>
      <div
        style={{
          width: "1500px",
          margin: "0 auto",
          minHeight: "100%",
          height: "auto !important",
        }}
      >
        <ResponsiveAppBar></ResponsiveAppBar>

        <Box sx={{ flexGrow: 1 }}>
          <Container maxWidth="xl">
            <Grid container style={gridContainer} spacing={3}>
              <Grid item xs style={gridItem}>
                <ServerStatistic />
                <TopPvP />
                <TopClans />
              </Grid>
              <Grid item xs={6} style={gridItem}>
                <VkPage />
              </Grid>
              <Grid item xs style={gridItem}>
                <InfoButtons />
                <TopFarm />
                <TopOnline />
              </Grid>
            </Grid>
          </Container>
        </Box>
      </div>
    </>
  );
};

export default Home;
