import { useState } from "react";
import DrawerAppBar from "./components/AppBar";
import { Box, Container, Divider } from "@mui/material";
import BottomScreen from "./components/BottomScreen";
import Home from "./components/Home";
import { Link, Route, Router, Routes } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Layout from "./components/Layout";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
      </Route>
    </Routes>
  );
}

export default App;
