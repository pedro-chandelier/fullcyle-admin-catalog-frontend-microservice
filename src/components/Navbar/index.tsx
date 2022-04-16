import {
  AppBar,
  Button,
  Theme,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import { Box } from "@mui/system";

import logo from "../../static/logo.png";
import { Menu } from "./Menu";

const createStyles = (theme: Theme) => ({
  toolbar: {
    backgroundColor: "#000",
  },
  title: {
    flexGrow: 1,
    textAlign: "center",
  },
  logo: {
    width: 100,
    [theme.breakpoints.up("sm")]: {
      width: 170,
    },
  },
});

export const Navbar: React.FC = () => {
  const theme = useTheme();
  const styles = createStyles(theme);

  return (
    <AppBar>
      <Toolbar sx={styles.toolbar}>
        <Menu />
        <Typography sx={styles.title}>
          <Box component="img" sx={styles.logo} src={logo} alt="Codeflix" />
        </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  );
};
