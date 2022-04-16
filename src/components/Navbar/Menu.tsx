import { IconButton, Menu as MuiMenu, MenuItem } from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import { useState } from "react";
import { routes } from "../../routes";
import { Link } from "react-router-dom";
import { MyRouteProps } from "../../routes/index";

const routesList = ["dashboard", "categories.list", "categories.create"];
const menuRoutes = routes.filter((route) => routesList.includes(route.name));

export const Menu: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  function handleOpen(ev: any): void {
    setAnchorEl(ev.currentTarget);
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
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        transformOrigin={{ vertical: "top", horizontal: "center" }}
      >
        {routesList.map((routeName) => {
          const route = menuRoutes.find(
            (r) => r.name === routeName
          ) as MyRouteProps;

          return (
            <MenuItem
              key={routeName}
              component={Link}
              to={route.path as string}
              onClick={handleClose}
            >
              {route.label}
            </MenuItem>
          );
        })}
      </MuiMenu>
    </>
  );
};
