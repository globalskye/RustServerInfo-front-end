import * as React from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import { Typography } from "@mui/material";

import { LinearProgress } from "@mui/material";

const InfoButtons = () => {
  return (
    <Box
      bgcolor="#F5F5DC"
      sx={{
        height: 250,
        borderRadius: "10px",
      }}
    >
      <Typography variant="h4" textAlign="center">
        Информация
      </Typography>
      <Box
        sx={{
          margin: "5px",
          height: "150px",
          position: "relative",
        }}
      >
        <Button  variant="contained" sx={{ width: "100%", height:"40px" }}>
          <Typography variant="h5" textAlign="center">
            Скачать клиент
          </Typography>
        </Button>
        <Button  variant="contained" sx={{ width: "100%", height:"40px", marginTop: "4px" }}>
          <Typography variant="h5" textAlign="center">
            ПРАВИЛА
          </Typography>
        </Button>
        <Button  variant="contained" sx={{ width: "100%", height:"40px", marginTop: "4px" }}>
          <Typography variant="h5" textAlign="center">
            VK
          </Typography>
        </Button>
        <Button  variant="contained" sx={{ width: "100%", height:"40px", marginTop: "4px" }}>
          <Typography variant="h5" textAlign="center">
            DISCORD
          </Typography>
        </Button>
        
      </Box>
    </Box>
  );
};
export default InfoButtons;
