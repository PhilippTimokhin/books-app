import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";

import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 400,
    margin: "0 auto",
    marginTop: 25,
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

const PaperForAddButton = ({ search, setSearch }) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Paper component="form" className={classes.root}>
        <IconButton
          type="submit"
          className={classes.iconButton}
          aria-label="search"
        >
          <SearchIcon />
        </IconButton>
        <Divider className={classes.divider} orientation="vertical" />
        <InputBase
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className={classes.input}
          placeholder="Search..."
          inputProps={{ "aria-label": "search..." }}
        />
      </Paper>
    </React.Fragment>
  );
};

export default PaperForAddButton;
