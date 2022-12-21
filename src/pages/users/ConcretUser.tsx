import { ExpandLess, ExpandMore } from "@mui/icons-material";
import {
  Box, Chip, Collapse, Grid, List, ListItem, ListItemButton, ListItemText, Typography
} from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getUserByName } from "../../service";
import { User } from "../../types";
import ResponsiveAppBar from "../home/components/Navbar";
const ConcreteUser = () => {
  const navigate = useNavigate();
  const { name } = useParams();
  const [user, setUser] = useState<User>();
  useEffect(() => {
    getUserByName(name).then(
      (response) => {
        setUser(response.data);
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);
  const UserInfo = () => {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
      setOpen(!open);
    };

    const handleRedirect = (name: string) => {
      navigate(`/clans/${name}`);
    };

    if (user) {
      return (
        <List>
          <ListItem button>
            <ListItemText primary="Клан:" style={{ justifyContent: "left" }} />
            <Chip
              label={user.clanName.toUpperCase()}
              sx={{ borderRadius: "5px", color: "blue" }}
              onClick={() => handleRedirect(user.clanName)}
              clickable
            />
          </ListItem>
          <ListItem button>
            <ListItemText
              primary="Убито игроков:"
              style={{ justifyContent: "left" }}
            />
            <ListItemText
              primary={user?.killedPlayers}
              sx={{ justifyContent: "right", textAlign: "right" }}
            />
          </ListItem>
          <ListItem button>
            <ListItemText
              primary="Смертей:"
              style={{ justifyContent: "left" }}
            />
            <ListItemText
              primary={user?.deaths}
              sx={{ justifyContent: "right", textAlign: "right" }}
            />
          </ListItem>
          <ListItem button>
            <ListItemText primary="КД:" style={{ justifyContent: "left" }} />
            <ListItemText
              primary={(user.killedPlayers / user.deaths).toFixed(2)}
              sx={{ justifyContent: "right", textAlign: "right" }}
            />
          </ListItem>
          <ListItem button>
            <ListItemText
              primary="Времени на сервере (часов):"
              style={{ justifyContent: "left" }}
            />
            <ListItemText
              primary={(user.online / 24).toFixed(2)}
              style={{ justifyContent: "right", textAlign: "right" }}
            />
          </ListItem>
          <ListItem button>
            <ListItemText
              primary="Убито животных:"
              style={{ justifyContent: "left" }}
            />
            <ListItemText
              primary={user.killedMutants}
              style={{ justifyContent: "right", textAlign: "right" }}
            />
          </ListItem>
          <ListItem button>
            <ListItemText
              primary="Убито мутантов:"
              style={{ justifyContent: "left" }}
            />
            <ListItemText
              primary={user?.killedMutants}
              style={{ justifyContent: "right", textAlign: "right" }}
            />
          </ListItem>
          <ListItem button>
            <ListItemText
              primary="Зарейжено объектов:"
              style={{ justifyContent: "left" }}
            />
            <ListItemText
              primary={user?.raid}
              style={{ justifyContent: "right", textAlign: "right" }}
            />
          </ListItem>
          <ListItem button>
            <ListItemText
              primary="Зарейжено объектов:"
              style={{ justifyContent: "left" }}
            />
            <ListItemText
              primary={user?.raid}
              style={{ justifyContent: "right", textAlign: "right" }}
            />
          </ListItem>
          <ListItemButton onClick={handleClick}>
            <ListItemText primary="Фарм" style={{ justifyContent: "left" }} />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div">
              <ListItemButton>
                <ListItemText
                  secondary="Серная руда:"
                  style={{ justifyContent: "left" }}
                />
                <ListItemText
                  secondary={user.farm.sulfur}
                  style={{ justifyContent: "right", textAlign: "right" }}
                />
              </ListItemButton>
              <ListItemButton>
                <ListItemText
                  secondary="Металл руда:"
                  style={{ justifyContent: "left" }}
                />
                <ListItemText
                  secondary={user.farm.metal}
                  style={{ justifyContent: "right", textAlign: "right" }}
                />
              </ListItemButton>
              <ListItemButton>
                <ListItemText
                  secondary="Дерево:"
                  style={{ justifyContent: "left" }}
                />
                <ListItemText
                  secondary={user.farm.wood}
                  style={{ justifyContent: "right", textAlign: "right" }}
                />
              </ListItemButton>
              <ListItemButton>
                <ListItemText
                  secondary="Кожа:"
                  style={{ justifyContent: "left" }}
                />
                <ListItemText
                  secondary={user.farm.leather}
                  style={{ justifyContent: "right", textAlign: "right" }}
                />
              </ListItemButton>
              <ListItemButton>
                <ListItemText
                  secondary="Ткань:"
                  style={{ justifyContent: "left" }}
                />
                <ListItemText
                  secondary={user.farm.cloth}
                  style={{ justifyContent: "right", textAlign: "right" }}
                />
              </ListItemButton>
              <ListItemButton>
                <ListItemText
                  secondary="Жир:"
                  style={{ justifyContent: "left" }}
                />
                <ListItemText
                  secondary={user.farm.fat}
                  style={{ justifyContent: "right", textAlign: "right" }}
                />
              </ListItemButton>
            </List>
          </Collapse>
        </List>
      );
    }
    return <>Игрок не найден</>;
  };

  return (
    <>
      <ResponsiveAppBar></ResponsiveAppBar>
      <Grid
        container
        justifyItems={"center"}
        alignItems={"center"}
        direction={"column"}
        sx={{ minHeight: "100vh" }}
      >
        <Grid item>
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
                width: "650px",
              }}
            >
              <Typography
                variant="h5"
                textAlign="center"
                style={{ fontWeight: 1000 }}
              >
                {user?.name.toUpperCase()}
              </Typography>
              <UserInfo />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};
export default ConcreteUser;
