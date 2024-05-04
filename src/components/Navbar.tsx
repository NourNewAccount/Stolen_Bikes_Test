import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  ListItemIcon,
  SvgIcon,
  Link,
} from "@mui/material";
import DirectionsBikeIcon from "@material-ui/icons/DirectionsBike";
const Navbar: React.FC = () => {
  return (
    <AppBar
      position="fixed"
      sx={{
        borderRadius: "15px",
        padding: "8px 15px",
        width: "98%",
        marginTop: "10px",
        right: "1%",
      }}
    >
      <Toolbar>
        <Link href="/">
        <ListItemIcon>
          <SvgIcon sx={{ color: "white" , fontSize: '3.5rem' }} component={DirectionsBikeIcon} />
        </ListItemIcon>
        </Link>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 , fontSize: '1.5rem' }}>
          Stolen Bikes App
        </Typography>
        
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
