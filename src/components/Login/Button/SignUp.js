import React from "react";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const SignUp = ({ handleSignUp, hasAccount, setHasAccount, enabled }) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Button
        type="submit"
        style={enabled ? { backgroundColor: "#000", color: "#fff" } : null}
        fullWidth
        variant="contained"
        onClick={handleSignUp}
        className={classes.submit}
        disabled={!enabled}
      >
        Sign Up
      </Button>
      <Typography align="center">
        <Link
          style={{ color: "#000" }}
          href="#"
          variant="body2"
          onClick={() => setHasAccount(!hasAccount)}
        >
          {"Do you have an account? Sign In?"}
        </Link>
      </Typography>
    </React.Fragment>
  );
};

export default SignUp;
