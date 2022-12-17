import Box from "@mui/material/Box";
import { useEffect, useState } from 'react';

import { Chip, Typography } from "@mui/material";
import { Clan } from "../../../types";
import { getTopClans } from "../../../service";

const TopClans = () => {
  const [clans, setClans] = useState<Clan[]>();
  useEffect(() => {
    getTopClans().then(
      (response) => {
        setClans(response.data);
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);
  const ClanComponent = () => {
    const handleRedirect = (name: string) => {
      window.location.href = `/clan/${name}`;
    };

    return (
      <>
        {clans?.map((item: Clan) => (
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
        marginTop: "15px",
        borderRadius: "10px",
      }}
    >
      <Typography variant="h4" textAlign="center">
        Топ 10 кланов
      </Typography>
      {ClanComponent()}
    </Box>
  );
};
export default TopClans;
