import { Outlet } from "react-router-dom";
import { AppBar, Typography, Toolbar } from "@mui/material";

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
      <main style={{ display: "flex", flexDirection: "column", margin: 60 }}>
        <Outlet />
      </main>
      <footer></footer>
    </>
  );
};
