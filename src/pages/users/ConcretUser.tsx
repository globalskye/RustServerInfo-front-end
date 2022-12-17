

import ResponsiveAppBar from "../home/components/Navbar";
import { Grid, Typography } from "@mui/material";
import { useParams } from "react-router-dom";

const ConcreteUser = () => {
  const { name } = useParams();
  return (
    <>
      <ResponsiveAppBar></ResponsiveAppBar>
      <Grid>
        <Typography>{name}</Typography>
        
      </Grid>
    </>
  );
};
export default ConcreteUser;
