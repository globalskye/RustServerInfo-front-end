import { useEffect, useState } from "react";
import ResponsiveAppBar from "../home/components/Navbar";
import { Grid, Typography, Box, Divider, ListItem } from "@mui/material";
import { useParams } from "react-router-dom";
import { User } from "../../types";
import { getUserByName } from "../../service";

const ConcreteUser = () => {
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
            bgcolor="#93afe4"
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
                СТАТИСТИКА ИГРОКА {user?.name.toUpperCase()}
              </Typography>
              <ListItem
                button
                sx={{
                  bgcolor: "#e3e3ce",
                  borderRadius: "2px",
                  marginTop: "2px",
                  width: "900px",
                }}
                onClick={() => console.log("qwe")}
              >
                <Divider textAlign="right">{user?.name}</Divider>
              </ListItem>
              
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};
export default ConcreteUser;
