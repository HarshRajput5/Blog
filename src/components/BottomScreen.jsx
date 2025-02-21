import { Box, Divider } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Button from '@mui/material/Button';
import SelectedListItem from "./List";

function BottomScreen() {
  return <Box component="footer" >
    {/* <Divider/> */}
    <Grid container spacing={2}>
        <Grid size={{ xs: 6, md: 8 }}>
        <Button variant="text">Text</Button>
        </Grid>
        <Grid size={{ xs: 6, md: 4 }}>
        <Button variant="text">Text</Button>
        </Grid>
        <Grid size={{ xs: 6, md: 4 }}>
        <Button variant="text">Text</Button>
        </Grid>
        <Grid size={{ xs: 6, md: 8 }}>
        <Button variant="text">Text</Button>
        </Grid>
      </Grid>
      <SelectedListItem/>
  </Box>;
}

export default BottomScreen;