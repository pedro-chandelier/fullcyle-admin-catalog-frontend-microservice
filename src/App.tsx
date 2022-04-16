import { Navbar } from "./components/Navbar";
import { Box } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./routes/AppRouter";
import { Breadcrumbs } from "./components/Breadcrumbs";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />;
        <Box pt="70px">
          <Breadcrumbs />
          <AppRouter />
        </Box>
      </BrowserRouter>
    </>
  );
}

export default App;
