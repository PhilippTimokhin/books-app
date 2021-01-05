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

const SignIn = ({ handleSignIn, hasAccount, setHasAccount, enabled }) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Button
        type="submit"
        fullWidth
        style={enabled ? { backgroundColor: "#000", color: "#fff" } : null}
        variant="contained"
        onClick={handleSignIn}
        className={classes.submit}
        disabled={!enabled}
      >
        Sign In
      </Button>
      <Typography align="center">
        <Link
          style={{ color: "#000" }}
          href="#"
          variant="body2"
          onClick={() => setHasAccount(!hasAccount)}
        >
          {"Don't have an account? Sign Up?"}
        </Link>
      </Typography>
    </React.Fragment>
  );
};

export default SignIn;
