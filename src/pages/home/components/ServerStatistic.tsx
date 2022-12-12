import * as React from "react";

import Box from "@mui/material/Box";

import { Typography } from "@mui/material";

import { LinearProgress } from "@mui/material";

const ServerStatistic = () => {
  return (
    <Box
      bgcolor="#F5F5DC"
      sx={{
        height: 200,
        borderRadius: "10px",
      }}
    >
      <Typography variant="h4" textAlign="center">
        Статистика
      </Typography>
      <Box
        sx={{
          margin: "5px",
          height: "150px",
          position: "relative",
        }}
      >
        <LinearProgress
          sx={{ height: "30px" }}
          variant="buffer"
          value={40}
          valueBuffer={100}
          
        />
        <Typography
          style={{
            position: "absolute",
            color: "white",
            top: 0,
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          Classic 50/100
        </Typography>
      </Box>
    </Box>
  );
};
export default ServerStatistic;
