import React from "react";
import ReactDOM from "react-dom/client";
// import './index.css';
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import Snowfall from "react-snowfall";
import customFont from "./fonts/Lobster-Regular.ttf";

const snowflake1 = document.createElement('img')
snowflake1.src = '/assets/snow1.png'
const snowflake2 = document.createElement('img')
snowflake2.src = '/assets/snow2.png'

const images = [snowflake1, snowflake2]

const theme = createTheme({
  palette: {
    background: {
      default: "#00030c",
    },
  },

  typography: {
    h5: {
      fontWeight: "bold",
      fontFamily: "monospace",
    },
    body1: {
      fontFamily: "monospace",
    },
  },
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ThemeProvider theme={theme}>
    <Snowfall
    images={images}
      style={{
        zIndex: 1,
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
      snowflakeCount={300} // number of snowflakes
      wind={[0.5, 10]} // wind speed
      // maximum number of snowflakes
      // whether to show shadows
      color="#FFF" // snowflake color
    />
    <CssBaseline />
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
