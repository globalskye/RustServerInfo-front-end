import { useEffect, useState } from "react";

import Box from "@mui/material/Box";

import { Chip, Divider, List, ListItem, ListItemText, Typography } from "@mui/material";
import { User } from "../../../types";

import { getTopRaiders } from "../../../service";
import { useNavigate } from "react-router-dom";

const TopFarm = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState<User[]>();
  useEffect(() => {
    getTopRaiders().then(
      (response) => {
        setUsers(response.data);
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);
  const RaidersComponent = () => {
    const handleRedirect = (name: string) => {
      navigate(`/users/${name}`);
    };

    return (
      <>
        {users?.map((item: User) => (
          <ListItem
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
        <RaidersComponent/>
        </List>
      </Box>
    </Box>
  );
};
export default TopFarm;
