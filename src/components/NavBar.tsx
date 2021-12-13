import { AppBar, Toolbar, Typography } from "@mui/material";

function NavBar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h4">To Dos</Typography>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
