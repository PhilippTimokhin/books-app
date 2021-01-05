import React, { useState } from "react";
import SignIn from "./Button/SignIn";
import SignUp from "./Button/SignUp";
import Avatar from "@material-ui/core/Avatar";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import GitHubIcon from "@material-ui/icons/GitHub";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import InputAdornment from "@material-ui/core/InputAdornment";
import EmailIcon from "@material-ui/icons/Email";
import LockIcon from "@material-ui/icons/Lock";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "#000",
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  notchedOutline: {
    borderColor: "#000 !important",
  },
}));

const Login = ({
  enabled,
  handleSignIn,
  handleSignUp,
  email,
  setEmail,
  emailError,
  password,
  setPassword,
  passwordError,
}) => {
  const classes = useStyles();
  const [hasAccount, setHasAccount] = useState(false);
  return (
    <React.Fragment>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <GitHubIcon />
          </Avatar>
          {hasAccount ? (
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
          ) : (
            <Typography component="h1" variant="h5">
              Sign Up
            </Typography>
          )}

          <form className={classes.form} noValidate>
            <TextField
              value={email}
              error={!!emailError}
              helperText={emailError}
              onChange={(e) => setEmail(e.target.value)}
              variant="outlined"
              margin="normal"
              fullWidth
              id="email"
              label="Email Address"
              placeholder="Please, press your Emai Adress"
              name="email"
              autoComplete="email"
              autoFocus
              InputProps={{
                classes: {
                  notchedOutline: classes.notchedOutline,
                },
                endAdornment: (
                  <InputAdornment position="end">
                    <EmailIcon />
                  </InputAdornment>
                ),
              }}
              InputLabelProps={{
                style: { color: "#000" },
              }}
            />
            <TextField
              value={password}
              error={!!passwordError}
              helperText={passwordError}
              onChange={(e) => setPassword(e.target.value)}
              variant="outlined"
              margin="normal"
              placeholder="Please, press your paswword"
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              InputProps={{
                classes: {
                  notchedOutline: classes.notchedOutline,
                },
                endAdornment: (
                  <InputAdornment position="end">
                    <LockIcon />
                  </InputAdornment>
                ),
              }}
              InputLabelProps={{
                style: { color: "#000" },
              }}
            />
            {hasAccount ? (
              <SignIn
                handleSignIn={handleSignIn}
                hasAccount={hasAccount}
                setHasAccount={setHasAccount}
                enabled={enabled}
              />
            ) : (
              <SignUp
                handleSignUp={handleSignUp}
                hasAccount={hasAccount}
                setHasAccount={setHasAccount}
                enabled={enabled}
              />
            )}
          </form>
        </div>
      </Container>
    </React.Fragment>
  );
};

export default Login;
