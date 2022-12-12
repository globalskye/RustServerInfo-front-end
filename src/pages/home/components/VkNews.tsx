import * as React from "react";

import Box from "@mui/material/Box";

import { Typography } from "@mui/material";

const VkPage = () => {
  return (
    <Box
      bgcolor="#F5F5DC"
      sx={{
        height: "100%",
        borderRadius: "10px",
      }}
    >
        <Typography variant="h3" textAlign="center">
        Новости
      </Typography>
    </Box>
  );
};
export default VkPage;
