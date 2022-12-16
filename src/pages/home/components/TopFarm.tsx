import * as React from 'react';

import Box from '@mui/material/Box';

import { Typography } from '@mui/material';

const TopFarm = () => {
  return (
    <Box
      bgcolor="#F5F5DC"
      sx={{
        marginTop: '15px',
        borderRadius: '10px'
      }}>
      <Typography variant="h4" textAlign="center">
        Топ 10 фармеров
      </Typography>
    </Box>
  );
};
export default TopFarm;
