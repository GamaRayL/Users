import { AppBar, Typography, Toolbar } from "@mui/material";

const AppToolBar = () => {
  return (
    <AppBar position="sticky" sx={{ bgcolor: "black", mb: 4 }}>
      <Toolbar>
        <img width={80} height={80} src="assets/group.svg" alt="" srcset="" />
        <Typography sx={{ fontSize: 28 }}>USERS CLUB</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default AppToolBar;
