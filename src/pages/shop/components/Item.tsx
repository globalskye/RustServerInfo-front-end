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
  Input,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { ShopItem } from "../../../types";
import styled from "styled-components";

const StyledCard = styled(Card)`
 
`;

const StyledCardMedia = styled(CardMedia)`
  height: 0;
  padding-top: 56.25%; /* 16:9 */
`;

const StyledCardContent = styled(CardContent)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ItemCard: React.FC<{ item: ShopItem }> = ({ item }) => {
  const [open, setOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAddToCart = () => {
    // add item to cart with quantity
    console.log(`Added ${item.name} x ${quantity} to cart`);
  };

  return (
    <>
      <StyledCard onClick={handleOpen}>
       <img src={item.imageUrl}  />
        <StyledCardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {item.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Price: {item.price}
          </Typography>
          <Button sx={{color:'yellow'}}>Купить</Button>
        </StyledCardContent>
      </StyledCard>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="item-modal"
        aria-describedby="item-modal-description"
      >
        <div>
          <Typography variant="h5" id="item-modal-title">
            {item.name}
          </Typography>
          <Typography variant="subtitle1" id="item-modal-description">
            {item.description}
          </Typography>
          <Typography variant="subtitle1" id="item-modal-price">
            Price: {item.price}
          </Typography>
          <Typography variant="subtitle1" id="item-modal-rank">
            Rank: {item.rank}
          </Typography>

          <Input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value))}
            aria-labelledby="item-quantity"
            inputProps={{ min: 1 }}
          />
          <Button onClick={handleAddToCart}>Add to Cart</Button>
        </div>
      </Modal>
    </>
  );
};
export default ItemCard