import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import { Box, Toolbar } from "@mui/material";
import { Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";

const navs = ["Home", "About", "Services", "Gallery", "Contact Us"];

function NavBar(props) {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const activeTab = props.activeTab;

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" sx={{ bgcolor: "#FFF" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ mx: 4 }}>
            <Typography variant="h3" color="black">
              Logo
            </Typography>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none", justifyContent: "flex-end" },
            }}
          >
            <IconButton onClick={handleOpenNavMenu}>
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
              {navs.map((nav) => (
                <MenuItem
                  key={nav}
                  onClick={handleCloseNavMenu}
                  sx={{
                    bgcolor: activeTab === nav ? "#FF9100" : "",
                    "&:hover": {
                      bgcolor: "orange",
                    },
                  }}
                >
                  <Typography
                    variant="subtitle 2"
                    component="div"
                    textAlign="center"
                    sx={{ fontWeight: "bold" }}
                  >
                    {nav}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex", justifyContent: "flex-end" },
            }}
          >
            {navs.map((nav) => (
              <Box
                key={nav}
                variant="text"
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  display: "block",
                  px: 3,
                  bgcolor: activeTab === nav ? "#FF9100" : "",
                  "&:hover": {
                    bgcolor: "yellow",
                  },
                  cursor: "pointer",
                  borderRadius: 3,
                }}
              >
                <Typography
                  variant="h6"
                  component="div"
                  textAlign="center"
                  color="black"
                >
                  {nav}
                </Typography>
              </Box>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default NavBar;
