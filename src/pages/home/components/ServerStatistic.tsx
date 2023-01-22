import { useEffect, useState } from "react";

import Box from "@mui/material/Box";

import { Chip, LinearProgress, Typography } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import { useNavigate } from "react-router-dom";
import { getOnline } from "../../../service";
import { Online } from "../../../types/player";

const ServerStatistic = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState<Boolean>(true);
  const [online, setOnline] = useState<Online>();
  useEffect(() => {
    getOnline().then(
      (response) => {
        setLoading(false);
        setOnline(response.data);
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);

  const OnlineComponent = () => {
    const handleRedirect = (name: string) => {
      navigate(`/players/${name}`);
    };

    return (
      <>
        {online?.nicknames?.map((item: string) => (
          <Chip
            key={item}
            sx={{
              border: "1px solid #40444E",
              borderRadius: "10px",
              margin: "2px",
            }}
            label={item}
            onClick={() => handleRedirect(item)}
            clickable
          />
        ))}
      </>
    );
  };

  return (
    <Box
      bgcolor={"secondary.main"}
      border={"1px solid #40444E"}
      sx={{
        fontWeight: "bold",
        borderRadius: "10px",
        paddingRight: "12px",
        paddingLeft: "12px",
      }}
    >
      <Typography variant="h5" textAlign="center" style={{ fontWeight: 1000 }}>
        Статистика
      </Typography>
      <Box
        sx={{
          position: "relative",
        }}
      >
        <LinearProgress
          style={{}}
          sx={{
            height: "30px",
            "& .MuiLinearProgress-colorPrimary": {
              backgroundColor: "#40444E",
            },
            "& .MuiLinearProgress-barColorPrimary": {
              backgroundColor: "#85DED6",
            },
            border: "1px solid #40444E",
          }}
          variant="buffer"
          value={online?.nicknames?.length || 0}
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
          Classic {online?.nicknames?.length}/100
        </Typography>
        <Box sx={{ marginTop: "5px", marginBottom: "20px" }}>
          {loading ? <CircularProgress /> : <OnlineComponent />}
        </Box>
      </Box>
    </Box>
  );
};
export default ServerStatistic;
