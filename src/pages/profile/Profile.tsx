import { Box, CircularProgress, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { getUserInfo } from "../../service";
import { User } from "../../types";
import ResponsiveAppBar from "../navbar/Navbar";
import CartPage from "./components/Cart";
import PayPage from "./components/Pay";
import StockPage from "./components/Stock";
import UserInfoPage from "./components/UserInfo";

const ProfilePage = () => {
  const [user, setUser] = useState<User>();

  useEffect(() => {
    getUserInfo().then(
      (response) => {
        setUser(response.data);
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);

  if (user) {
    return (
      <Grid
        style={{
          width: "1500px",
          margin: "0 auto",
          minHeight: "100%",
          height: "auto !important",
        }}
      >
        <ResponsiveAppBar />
        <Box
          textAlign={"center"}
          bgcolor={"secondary.main"}
          border={"1px solid #40444E"}
          sx={{
            borderRadius: "20px",
            height: "1000px",
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Grid>
                <CartPage />
              </Grid>
              <Grid>
                <StockPage />
              </Grid>
            </Grid>
            <Grid item xs={4}>
              <Grid>
                <UserInfoPage />
              </Grid>
              <Grid>
                <PayPage user={user} />
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    );
  }
  return (
    <>
      <Grid
        style={{
          width: "1500px",
          margin: "0 auto",
          height: "auto !important",
        }}
      >
        <ResponsiveAppBar></ResponsiveAppBar>
        <Grid>
          <Box sx={{ flexGrow: 1 }}>
            <Box
              textAlign={"center"}
              bgcolor={"secondary.main"}
              border={"1px solid #40444E"}
              sx={{
                borderTopLeftRadius: "20px",
                borderTopRightRadius: "20px",
                height: "100vh",
              }}
            >
              <CircularProgress sx={{ color: "white" }} size={300} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};
export default ProfilePage;
