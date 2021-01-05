import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AddButton from "../BooksList/Button/AddButton";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 400,
    margin: "0 auto",
    marginTop: 25,
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
  },
}));

const PaperForAddButton = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Paper component="form" className={classes.root}>
        <AddButton />
      </Paper>
    </React.Fragment>
  );
};

export default PaperForAddButton;
