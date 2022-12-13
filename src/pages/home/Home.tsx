import * as React from "react";
import { styled, withStyles } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import ResponsiveAppBar from "./components/Navbar";
import { FormLabel, Typography } from "@mui/material";
import { width } from "@mui/system";
import { Container } from "@mui/material";
import { LinearProgress } from "@mui/material";
import ServerStatistic from "./components/ServerStatistic";
import { themeDark } from "../Theme";
import { ThemeProvider } from "@emotion/react";
import TopClans from "./components/TopClans";
import TopPvP from "./components/TopPvP";
import VkPage from "./components/VkNews";
import InfoButtons from "./components/InfoButtons";
import TopFarm from "./components/TopFarm";

const gridItem={        
  paddingRight: "12px",
  paddingLeft: "12px"
}

const gridContainer={        
  paddingTop: "24px",
  paddingBottom: "24px"
}

const Home = () => {


  return (
    //0b0d12
    <div>
      <Grid>
        <Box sx={{ flexGrow: 1 }}>
          <ResponsiveAppBar></ResponsiveAppBar>
          <Container maxWidth="xl">
            <Grid container style={gridContainer}>
              <Grid item xs={3} style={gridItem}>
                {ServerStatistic()}
                {TopPvP()}
                {TopClans()}
              </Grid>
              <Grid item xs={6} style={gridItem}>
                {VkPage()}
              </Grid>
              <Grid item xs style={gridItem}>
                {InfoButtons()}
                {TopFarm()}
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Grid>
    </div>
  );
};

export default Home;
