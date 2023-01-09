import { ExpandLess, ExpandMore } from "@mui/icons-material";
import {
  Box,
  Chip,
  Collapse,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getPlayerByName } from "../../service";
import { Player } from "../../types";
import ResponsiveAppBar from "../Navbar";
const ConcretePlayer = () => {
  const navigate = useNavigate();
  const { name } = useParams();
  const [Player, setPlayer] = useState<Player>();
  useEffect(() => {
    getPlayerByName(name).then(
      (response) => {
        setPlayer(response.data);
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);
  const PlayerInfo = () => {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
      setOpen(!open);
    };

    const handleRedirect = (name: string) => {
      navigate(`/clans/${name}`);
    };
    const ClanButton = () => {
      if (Player?.clanName) {
        return (
          <Chip
            label={Player.clanName.toUpperCase()}
            sx={{ borderRadius: "5px", color: "blue" }}
            onClick={() => handleRedirect(Player.clanName)}
            clickable
          />
        );
      }
      return <Typography>Игрок не состоит в клане</Typography>;
    };

    if (Player) {
      return (
        <List>
          <ListItem button>
            <ListItemText primary="Клан:" style={{ justifyContent: "left" }} />
            <ClanButton />
          </ListItem>
          <ListItem button>
            <ListItemText
              primary="Убито игроков:"
              style={{ justifyContent: "left" }}
            />
            <ListItemText
              primary={Player?.killedPlayers}
              sx={{ justifyContent: "right", textAlign: "right" }}
            />
          </ListItem>
          <ListItem button>
            <ListItemText
              primary="Смертей:"
              style={{ justifyContent: "left" }}
            />
            <ListItemText
              primary={Player?.deaths}
              sx={{ justifyContent: "right", textAlign: "right" }}
            />
          </ListItem>
          <ListItem button>
            <ListItemText primary="КД:" style={{ justifyContent: "left" }} />
            <ListItemText
              primary={(Player.killedPlayers / Player.deaths).toFixed(2)}
              sx={{ justifyContent: "right", textAlign: "right" }}
            />
          </ListItem>
          <ListItem button>
            <ListItemText
              primary="Времени на сервере (часов):"
              style={{ justifyContent: "left" }}
            />
            <ListItemText
              primary={(Player.online / 24).toFixed(2)}
              style={{ justifyContent: "right", textAlign: "right" }}
            />
          </ListItem>
          <ListItem button>
            <ListItemText
              primary="Убито животных:"
              style={{ justifyContent: "left" }}
            />
            <ListItemText
              primary={Player.killedAnimals}
              style={{ justifyContent: "right", textAlign: "right" }}
            />
          </ListItem>
          <ListItem button>
            <ListItemText
              primary="Убито мутантов:"
              style={{ justifyContent: "left" }}
            />
            <ListItemText
              primary={Player?.killedMutants}
              style={{ justifyContent: "right", textAlign: "right" }}
            />
          </ListItem>
          <ListItem button>
            <ListItemText
              primary="Зарейжено объектов:"
              style={{ justifyContent: "left" }}
            />
            <ListItemText
              primary={Player?.raid}
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
                  secondary={Player.farm.sulfur}
                  style={{ justifyContent: "right", textAlign: "right" }}
                />
              </ListItemButton>
              <ListItemButton>
                <ListItemText
                  secondary="Металл руда:"
                  style={{ justifyContent: "left" }}
                />
                <ListItemText
                  secondary={Player.farm.metal}
                  style={{ justifyContent: "right", textAlign: "right" }}
                />
              </ListItemButton>
              <ListItemButton>
                <ListItemText
                  secondary="Дерево:"
                  style={{ justifyContent: "left" }}
                />
                <ListItemText
                  secondary={Player.farm.wood}
                  style={{ justifyContent: "right", textAlign: "right" }}
                />
              </ListItemButton>
              <ListItemButton>
                <ListItemText
                  secondary="Кожа:"
                  style={{ justifyContent: "left" }}
                />
                <ListItemText
                  secondary={Player.farm.leather}
                  style={{ justifyContent: "right", textAlign: "right" }}
                />
              </ListItemButton>
              <ListItemButton>
                <ListItemText
                  secondary="Ткань:"
                  style={{ justifyContent: "left" }}
                />
                <ListItemText
                  secondary={Player.farm.cloth}
                  style={{ justifyContent: "right", textAlign: "right" }}
                />
              </ListItemButton>
              <ListItemButton>
                <ListItemText
                  secondary="Жир:"
                  style={{ justifyContent: "left" }}
                />
                <ListItemText
                  secondary={Player.farm.fat}
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
      <Grid
        style={{
          width: "1500px",
          margin: "0 auto",
          minHeight: "100%",
          height: "auto !important",
        }}
      >
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
                  {Player?.name.toUpperCase()}
                </Typography>
                <PlayerInfo />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
export default ConcretePlayer;
