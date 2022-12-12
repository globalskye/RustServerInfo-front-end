import * as React from "react";

import Box from "@mui/material/Box";

import { Typography } from "@mui/material";

import { LinearProgress } from "@mui/material";

const TopPvP = () => {
  return (
    <Box
      bgcolor="#F5F5DC"
      sx={{
        marginTop: "15px",
        height: 400,
        borderRadius: "10px",
      }}
    >
         <Typography variant="h4" textAlign="center">
        Топ 10 убийц
      </Typography>
    </Box>
  );
};
export default TopPvP;