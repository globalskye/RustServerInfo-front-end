import Box from "@mui/material/Box";
import { useEffect, useState } from "react";

import {
  Chip,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemText,
  CircularProgress,
} from "@mui/material";
import { Clan } from "../../../types";
import { getTopClans } from "../../../service";
import { useNavigate } from "react-router-dom";

const TopClans = () => {
  const navigate = useNavigate();
  const [loading, setLoading] =useState<Boolean>(true)
  const [clans, setClans] = useState<Clan[]>();
  useEffect(() => {
    getTopClans().then(
      (response) => {
        setLoading(false)
        setClans(response.data);
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);
  const ClanComponent = () => {
    const handleRedirect = (name: string) => {
      navigate(`/clans/${name}`);
    };

    return (
      <>
        {clans?.map((item: Clan) => (
          <ListItem
          key={item._id}
          button
          sx={{bgcolor:"#67DAD4",  borderRadius: "2px", marginTop: "2px" }}
          onClick={() => handleRedirect(item.name)}
        >
          <ListItemText  style={{justifyContent:'left'}} >
            {item.name}
          </ListItemText>
          <ListItemText  style={{justifyContent:'right', textAlign:'right'}} >
            {item.level}
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
          Топ 10 кланов
        </Typography>
        <List>
          
          {loading ? <CircularProgress />:<ClanComponent />}
        </List>
      </Box>
    </Box>
  );
};
export default TopClans;
