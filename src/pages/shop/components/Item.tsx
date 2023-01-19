import {
  makeStyles,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Card,
  Modal,
  Button,
  Grid,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { ShopItem } from "../../../types";

interface Props {
  name: string;
  image: string;
  price: number;
  
}
interface ItemProps {
  item: ShopItem;
  onClick: () => void;
  style?: React.CSSProperties;
}

const RustShopItemCard: React.FC<ItemProps> = ({ item, onClick,style }) => {
  const [open, setOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [filter, setFilter] = useState("");
  const [count, setCount] = useState(1);


  useEffect(() => {
    if (isHovered) {
      const randomHue = Math.floor(Math.random() * 360);
      const randomSaturate = Math.floor(Math.random() * 100) + 100;
      setFilter(
        `hue-rotate(${randomHue}deg) saturate(${randomSaturate}%) brightness(100%)`
      );
    } else {
      setFilter("none");
    }
  }, [isHovered]);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleCountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCount(Number(event.target.value));
  };


  return (
    <>
      <Card
       
        style={{
          ...style,
          width:'1000',
          transform: isHovered ? "scale(1.05)" : "scale(1) ",
          transition: "transform 0.2s ease-in-out",
          filter: filter,
          boxShadow: isHovered ? "0px 0px 15px #888888" : "none",
          cursor: "pointer",
        }}
        onClick={onClick} 
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <CardActionArea onClick={handleOpen}>
          <CardMedia sx={{ height: 400, width:300}} image={item.photoUrl} title={item.name} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {item.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Price: ${item.price}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Modal
        open={open}
        onClose={handleClose}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            backgroundColor: "white",
            border: "2px solid #000",
            boxShadow: "0px 3px 5px #000",
            padding: "1rem",
          }}
        >
          <img src={item.photoUrl} alt={item.name} style={{ maxWidth: "100%" }} />
          <p>{item.name}</p>
          <p>Price: {item.price} p.</p>
           <TextField
              label="Count"
              type="number"
              value={count}
              onChange={handleCountChange}
            />
            <Button>Add to Cart</Button>
          <Button variant="contained" color="primary">
            Add to Cart
          </Button>
        </div>
      </Modal>
    </>
  );
};


export default RustShopItemCard;

