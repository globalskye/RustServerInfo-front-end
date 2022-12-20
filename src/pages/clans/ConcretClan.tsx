import { useEffect, useState } from "react";
import ResponsiveAppBar from "../home/components/Navbar";
import { Grid, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { Clan, User } from "../../types";
import {} from "../../service";
import { getClanByName } from "../../service/ClanService";

const ConcreteClan = () => {
  const { name } = useParams();
  const [clan, setClan] = useState<Clan>();
  useEffect(() => {
    getClanByName(name).then(
      (response) => {
        setClan(response.data);
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);
  return (
    <>
      <ResponsiveAppBar></ResponsiveAppBar>
      <Grid>
        <Typography>{clan?.name}</Typography>
      </Grid>
    </>
  );
};
export default ConcreteClan;
