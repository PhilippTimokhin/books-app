import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import img from "../NotFound/nike.jpg";

const useStyles = makeStyles((theme) => ({
  card: {
    margin: theme.spacing(4),
    height: "100%",
    display: "flex",
    flexDirection: "column",
    transition: "0.3s",
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
    "&:hover": {
      boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)",
    },
  },
}));

export default function NotFound() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Grid container justify="center">
        <Grid item xs={12} sm={6} md={12}>
          <Card className={classes.card}>
            <CardHeader
              title="Nothing was found for your search..."
              subheader="Find you greatness"
            />
            <CardMedia
              style={{ filter: "grayscale(100%)" }}
              component="img"
              image={img}
            />
          </Card>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
