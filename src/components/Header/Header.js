import React from "react";
import SignOut from "./Button/SignOut";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Tooltip from "@material-ui/core/Tooltip";
import GitHubIcon from "@material-ui/icons/GitHub";
import { Link } from "react-router-dom";

const Header = ({ handleSignOut }) => {
  return (
    <React.Fragment>
      <AppBar position="static" style={{ backgroundColor: "#000" }}>
        <Toolbar>
          <Grid container justify="space-between" alignItems="center">
            <Grid item>
              <IconButton edge="start" color="inherit" aria-label="menu">
                <GitHubIcon fontSize="large" />
              </IconButton>
            </Grid>
            <Grid item>
              <Tooltip title="Каталог книг">
                <Link to="/" style={{ textDecoration: "none", color: "#FFF" }}>
                  <Typography variant="h6">Catalog</Typography>
                </Link>
              </Tooltip>
            </Grid>
            <Grid item>
              <Tooltip title="Список книг">
                <Link
                  to="/books"
                  style={{ textDecoration: "none", color: "#FFF" }}
                >
                  <Typography variant="h6">Books</Typography>
                </Link>
              </Tooltip>
            </Grid>
            <Grid item>
              <Tooltip title="Обо мне">
                <Link
                  to="about"
                  style={{ textDecoration: "none", color: "#FFF" }}
                >
                  <Typography variant="h6">About me</Typography>
                </Link>
              </Tooltip>
            </Grid>
            <Grid item>
              <SignOut handleSignOut={handleSignOut} />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Header;
