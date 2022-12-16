import * as React from "react";

import Box from "@mui/material/Box";

import { Chip, Typography } from "@mui/material";

import { LinearProgress } from "@mui/material";
import { getOnline } from "../../../service";
import { Online } from "../../../types";

const ServerStatistic = () => {
  const [online, setOnline] = React.useState<Online>();
  React.useEffect(() => {
    getOnline().then(
      (response) => {
        console.log(response.data);
        setOnline(response.data);
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);
  const onlineComponent = () => {
    return (
      <>
        {online?.online.map((item: string) => (
          <Chip sx={{borderRadius:"2px", margin:"2px"}} label={item} onClick={()=>{console.log(item)}}/>
        ))}
      </>
    );
  };
  return (
    <Box
      bgcolor="#F5F5DC"
      sx={{
        height: "100%",
        borderRadius: "10px",
        paddingRight: "12px",
        paddingLeft: "12px",
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
          value={online?.online.length}
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
          Classic {online?.online.length}/100
        </Typography>
        {onlineComponent()}
      </Box>
    </Box>
  );
};
export default ServerStatistic;
