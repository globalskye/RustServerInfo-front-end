import { useEffect, useState } from 'react';

import Box from '@mui/material/Box';

import { Chip, Typography } from '@mui/material';
import { User } from '../../../types';



import { getTopRaiders } from '../../../service';

const TopFarm = () => {
  const [users, setUsers] = useState<User[]>();
  useEffect(() => {
    getTopRaiders().then(
      (response) => {
        setUsers(response.data);
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);
  const RaidersComponent = () => {
    const handleRedirect = (name: string) => {
      window.location.href = `/profile/${name}`;
    };

    return (
      <>
        {users?.map((item: User) => (
          <Chip
            key={item._id}
            sx={{ borderRadius: "2px", margin: "2px" }}
            label={item.name}
            
            onClick={() => handleRedirect(item.name)}
            clickable
          />
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
        Топ 10 рейдеров
      </Typography>
      {RaidersComponent()}
    </Box>
  );
};
export default TopFarm;
