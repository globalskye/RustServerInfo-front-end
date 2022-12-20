import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import AdbIcon from "@mui/icons-material/Adb";
import { Button, Menu, MenuItem, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ResponsiveAppBar = () => {
  const navigate = useNavigate();
  return (
    <AppBar position="static" style={{ backgroundColor: "#00030c" }} >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Button
            variant="outlined"
            size="large"
            onClick={() => {
              navigate("/");
            }}
          >
            HOME
          </Button>
          <Button
            variant="outlined"
            size="large"
            onClick={() => {
              navigate("/clans");
            }}
          >
            CLANS
          </Button>
          <Button
            variant="outlined"
            size="large"
            onClick={() => {
              navigate("/users");
            }}
          >
            USERS
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
