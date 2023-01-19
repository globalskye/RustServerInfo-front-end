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
} from "@mui/material";
import { ShopItem } from "../../types";
import RustShopItemCard  from "./components/Item";
import ResponsiveAppBar from "../Navbar";
import { TransitionGroup, CSSTransition,  } from 'react-transition-group';

interface Props {
  items: ShopItem[];
}
const items = [
  {
    _id: "63c5344122fqweqwe260cb740a",
    name: "Император",
    category: "Category1",
    photoUrl: "https://i.imgur.com/es77VFc.png",
    description: "Подходит для фарма",
    price: 140,
    attachments: [
      { name: "kit uber", description: "kit uber", photoUrl: "" },
      { name: "kit ubergun", description: "kit uber", photoUrl: "" },
    ],
  },
  {
    _id: "63c5344122qweeecb740a",
    name: "Император",
    category: "All",
    photoUrl: "https://i.imgur.com/RMo35xp.jpeg",
    description: "Подходит для фарма",
    price: 140,
    attachments: [
      { name: "kit uber", description: "kit uber", photoUrl: "" },
      { name: "kit ubergun", description: "kit uber", photoUrl: "" },
    ],
  },
  {
    _id: "63c5344122f4a5a26ewe0cb740a",
    name: "Император",
    category: "Category2",
    photoUrl: "https://i.imgur.com/8IT3ufK.jpeg",
    description: "Подходит для фарма",
    price: 140,
    attachments: [
      { name: "kit uber", description: "kit uber", photoUrl: "" },
      { name: "kit ubergun", description: "kit uber", photoUrl: "" },
    ],
  },
];

const ShopPage = () => {
  const [category, setCategory] = useState('All');
  const [show, setShow] = useState(false);
  const isWide = useMediaQuery('(min-width:1400px)');

  const handleCategorySelection = (selectedCategory: string) => {
    setShow(false);
    setCategory(selectedCategory);
    setTimeout(() => {
      setShow(true);
    }, 300);
  };



  const filteredItems = items.filter(
    (item) => category === "All" || item.category === category
  );

  return (
    <>
      <Grid
        style={{
          width: "1500px",
          margin: "0 auto",
          minHeight: "100%",
          height: "auto !important",
          justifyItems: "center",
        }}
      >
        <ResponsiveAppBar />
        <Grid
          container
          spacing={2}
          style={{ maxWidth: 1400, margin: "auto", display: "flex" }}
        >
          <Grid item xs={12}>
            <Button onClick={() => handleCategorySelection("All")}>All</Button>
            <Button onClick={() => handleCategorySelection("Category1")}>
              Category 1
            </Button>
            <Button onClick={() => handleCategorySelection("Category2")}>
              Category2
            </Button>
            <Button onClick={() => handleCategorySelection("Category3")}>
              Category3
            </Button>
          </Grid>

          <Grid item xs={12}>
          <CSSTransition
            in={show}
            timeout={300}
            unmountOnExit
          >
            <Grid container spacing={2}>
              {filteredItems.map(item => (
                <Grid item xs={12} sm={6} md={4} key={item._id}>
                  <RustShopItemCard
                    item={item}
                    onClick={()=>{}}
                    style={{
                      animation: 'fade-in 300ms ease-in forwards',
                      visibility: show ? 'visible' : 'hidden'
                    }}
                  />
                </Grid>
              ))}
            </Grid>
          </CSSTransition>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default ShopPage;
