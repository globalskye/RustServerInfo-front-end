import { useEffect, useState } from "react";

import Box from "@mui/material/Box";

import {
  CircularProgress, List,
  ListItem,
  ListItemText,
  Typography
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { getTopOnline } from "../../../service";
import { Player } from "../../../types";

const TopOnline = () => {
  const navigate = useNavigate();
  const [loading, setLoading] =useState<Boolean>(true)
  const [killers, setKillers] = useState<Player[]>();
  useEffect(() => {
    getTopOnline().then(
      (response) => {
        setLoading(false)
        setKillers(response.data);
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);
  const OnlineComponent = () => {
    const handleRedirect = (name: string) => {
      navigate(`/Players/${name}`);
    };

    return (
      <>
        {killers?.map((item: Player) => (
          <ListItem
            key={item.name}
            button
            sx={{  borderRadius: "2px", marginTop: "2px" }}
            onClick={() => handleRedirect(item.name)}
          >
            <ListItemText style={{ justifyContent: "left" }}>
              {item.name}
            </ListItemText>
            <ListItemText
              style={{ justifyContent: "right", textAlign: "right" }}
            >
              {(item.online / 60).toFixed(1)} ч.
            </ListItemText>
          </ListItem>
        ))}
      </>
    );
  };
  return (
    <Box
      bgcolor={"secondary.main"}
     
      border={"1px solid #40444E"}
      sx={{
        fontWeight: "bold",
        borderRadius: "10px",
        paddingRight: "12px",
        paddingLeft: "12px",
      }}
    >
      <Box
        sx={{
          margin: "4px",
          position: "relative",
        }}
      >
        <Typography
          variant="h5"
          textAlign="center"
          style={{ fontWeight: 1000 }}
        >
          Топ 10 постояльцев
        </Typography>
        <List>
         
          {loading ? <CircularProgress />:<OnlineComponent />}
        </List>
      </Box>
    </Box>
  );
};
export default TopOnline;
