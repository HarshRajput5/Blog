import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import Button from "@mui/material/Button";
import Typography from '@mui/material/Typography'
import { ListItem } from "@mui/material";

export default function SelectedListItem({ title, items }) {
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <Box sx={{ width: "100%", maxWidth: 360 }}>
      <Typography variant="body1" color="initial" sx={{color:"darkslategray",mb:2}}>
        {title}
      </Typography>
      <List component="nav" aria-label="secondary mailbox folder">
        {items.map((item) => (
          <ListItem sx={{p:0}}>
          <Button key={item} variant="text" sx={{ color: "black",textTransform: "none" }}>
            {item}
          </Button>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
