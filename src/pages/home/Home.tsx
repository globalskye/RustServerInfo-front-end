import {
  Container
} from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import ResponsiveAppBar from "../navbar/Navbar";
import ServerStatistic from "./components/ServerStatistic";
import TopClans from "./components/TopClans";
import TopPvP from "./components/TopPvP";

import InfoButtons from "./components/InfoButtons";
import TopOnline from "./components/TopOnline";
import TopFarm from "./components/TopRaid";
import NewsList from "./components/VkNews";
const Home = () => {
  return (
    //0b0d12
    <>
      <Grid
      bgcolor={'primary.main'}
        style={{
          width: "1500px",
          margin: "0 auto",
          minHeight: "100%",
          height: "auto !important",
        }}
      >
        <ResponsiveAppBar />
        <Box sx={{ flexGrow: 1 }}>
          <Container maxWidth="xl">
            <Grid container spacing={3}>
              <Grid item xs>
                <ServerStatistic />
                <TopPvP />
                <TopClans />
              </Grid>
              <Grid item xs={6}>
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
      </Grid>
    </>
  );
};

export default Home;
