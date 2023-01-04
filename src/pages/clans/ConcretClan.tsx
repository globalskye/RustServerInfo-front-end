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
import { getClanByName } from "../../service/ClanService";
import { Clan, Player } from "../../types";
import ResponsiveAppBar from "../home/components/Navbar";
const Concreteclan = () => {
  const navigate = useNavigate();
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
  const ClanInfo = () => {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
      setOpen(!open);
    };

    const handleRedirect = (name: string) => {
      navigate(`/Players/${name}`);
    };

    if (clan) {
      return (
        <List>
          <ListItem button>
            <ListItemText primary="Лидер:" style={{ justifyContent: "left" }} />
            <Chip
              label={clan.leader.name.toUpperCase()}
              sx={{ borderRadius: "5px", color: "blue" }}
              onClick={() => handleRedirect(clan.leader.name)}
              clickable
            />
          </ListItem>
          <ListItem button>
            <ListItemText
              primary="Аббревиатура:"
              style={{ justifyContent: "left" }}
            />
            <ListItemText
              primary={clan?.abbr}
              sx={{ justifyContent: "right", textAlign: "right" }}
            />
          </ListItem>

          <ListItem button>
            <ListItemText
              primary="Уровень:"
              style={{ justifyContent: "left" }}
            />
            <ListItemText
              primary={clan?.level}
              sx={{ justifyContent: "right", textAlign: "right" }}
            />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Опыт:" style={{ justifyContent: "left" }} />
            <ListItemText
              primary={clan?.experience}
              sx={{ justifyContent: "right", textAlign: "right" }}
            />
          </ListItem>
          <ListItem button>
            <ListItemText
              primary="Баланс:"
              style={{ justifyContent: "left" }}
            />
            <ListItemText
              primary={clan?.balance}
              sx={{ justifyContent: "right", textAlign: "right" }}
            />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Налог:" style={{ justifyContent: "left" }} />

            <ListItemText
              primary={clan?.tax + "%"}
              sx={{ justifyContent: "right", textAlign: "right" }}
            />
          </ListItem>

          <ListItemButton onClick={handleClick}>
            <ListItemText
              primary="Участники"
              style={{ justifyContent: "left" }}
            />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box>
              {clan.members?.map((Player: Player) => (
                <Chip
                  key={Player.name}
                  label={Player.name}
                  sx={{ borderRadius: "5px", color: "blue", margin: "5px" }}
                  onClick={() => handleRedirect(Player.name)}
                  clickable
                />
              ))}
            </Box>
          </Collapse>
        </List>
      );
    }
    return <>Клан не найден</>;
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
                {clan?.name.toUpperCase()}
              </Typography>
              <ClanInfo />
            </Box>
          </Box>
        </Grid>
      </Grid>
      </Grid>
    </>
  );
};
export default Concreteclan;
