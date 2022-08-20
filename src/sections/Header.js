import React from "react";
import Box from "@mui/material/Box";
import NavBar from "../components/NavBar";
import HeaderImage from "../components/HeaderImage";

function Header({ activeTab }) {
  return (
    <Box>
      <NavBar activeTab={activeTab} />
      <HeaderImage />
    </Box>
  );
}

export default Header;
