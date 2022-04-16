import { Link as RouterLink, useLocation } from "react-router-dom";

import { Container, Box } from "@mui/material";
import MuiBreadcrumbs from "@mui/material/Breadcrumbs";
import Link, { LinkProps } from "@mui/material/Link";
import Typography from "@mui/material/Typography";

import { routes } from "../routes";

const breadcrumbNameMap: { [key: string]: string } = {};
routes.forEach((route) => {
  breadcrumbNameMap[route.path as string] = route.label;
});

interface LinkRouterProps extends LinkProps {
  to: string;
  replace?: boolean;
}

const LinkRouter = (props: LinkRouterProps) => (
  <Link {...props} component={RouterLink as any} />
);

const styles = {
  breadcrumbItem: {
    color: "#4db5ab",
    '&:focus, &:active': {
      color: "#4db5ab"
    },
    '&:hover': {
      color: '#055a52'
    }
  },
};

export function Breadcrumbs() {
  const location = useLocation();

  function makeBreadcrumb() {
    const pathnames = location.pathname.split("/").filter((e) => e);
    pathnames.unshift("/");

    console.log("pathnames ==>", pathnames);

    return (
      <MuiBreadcrumbs aria-label="breadcrumb">
        {pathnames.map((_: string, index: number) => {
          const last = index === pathnames.length - 1;
          const to = `${pathnames.slice(0, index + 1).join("/")}`.replace(
            "//",
            "/"
          );

          return last ? (
            <Typography color="textPrimary" key={to}>
              {breadcrumbNameMap[to]}
            </Typography>
          ) : (
            <Box
              component={LinkRouter}
              sx={styles.breadcrumbItem}
              underline="hover"
              color="inherit"
              to={to}
              key={to}
            >
              {breadcrumbNameMap[to]}
            </Box>
          );
        })}
      </MuiBreadcrumbs>
    );
  }

  return <Container>{makeBreadcrumb()}</Container>;
}
