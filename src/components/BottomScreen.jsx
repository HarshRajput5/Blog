import { Box, Divider, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Button from "@mui/material/Button";
import SelectedListItem from "./List";

function BottomScreen() {

  const company = ['Features', 'Pricing', 'Affiliate Program', 'Press Kit']
  const support = ['Account', 'Help', 'Contact Us', 'Customer Support']
  const legals = ['Terms & Conditions', 'Privacy Policy', 'Licensing']

  return (
    <Box component="footer" sx={{ display: {
      xs: 'bloc',
      md: 'flex',
    } }}>
      {/* <Divider/> */}
      <Box sx={{ flex: 1, p: 2, display:"flex",flexDirection:"column", justifyContent:"space-between" }} component="footer">
        <Typography variant="h5">
          Blog
        </Typography>
        <Typography variant="body2">
          © {new Date().getFullYear()} My Website. Follow us.
        </Typography>
      </Box>
      <Box sx={{ flex: 1, p: 2, display:"flex",flexDirection:{
        xs:"column",
        sm:"row"
      }
      }}>
        <SelectedListItem items={company} title={"COMPANY"}/>
        <SelectedListItem items={support} title={"SUPPORT"}/>
        <SelectedListItem items={legals} title={"LEGALS"}/>
      </Box>
    </Box>
  );
}

export default BottomScreen;
