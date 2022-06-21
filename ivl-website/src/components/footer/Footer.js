import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import "./Footer.css";

function Footer() {
  return (
    <div>
      <AppBar position="static" sx={{ bgcolor: "#605770" }}>
        <Container>
          <Toolbar disableGutters>
            <Box
              noWrap
              component="div"
              sx={{
                display: { xs: "none", md: "flex" },
                width: "auto",
                height: "auto",
                ml: 1,
                mr: 1,
              }}
            >
              <Typography
                variant="body1"
                noWrap
                component="div"
                sx={{ flexGrow: 1 }}
              >
                This website was last updated on: 2020-06-01
              </Typography>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

export default Footer;
