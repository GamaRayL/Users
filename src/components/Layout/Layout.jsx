import { Outlet } from "react-router-dom";
import AppToolBar from "components/Surfaces/AppToolBar";

export const Layout = () => {
  return (
    <>
      <header>
        <AppToolBar />
      </header>
      <main style={{ display: "flex", flexDirection: "column", margin: 60 }}>
        <Outlet />
      </main>
      <footer></footer>
    </>
  );
};
