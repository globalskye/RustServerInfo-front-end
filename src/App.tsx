import React from "react";
import logo from "./logo.svg";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./router";
import { ThemeProvider, createTheme } from "@mui/material";

function App() {
  return (
      
      <RouterProvider router={router}></RouterProvider>
   
  );
}

export default App;
