import { useState } from "react";
import DrawerAppBar from "./components/AppBar";
import { Box, Container } from "@mui/material";
import BottomScreen from "./components/BottomScreen";

function App() {
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
        <Container component="main" sx={{ flexGrow: 1, py: 4 }}>
          <h1>Welcome to My Website</h1>
          <p>This is the main content.</p>
        </Container>
        <BottomScreen />
      </Box>
    </>
  );
}

export default App;
