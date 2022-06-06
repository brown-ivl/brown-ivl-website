import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";

import Pages from "../../md/navbar/Pages.md";
import Images from "../../json/nav/Images.json";
import "./MainNav.css";

const MainNav = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  // const [anchorElUser, setAnchorElUser] = useState(null);
  const navigate = useNavigate();

  // state for markdown content
  const [pages, setPages] = useState([]);

  // event handlers for menu
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  // const handleOpenUserMenu = (event) => {
  //   setAnchorElUser(event.currentTarget);
  // };

  const handleCloseNavMenu = (event) => {
    setAnchorElNav(null);

    // get page name from menu item
    const pageName = event.currentTarget.innerText.toLowerCase();

    if (pageName === "home") {
      window.location.href = "/";
    } else {
      window.location.href = `/${pageName}`;
    }
  };

  // const handleCloseUserMenu = () => {
  //   setAnchorElUser(null);
  // };

  // fetch markdown content
  useEffect(() => {
    fetch(Pages)
      .then((res) => res.text())
      .then((text) => setPages(text.split("\n")));
  }, []);

  return (
    <AppBar position="static" sx={{ bgcolor: "#605770" }}>
      <Container>
        <Toolbar disableGutters>
          <Box
            noWrap
            component="div"
            sx={{
              display: { xs: "none", md: "flex" },
              width: "60px",
              height: "60px",
              ml: 1,
              mr: 1,
            }}
          >
            <img
              className="brown-logo"
              src={Images.filter((image) => image.name === "logo")[0].path}
              alt={Images.filter((image) => image.name === "logo")[0].alt}
              onClick={() => navigate("/")}
            />
          </Box>

          {/* Menu items in compressed view */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            <Box
              noWrap
              component="div"
              sx={{
                display: { md: "flex" },
                width: "60px",
                height: "60px",
                ml: 0,
                mr: 1,
              }}
            >
              <img
                className="brown-logo"
                src={Images.filter((image) => image.name === "logo")[0].path}
                alt={Images.filter((image) => image.name === "logo")[0].alt}
                onClick={() => navigate("/")}
              />
            </Box>
          </Typography>

          {/* Menu items in default view */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  ml: 1,
                  fontSize: "1rem",
                }}
              >
                {page}
              </Button>
            ))}
          </Box>

          {/* <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box> */}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default MainNav;
