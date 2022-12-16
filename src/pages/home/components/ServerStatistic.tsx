import { useEffect, useState } from 'react';

import Box from '@mui/material/Box';

import { Chip, Typography } from '@mui/material';

import { LinearProgress } from '@mui/material';
import { getOnline } from '../../../service';
import { Online } from '../../../types';

const ServerStatistic = () => {
  const [online, setOnline] = useState<Online>();
  useEffect(() => {
    getOnline().then(
      (response) => {
        setOnline(response.data);
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);
  const OnlineComponent = () => {
    const handleRedirect = (name: string) => {
      window.location.href = `/profile/${name}`;
    };

    return (
      <>
        {online?.online.map((item: string) => (
          <Chip key={item} label={item} onClick={() => handleRedirect(item)} clickable />
        ))}
      </>
    );
  };

  return (
    <Box
      bgcolor="#F5F5DC"
      sx={{
        height: 200,
        borderRadius: '10px',
        paddingRight: '12px',
        paddingLeft: '12px'
      }}>
      <Typography variant="h4" textAlign="center">
        Statistics
      </Typography>
      <Box
        sx={{
          margin: '5px',
          position: 'relative'
        }}>
        <LinearProgress
          sx={{ height: '30px' }}
          variant="buffer"
          value={online?.online.length || 0}
          valueBuffer={100}
        />
        <Typography
          style={{
            position: 'absolute',
            color: 'white',
            top: 0,
            left: '50%',
            transform: 'translateX(-50%)'
          }}>
          Classic {online?.online.length}/100
        </Typography>
        <OnlineComponent />
      </Box>
    </Box>
  );
};
export default ServerStatistic;
