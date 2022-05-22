import { Outlet } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import { Container } from "@mui/system";

export const Layout = () => {
  return (
    <>
      <header>
        <AppBar position="sticky" sx={{ bgcolor: "black", mb: 4 }}>
          <Toolbar>
            <Typography sx={{ fontSize: 54 }}>CLUB</Typography>{" "}
          </Toolbar>
        </AppBar>
      </header>
      <Container
        sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        <main>
          <Outlet />
        </main>
      </Container>
      <footer></footer>
    </>
  );
};
