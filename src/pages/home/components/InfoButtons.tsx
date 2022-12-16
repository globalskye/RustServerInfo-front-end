import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import { Typography } from '@mui/material';

const InfoButtons = () => {
  return (
    <Box
      bgcolor="#F5F5DC"
      sx={{
        borderRadius: '10px'
      }}>
      <Typography variant="h4" textAlign="center">
        Информация
      </Typography>
      <Box>
        <Button variant="contained" sx={{ width: '100%', height: '40px' }}>
          Скачать клиент
        </Button>
        <Button variant="contained" sx={{ width: '100%', height: '40px', marginTop: '4px' }}>
          ПРАВИЛА
        </Button>
        <Button variant="contained" sx={{ width: '100%', height: '40px', marginTop: '4px' }}>
          VK
        </Button>
        <Button variant="contained" sx={{ width: '100%', height: '40px', marginTop: '4px' }}>
          DISCORD
        </Button>
      </Box>
    </Box>
  );
};
export default InfoButtons;
