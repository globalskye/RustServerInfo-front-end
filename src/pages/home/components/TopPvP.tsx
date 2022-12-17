import { useEffect, useState } from 'react';

import Box from '@mui/material/Box';

import { Chip, Typography } from '@mui/material';
import { User } from '../../../types';
import { getTopKillers } from '../../../service';



const TopPvP = () => {
  const [killers, setKillers ] = useState<User[]>();
  useEffect(() => {
    getTopKillers().then(
      (response) => {
        setKillers(response.data);
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);
  const pvpComponent = () => {
    const handleRedirect = (name: string) => {
      window.location.href = `/profile/${name}`;
    };

    return (
      <>
        {killers?.map((item: User) => (
          <Chip key={item._id} sx={{borderRadius:"2px", margin:"2px"}} label={item.name} onClick={() => handleRedirect(item.name)} clickable />
        ))}
      </>
    );
  };
  return (
    <Box
      bgcolor="#F5F5DC"
      sx={{
        marginTop: '15px',
        borderRadius: '10px'
      }}>
      <Typography variant="h4" textAlign="center">
        Топ 10 убийц
      </Typography>
      {pvpComponent()}
    </Box>
  );
};
export default TopPvP;
