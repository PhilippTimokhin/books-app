import React, { useState } from "react";
import fire from "../../fire";
import Avatar from "@material-ui/core/Avatar";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import InputAdornment from "@material-ui/core/InputAdornment";
import EditIcon from "@material-ui/icons/Edit";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";

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

const BooksForm = () => {
  const classes = useStyles();

  const [newName, setNewName] = useState("");
  const [newAuthor, setNewAuthor] = useState("");
  const [newYear, setNewYear] = useState("");
  const [newISBN, setNewISBN] = useState("");

  const clearInputs = () => {
    setNewName("");
    setNewAuthor("");
    setNewYear("");
    setNewISBN("");
  };

  const onCreate = () => {
    clearInputs();
    try {
      const db = fire.firestore();
      db.collection("books").add({
        name: newName,
        author: newAuthor,
        year: newYear,
        ISBN: newISBN,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const enabled =
    newName.length > 0 &&
    newAuthor.length > 0 &&
    newYear.length > 0 &&
    newISBN.length > 0;

  return (
    <React.Fragment>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LibraryBooksIcon />
          </Avatar>

          <Typography component="h1" variant="h5">
            Do u want to add the book?
          </Typography>

          <TextField
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            variant="outlined"
            margin="normal"
            fullWidth
            id="name"
            label="Name of book"
            placeholder="Please, press your name of book"
            name="name"
            autoFocus
            InputProps={{
              classes: {
                notchedOutline: classes.notchedOutline,
              },
              endAdornment: (
                <InputAdornment position="end">
                  <EditIcon />
                </InputAdornment>
              ),
            }}
            InputLabelProps={{
              style: { color: "#000" },
            }}
          />
          <TextField
            value={newAuthor}
            onChange={(e) => setNewAuthor(e.target.value)}
            variant="outlined"
            margin="normal"
            placeholder="Please, press your author of book"
            fullWidth
            name="author"
            label="Author of book"
            id="author"
            InputProps={{
              classes: {
                notchedOutline: classes.notchedOutline,
              },
              endAdornment: (
                <InputAdornment position="end">
                  <EditIcon />
                </InputAdornment>
              ),
            }}
            InputLabelProps={{
              style: { color: "#000" },
            }}
          />
          <TextField
            value={newYear}
            onChange={(e) => setNewYear(e.target.value)}
            variant="outlined"
            margin="normal"
            fullWidth
            id="year"
            label="Year of book"
            placeholder="Please, press your year of book"
            name="year"
            autoFocus
            InputProps={{
              classes: {
                notchedOutline: classes.notchedOutline,
              },
              endAdornment: (
                <InputAdornment position="end">
                  <EditIcon />
                </InputAdornment>
              ),
            }}
            InputLabelProps={{
              style: { color: "#000" },
            }}
          />
          <TextField
            value={newISBN}
            onChange={(e) => setNewISBN(e.target.value)}
            variant="outlined"
            margin="normal"
            placeholder="Please, press your ISBN of book"
            fullWidth
            name="isbn"
            label="ISBN of book"
            id="isbn"
            InputProps={{
              classes: {
                notchedOutline: classes.notchedOutline,
              },
              endAdornment: (
                <InputAdornment position="end">
                  <EditIcon />
                </InputAdornment>
              ),
            }}
            InputLabelProps={{
              style: { color: "#000" },
            }}
          />
          <Box mt={2}>
            <Button
              disabled={!enabled}
              type="submit"
              fullWidth
              style={
                enabled ? { backgroundColor: "#000", color: "#fff" } : null
              }
              variant="contained"
              onClick={onCreate}
              className={classes.submit}
            >
              Send
            </Button>
          </Box>
          <Box mt={2}>
            <Typography>
              <Link style={{ color: "#000" }} href="/" variant="body2">
                {"You want to return to the main page?"}
              </Link>
            </Typography>
          </Box>
        </div>
      </Container>
    </React.Fragment>
  );
};

export default BooksForm;
