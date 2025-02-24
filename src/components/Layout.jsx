import { useState } from "react";
import DrawerAppBar from "./AppBar";
import { Box, Container, Divider } from "@mui/material";
import BottomScreen from "./BottomScreen";
import Home from "./Home";
import { Outlet } from "react-router-dom";

function Layout() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "lightgray",
          minHeight: "100vh",
          minWidth: "100vw",
        }}
      >
        <DrawerAppBar />
        <Outlet/>
        <Divider sx={{backgroundColor: "black"}}/>
        <BottomScreen />
      </Box>
    </>
  );
}

export default Layout;
