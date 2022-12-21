import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const InfoButtons = () => {
  const navigate = useNavigate();

  const handleRedirect = (name: string) => {
    window.location.href = `name`;
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
      <Box>
        <Button
          variant="text"
          sx={{
            width: "100%",
            height: "40px",
            marginTop: "4px",
            fontSize: "20px",
            color: "blue",
            fontWeight: "bold",
          }}
          href="https://hostfun.ru/RustLegacy_Setup.exe"
        >
          Скачать клиент
        </Button>
        <Button
          variant="text"
          sx={{
            width: "100%",
            height: "40px",
            marginTop: "4px",
            fontSize: "20px",
            color: "blue",
            fontWeight: "bold",
          }}
          onClick={()=>navigate("/rules")}
        >
          ПРАВИЛА
        </Button>
        <Button
          variant="text"
          sx={{
            width: "100%",
            height: "40px",
            marginTop: "4px",
            fontSize: "20px",
            color: "blue",
            fontWeight: "bold",
          }}
          href="https://vk.com/rustdark12"
        >
          VK
        </Button>
        <Button
          variant="text"
          sx={{
            width: "100%",
            height: "40px",
            marginTop: "4px",
            fontSize: "20px",
            color: "blue",
            fontWeight: "bold",
          }}
          href="https://discord.gg/anvrEnVcj9"
        >
          DISCORD
        </Button>
      </Box>
    </Box>
  );
};
export default InfoButtons;
