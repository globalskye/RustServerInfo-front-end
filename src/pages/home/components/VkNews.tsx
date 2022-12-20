import * as React from "react";

import Box from "@mui/material/Box";

import {
  Button,
  Card,
  CardActions,
  CardContent,
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

  const VkComponent = () => {
    return (
      <>
        {vk?.response.items?.map((item: ItemsEntity) => (
          <>
            <Card
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
      <VkComponent />
    </Box>
  );
};
export default VkPage;
