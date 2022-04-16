import { Navbar } from "./components/Navbar";
import { Box } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./routes/AppRouter";

function App() {
  return (
    <BrowserRouter>
      <Navbar />;
      <Box pt="70px">
        <AppRouter />
      </Box>
    </BrowserRouter>
  );
}

export default App;
