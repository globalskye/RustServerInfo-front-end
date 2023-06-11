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

const shopItems: ShopItem[] = [
  {
    _id: "1",
    name: "AK-47",
    category: "Assault Rifles",
    imageUrl: "https://p7.hiclipart.com/preview/269/100/50/rust-ak-47-weapon-firearm-recoil-ak-47.jpg",
    description: "A powerful automatic assault rifle.",
    rank: 5,
    price: 1000,
    attachments: [
      {
        name: "Red Dot Sight",
        description: "Improves aiming accuracy.",
        imageUrl: "https://example.com/images/red-dot-sight.jpg",
      },
      {
        name: "Extended Magazine",
        description: "Increases magazine capacity.",
        imageUrl: "https://example.com/images/extended-magazine.jpg",
      },
    ],
  },
  {
    _id: "2",
    name: "M249",
    category: "Machine Guns",
    imageUrl: "https://example.com/images/m249.jpg",
    description: "A light machine gun with a high rate of fire.",
    rank: 7,
    price: 2000,
    attachments: null,
  },
  {
    _id: "3",
    name: "Bolt Action Rifle",
    category: "Sniper Rifles",
    imageUrl: "https://example.com/images/bolt-action-rifle.jpg",
    description: "A high-powered sniper rifle with a bolt-action mechanism.",
    rank: 6,
    price: 1500,
    attachments: [
      {
        name: "8x Scope",
        description: "Provides enhanced zoom for long-range shots.",
        imageUrl: "https://example.com/images/8x-scope.jpg",
      },
    ],
  },

  {
    _id: "1",
    name: "Bolt Action Rifle",
    category: "Weapons",
    imageUrl: "https://rustlabs.com/img/items180/metal.facemask.png",
    description: "A powerful bolt-action rifle used for long-range engagements.",
    rank: 2,
    price: 500,
    attachments: [
      {
        name: "4x Zoom Scope",
        description: "A magnifying scope for enhanced accuracy.",
        imageUrl: "https://rustlabs.com/img/items180/metal.facemask.png",
      },
      {
        name: "Muzzle Brake",
        description: "Reduces recoil for improved control.",
        imageUrl: "https://rustlabs.com/img/items180/metal.facemask.png",
      },
    ],
  },
  {
    _id: "2",
    name: "P250",
    category: "Clothing",
    imageUrl: "https://example.com/images/hazmat-suit.jpg",
    description: "Protective clothing that provides resistance to radiation.",
    rank: 1,
    price: 250,
  },
  {
    _id: "3",
    name: "Explosive Charge",
    category: "Tools",
    imageUrl: "https://example.com/images/explosive-charge.jpg",
    description: "A powerful explosive used for raiding bases.",
    rank: 3,
    price: 1000,
  },
];

interface Props {
  items: ShopItem[];
}

const ShopPage = () => {
  const [category, setCategory] = useState("All");
  const [show, setShow] = useState(true);
  const [items, setItems] = useState<ShopItem[]>();
  const isWide = useMediaQuery("(min-width:1400px)");

  useEffect(() => {
   setItems(shopItems)
  }, []);


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
                <CSSTransition in={show} timeout={300} unmountOnExit>
                  <Grid container spacing={2}>
                    {items?.map((item: ShopItem) => (
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
