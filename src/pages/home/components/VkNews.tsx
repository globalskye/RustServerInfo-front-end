import * as React from "react";

import Box from "@mui/material/Box";

import {
  Button,
  Card,
  CardActions,
  CardContent,
  createMuiTheme,
  createTheme,
  List,
  ListItem,
  ListItemButton,
  Typography,
} from "@mui/material";

import { useEffect, useState } from "react";
import { getVkNews } from "../../../service";
import { ItemsEntity, Vk } from "../../../types";
import { ThemeProvider } from "styled-components";

const theme = createTheme({
  components: {
    MuiList: {
      styleOverrides: {
        root: {
          scrollbarColor: "#ffffff",
          backgroundColor: "red",
        },
        // "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
        //   borderRadius: 8,
        //   backgroundColor: "#6b6b6b",
        //   minHeight: 24,
        //   border: "3px solid #2b2b2b",
        // },
        //  scrollbarColor: "#6b6b6b #2b2b2b",
        // "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
        //   backgroundColor: "#2b2b2b",
        // },
        // "&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus":
        //   {
        //     backgroundColor: "#959595",
        //   },
        // "&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active":
        //   {
        //     backgroundColor: "#959595",
        //   },
        // "&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover":
        //   {
        //     backgroundColor: "#959595",
        //   },
        // "&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner": {
        //   backgroundColor: "#2b2b2b",
        // },
      },
    },
  },
});

const VkPage = () => {
  const [vk, setVk] = useState<Vk>();
  useEffect(() => {
    getVkNews().then(
      (response) => {
        setVk(response.data);
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);
  const VkNewsList = () => {
    return (
      <>
        {vk?.response.items?.map((item: ItemsEntity) => (
          
            <ListItemButton
              key={item.id}
              LinkComponent="a"
              sx={{
                borderRadius:"10px",
                marginBottom:"15px",
                bgcolor: "white",
                
                
              }}
              href={
                "https://vk.com/rustdark12?w=wall" +
                item.owner_id +
                "_" +
                item.id
              }
            >
              <Typography sx={{ whiteSpace: "pre-wrap" }}>
                {item.text}
              </Typography>
            </ListItemButton>
          
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
      <Typography variant="h5" textAlign="center" style={{ fontWeight: 1000 }}>
        Новости
      </Typography>

      <List   sx={{
        borderRadius: "10px",
        display: "flex",
        flexDirection: "column",
        height: 1400,
        overflow: "hidden",
        overflowY: "scroll",
       // justifyContent="flex-end" # DO NOT USE THIS WITH 'scroll'
       
      }}>
        <VkNewsList />
      </List>
    </Box>
  );
};
export default VkPage;
