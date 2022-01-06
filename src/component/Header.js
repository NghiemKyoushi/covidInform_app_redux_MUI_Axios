import * as React from "react";
import AppBar from "@mui/material/AppBar";
import { Link } from "react-router-dom";

import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
export default function Header() {
  return (
    <AppBar position="static" color="secondary">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          {/* <MenuIcon /> */}
          <Link to ="/">
            
            <ArrowBackIcon />
          </Link>
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          COVID-19
        </Typography>
        {/* <Button color="inherit">Login</Button> */}
      </Toolbar>
    </AppBar>
  );
}
