import { AppBar } from "@mui/material";
import { useState } from "react";

const pages = ["Task", "Ingresar", "Registrarse"];

const NavBar = () => {
  const [anchorElNav, setAnchoElNav] = useState(null);
  const [anchorElUser, setAnchoElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return(
    <AppBar position="static">

    </AppBar>
  )

};
