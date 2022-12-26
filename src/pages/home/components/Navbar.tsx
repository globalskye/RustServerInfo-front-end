import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import AdbIcon from "@mui/icons-material/Adb";
import { Button, Menu, MenuItem, Typography, useMediaQuery } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { createTheme, responsiveFontSizes, ThemeProvider } from "@mui/material";



const ResponsiveAppBar = () => {
  const navigate = useNavigate();

 
  
  return (
    
    <AppBar position="static" style={{ backgroundColor: "#00030a" }}>
      <Container maxWidth="md">
        <Toolbar disableGutters style={{ display: "flex", justifyContent: "center" }}>
          <Button
            variant="outlined"
            style={{
              height: "50px",
              fontWeight: "bold",
              fontSize:"30px",
              marginRight: "20px",
              marginLeft: "20px",
            }}
            onClick={() => {
              navigate("/");
            }}
          >
            ГЛАВНАЯ
          </Button>
          <Button
            variant="outlined"
            style={{
              height: "50px",
              fontWeight: "bold",
              fontSize:"30px",
              marginRight: "20px",
              marginLeft: "20px",
            }}
            onClick={() => {
              navigate("/clans");
            }}
          >
            КЛАНЫ
          </Button>
          <Button
            variant="outlined"
            style={{
              height: "50px",
              fontWeight: "bold",
              fontSize:"30px",
              marginRight: "20px",
              marginLeft: "20px",
            }}
            onClick={() => {
              navigate("/users");
            }}
          >
            ИГРОКИ
          </Button>
          <Button
            variant="outlined"
            style={{
              height: "50px",
              fontWeight: "bold",
              fontSize:"30px",
              marginRight: "20px",
              marginLeft: "20px",
            }}
            href="https://dark-ru.trademc.org/"
          >
            МАГАЗИН
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
    
  );
};
export default ResponsiveAppBar;
