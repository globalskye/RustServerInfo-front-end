import { useEffect, useState } from "react";

import Box from "@mui/material/Box";

import { Chip, CircularProgress, Divider, List, ListItem, ListItemText, Typography } from "@mui/material";
import { Player } from "../../../types";

import { getTopRaiders } from "../../../service";
import { useNavigate } from "react-router-dom";

const TopFarm = () => {
  const navigate = useNavigate();
  const [loading, setLoading] =useState<Boolean>(true)
  const [Players, setPlayers] = useState<Player[]>();
  useEffect(() => {
    getTopRaiders().then(
      (response) => {
        setLoading(false)
        setPlayers(response.data);
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);
  const RaidersComponent = () => {
    const handleRedirect = (name: string) => {
      navigate(`/Players/${name}`);
    };

    return (
      <>
        {Players?.map((item: Player) => (
          <ListItem
          key={item.name}
            button
            sx={{bgcolor:"#67DAD4", borderRadius: "2px", marginTop: "2px" }}
            onClick={() => handleRedirect(item.name)}
          >
            <ListItemText  style={{justifyContent:'left'}} >
              {item.name}
            </ListItemText>
            <ListItemText  style={{justifyContent:'right', textAlign:'right'}} >
              {item.raid}
            </ListItemText>
          </ListItem>
        ))}
      </>
    );
  };
  return (
    <Box
      bgcolor="#60EFE7"
      sx={{
        fontWeight: "bold",
        borderRadius: "10px",
        paddingRight: "12px",
        paddingLeft: "12px",
      }}
    >
      <Box
        sx={{
          margin: "5px",
          position: "relative",
        }}
      >
        <Typography
          variant="h5"
          textAlign="center"
          style={{ fontWeight: 1000 }}
        >
          Топ 10 рейдеров
        </Typography>
        <List>
        
        {loading ? <CircularProgress />:<RaidersComponent/>}
        </List>
      </Box>
    </Box>
  );
};
export default TopFarm;
