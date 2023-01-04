import { Button } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import { useNavigate } from "react-router-dom";



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
              navigate("/Players");
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
              navigate("/login");
            }}
          >
            ВХОД
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
              navigate("/register");
            }}
          >
            РЕГИСТРАЦИЯ
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
    
  );
};
export default ResponsiveAppBar;
