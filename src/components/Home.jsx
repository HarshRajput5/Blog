import { useState } from "react";
import DrawerAppBar from "./AppBar";
import { Box, Container, Divider } from "@mui/material";
import BottomScreen from "./BottomScreen";

function Home() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "lightgray",
          // minHeight: "100vh",
          // minWidth: "100vw",
        }}
      > */}
        <Container component="main" sx={{ flexGrow: 1, pt: 10 }}>
          <h1>Welcome to My Website</h1>
          <p>This is the main content.</p>
        </Container>
        
      {/* </Box> */}
    </>
  );
}

export default Home;
