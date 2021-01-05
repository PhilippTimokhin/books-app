import React, { useState, useEffect } from "react";
import Search from "../Search/Search";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import NotFound from "../NotFound/NotFound";

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
  cardContent: {
    flexGrow: 1,
  },
}));

const MyBooks = () => {
  const classes = useStyles();
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const get = await fetch(
          "https://run.mocky.io/v3/2cf7621b-76ad-4083-a1f0-6336b01bbdef"
        );
        const data = await get.json();
        setData(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const filteredList = data.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <React.Fragment>
      <Search search={search} setSearch={setSearch} />
      <Grid container spacing={4}>
        {filteredList.map((card) => (
          <Grid item key={card.id} xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardHeader title={card.name} subheader={card.subName} />
              <CardMedia
                style={{ filter: "grayscale(100%)" }}
                component="img"
                image={card.image}
              />
              <CardContent className={classes.cardContent}>
                <Box mt={2}>
                  <Typography
                    align="center"
                    variant="body2"
                    color="textSecondary"
                    component="h2"
                  >
                    Автор: {card.author}
                  </Typography>
                </Box>
                <Box mt={4}>
                  <Typography
                    variant="subtitle2"
                    style={{ textAlign: "justify" }}
                    color="textSecondary"
                    component="h2"
                  >
                    {card.description}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
        {filteredList.length === 0 && <NotFound />}
      </Grid>
    </React.Fragment>
  );
};

export default MyBooks;
