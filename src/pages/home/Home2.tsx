import {
  Box,
  createMuiTheme,
  createStyles,
  createTheme,
  Grid,
  makeStyles,
  Theme,
  ThemeProvider,
  useMediaQuery,
} from "@mui/material";
import { useEffect, useState } from "react";




const Home2 = () => {
    const [background, setBackground] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = new Date().getTime() % 15000;
      const color1 = '#0000ff';
      const color2 = '#800080';
      const percent = currentTime / 15000;
      const color = `linear-gradient(to right, ${color1} ${percent * 100}%, ${color2} ${percent * 100}%)`;
      setBackground(color);
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return <div style={{ background }}>Content goes here</div>;
};
export default Home2;
