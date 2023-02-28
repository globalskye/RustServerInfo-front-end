import React, { useState, useEffect } from "react";
import {
  Grid,
  Button,
  Card,
  CardContent,
  Typography,
  useMediaQuery,
  Fade,
  Slide,
  Grow,
  Box,
} from "@mui/material";
import { ShopItem } from "../../types";

import ResponsiveAppBar from "../navbar/Navbar";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { getAllShopItems } from "../../service/ShopService";
import ItemCard from "./components/Item";

interface Props {
  items: ShopItem[];
}

const ShopPage = () => {
  const [category, setCategory] = useState("All");
  const [show, setShow] = useState(false);
  const [items, setItems] = useState<ShopItem[]>();
  const isWide = useMediaQuery("(min-width:1400px)");

  useEffect(() => {
    getAllShopItems().then(
      (response) => {
        setItems(response.data);
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);

  const handleCategorySelection = (selectedCategory: string) => {
    setShow(false);
    setCategory(selectedCategory);
    setTimeout(() => {
      setShow(true);
    }, 300);
  };

  const filteredItems = items?.filter(
    (item) => category === "All" || item.category === category
  );

  return (
    <>
      <Grid
        style={{
          width: "1500px",
          margin: "0 auto",

          height: "auto !important",
        }}
      >
        <ResponsiveAppBar />
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
              <Grid item xs={12}>
                <Button
                  variant="outlined"
                  sx={{ color: "white" }}
                  onClick={() => handleCategorySelection("All")}
                >
                  All
                </Button>
              </Grid>

              <Grid item xs={12}>
                <CSSTransition in={show} timeout={300} unmountOnExit>
                  <Grid container spacing={2}>
                    {filteredItems?.map((item: ShopItem) => (
                      <Grid item xs={12} sm={6} md={4} key={item._id}>
                        <ItemCard item={item} />
                      </Grid>
                    ))}
                  </Grid>
                </CSSTransition>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default ShopPage;
