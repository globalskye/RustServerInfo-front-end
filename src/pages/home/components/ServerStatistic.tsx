import { useEffect, useState } from "react";

import Box from "@mui/material/Box";

import { Chip, Typography } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import { LinearProgress } from "@mui/material";
import { getOnline } from "../../../service";
import { Online, User } from "../../../types/user";
import { useNavigate } from "react-router-dom";
import { isTemplateLiteral } from "typescript";

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
      navigate(`/users/${name}`);
    };

    return (
      <>
        {online?.users?.map((item: string) => (
          <Chip
            key={item}
            sx={{ borderRadius: "5px", margin: "2px" }}
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
      bgcolor="#60EFE7"
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
          sx={{ height: "30px" }}
          variant="buffer"
          value={online?.users?.length || 0}
          valueBuffer={100}
        />

        <Typography
          style={{
            position: "absolute",
            color: "black",
            top: 0,
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          Classic {online?.users?.length}/100
        </Typography>
        <Box sx={{ marginTop: "5px", marginBottom: "20px" }}>
          {loading ? <CircularProgress /> : <OnlineComponent />}
        </Box>
      </Box>
    </Box>
  );
};
export default ServerStatistic;
