import React, { useState } from "react";
import EditButton from "../Books/Button/EditButton";
import DeleteButton from "../Books/Button/DeleteButton";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import AccountCircle from "@material-ui/icons/AccountCircle";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import CodeIcon from "@material-ui/icons/Code";
import ScheduleIcon from "@material-ui/icons/Schedule";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  card: {
    margin: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    transition: "0.3s",
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
    "&:hover": {
      boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)",
    },
  },
  cardContent: {
    flexGrow: 1,
  },
}));

const Books = ({ book }) => {
  const classes = useStyles();

  const [name, setName] = useState(book.name);
  const [author, setAuthor] = useState(book.author);
  const [year, setYear] = useState(book.year);
  const [ISBN, setISBN] = useState(book.ISBN);

  return (
    <React.Fragment>
      <Grid container justify="center">
        <Grid item xs={12} sm={6} md={6}>
          <Card className={classes.card}>
            <CardContent className={classes.cardContent}>
              <Box mt={2}>
                <TextField
                  fullWidth
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  id="input-with-icon-textfield"
                  label="Name of book"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <MenuBookIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
              <Box mt={2}>
                <TextField
                  fullWidth
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  id="input-with-icon-textfield"
                  label="Author of book"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AccountCircle />
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
              <Box mt={2}>
                <TextField
                  fullWidth
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                  id="input-with-icon-textfield"
                  label="Year of book"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <ScheduleIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
              <Box mt={2}>
                <TextField
                  fullWidth
                  value={ISBN}
                  onChange={(e) => setISBN(e.target.value)}
                  id="input-with-icon-textfield"
                  label="ISBN of book"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <CodeIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
              <Box mt={2}>
                <DeleteButton book={book} />
                <EditButton
                  book={book}
                  name={name}
                  author={author}
                  year={year}
                  ISBN={ISBN}
                />
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Books;
