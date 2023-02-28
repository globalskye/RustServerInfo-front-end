import { CircularProgress } from "@mui/material";
import React from "react";

const Preloader: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        color:'white',
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <CircularProgress sx={{color:'white'}}/>
      
    </div>
  );
};

export default Preloader;
