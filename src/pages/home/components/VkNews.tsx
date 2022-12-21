import * as React from "react";

import Box from "@mui/material/Box";

import {
  Button,
  Card,
  CardActions,
  CardContent,
  List,
  ListItem,
  ListItemButton,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { getVkNews } from "../../../service";
import { ItemsEntity, Vk } from "../../../types";

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
          <>
            <ListItemButton
              key={item.id}
              LinkComponent="a"
              sx={{
                bgcolor: "white",
                marginBottom: "20px",
                borderRadius: "10px",
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
          </>
        ))}
      </>
    );
  };

  const VkComponent = () => {
    return (
      <>
        {vk?.response.items?.map((item: ItemsEntity) => (
          <>
            <Card
              key={item.id}
              sx={{
                maxWidth: "100%",
                marginBottom: "20px",
                borderRadius: "10px",
              }}
            >
              <CardContent>
                <Typography sx={{ whiteSpace: "pre-wrap" }}>
                  {item.text}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  href={
                    "https://vk.com/rustdark12?w=wall" +
                    item.owner_id +
                    "_" +
                    item.id
                  }
                >
                  Подробнее
                </Button>
              </CardActions>
            </Card>
          </>
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
      <List sx={{}}>
        <VkNewsList />
      </List>
    </Box>
  );
};
export default VkPage;
