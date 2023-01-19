import React from "react";
import ReactDOM from "react-dom/client";
// import './index.css';
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import Snowfall from "react-snowfall";

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
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
