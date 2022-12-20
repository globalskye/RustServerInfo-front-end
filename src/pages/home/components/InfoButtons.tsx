import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import { Typography } from "@mui/material";

const InfoButtons = () => {
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
      <Typography variant="h5" textAlign="center" style={{ fontWeight: 1000 }}>
        Информация
      </Typography>
      <Box>
        <Button variant="outlined" sx={{ width: "100%", height: "40px" }}>
          Скачать клиент
        </Button>
        <Button
          variant="outlined"
          sx={{ width: "100%", height: "40px", marginTop: "4px" }}
        >
          ПРАВИЛА
        </Button>
        <Button
          variant="outlined"
          sx={{ width: "100%", height: "40px", marginTop: "4px" }}
          href="https://vk.com/rustdark12"
        >
          VK
        </Button>
        <Button
          variant="outlined"
          sx={{ width: "100%", height: "40px", marginTop: "4px" }}
          href="https://discord.gg/anvrEnVcj9"
        >
          DISCORD
        </Button>
      </Box>
    </Box>
  );
};
export default InfoButtons;
