import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const InfoButtons = () => {
  const navigate = useNavigate();

  
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
      <Box>
        <Button
          variant="text"
          sx={{
            width: "100%",
            height: "40px",
            marginTop: "4px",

            color: "blue",
          }}
          href="https://hostfun.ru/RustLegacy_Setup.exe"
        >
          <Typography variant="h5">СКАЧАТЬ КЛИЕНТ</Typography>
        </Button>
        <Button
          variant="text"
          sx={{
            width: "100%",
            height: "40px",
            marginTop: "4px",

            color: "blue",
          }}
          onClick={() => navigate("/rules")}
        >
          
          <Typography variant="h5">ПРАВИЛА</Typography>
        </Button>
        <Button
          variant="text"
          sx={{
            width: "100%",
            height: "40px",
            marginTop: "4px",
            color: "blue",
          }}
          href="https://vk.com/rustdark12"
        >
          <Typography variant="h5">ПОМОЩЬ СО ВХОДОМ</Typography>
        </Button>
        
        <Button
          variant="text"
          sx={{
            width: "100%",
            height: "40px",
            marginTop: "4px",
            color: "blue",
          }}
          href="https://vk.com/rustdark12"
        >
          <Typography variant="h5">VK</Typography>
        </Button>
        <Button
          variant="text"
          sx={{
            width: "100%",
            height: "40px",
            marginTop: "4px",
            color: "blue",
          }}
          href="https://discord.gg/anvrEnVcj9"
        >
          <Typography variant="h5">DISCORD</Typography>
        </Button>
      </Box>
    </Box>
  );
};
export default InfoButtons;
