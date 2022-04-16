import { IconButton, Menu as MuiMenu, MenuItem } from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import { useState } from "react";

export const Menu: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  function handleOpen(ev: any): void {
    setAnchorEl(ev);
  }

  function handleClose(): void {
    setAnchorEl(null);
  }

  return (
    <>
      <IconButton
        onClick={handleOpen}
        color="inherit"
        edge="start"
        aria-label="open drawer"
        aria-controls="menu-appbar"
        aria-haspopup="true"
      >
        <MenuIcon />
      </IconButton>
      <MuiMenu
        id="menu-appbar"
        open={!!anchorEl}
        onClose={handleClose}
        anchorEl={anchorEl}
      >
        <MenuItem>Categories</MenuItem>
      </MuiMenu>
    </>
  );
};
