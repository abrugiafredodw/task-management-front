import {NavBar} from "./NavBar";
import Footer from "./Footer";
import { Box } from "@mui/material";

const Layout = ({ children }) => {
  return (
    <Box display="flex" flexDirection="column" minHeight="98vh">
      <header>
        <NavBar />
      </header>
      <Box component="main" flexGrow={1}>
        {children}
      </Box>
      <Footer />
    </Box>
  );
};

export { Layout };