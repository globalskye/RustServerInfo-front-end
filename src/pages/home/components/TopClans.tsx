import Box from '@mui/material/Box';

import { Typography } from '@mui/material';

const TopClans = () => {
  return (
    <Box
      bgcolor="#F5F5DC"
      sx={{
        marginTop: '15px',
        borderRadius: '10px'
      }}>
      <Typography variant="h4" textAlign="center">
        Топ 10 кланов
      </Typography>
    </Box>
  );
};
export default TopClans;
