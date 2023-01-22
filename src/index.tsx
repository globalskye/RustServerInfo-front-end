import React from "react";
import ReactDOM from "react-dom/client";
// import './index.css';
import {
  createTheme,
  CssBaseline,
  ThemeProvider
} from "@mui/material";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const theme = createTheme({
  palette: {
    primary: {
      main: "#212429",
    },
    secondary: {
      main: "#1F2026",
    },
    text: { 
      primary:'#FFFFFF',
      secondary:'#85DED6'
    },
    warning: {
      main: "#85DED6",
    },
    background: {
      default: '#212429',
      paper: '1F2026',
    }

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
