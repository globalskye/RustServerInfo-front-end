import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import styled, { createGlobalStyle } from "styled-components";
const drawerWidth = 240;

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }
`;

const StyledDrawer = styled(Drawer)`
  width: ${drawerWidth}px;
  flex-shrink: 0;

  & .MuiDrawer-paper {
    width: ${drawerWidth}px;
    background: linear-gradient(to bottom, #3949ab, #1e88e5);
    color: white;
  }
`;

const StyledListItemIcon = styled(ListItemIcon)`
  color: white;
`;

const StyledListItemText = styled(ListItemText)`
  & .MuiListItemText-primary {
    color: white;
  }
`;

const AdminNavbar = () => {
  return (
    <div>
      <GlobalStyle />
      <StyledDrawer variant="permanent" anchor="left">
        <div style={{ height: "64px" }} />
        <List>
          <ListItem button>
            <StyledListItemIcon></StyledListItemIcon>
            <StyledListItemText primary="Dashboard" />
          </ListItem>
          <ListItem button>
            <StyledListItemIcon></StyledListItemIcon>
            <StyledListItemText primary="Orders" />
          </ListItem>
          <ListItem button>
            <StyledListItemIcon></StyledListItemIcon>
            <StyledListItemText primary="Customers" />
          </ListItem>
          <ListItem button>
            <StyledListItemIcon></StyledListItemIcon>
            <StyledListItemText primary="Reports" />
          </ListItem>
          <ListItem button>
            <StyledListItemIcon></StyledListItemIcon>
            <StyledListItemText primary="Integrations" />
          </ListItem>
        </List>
      </StyledDrawer>
    </div>
  );
};

export default AdminNavbar;
