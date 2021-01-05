import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import image from "../About/image/iam.jpg";

const About = () => {
  return (
    <React.Fragment>
      <Card
        style={{
          maxWidth: 800,
          margin: "0 auto",
          marginTop: 50,
          boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
        }}
      >
        <CardActionArea>
          <CardMedia
            style={{ height: 600 }}
            image={image}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Who am I ?
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Hello everybody... Hmm, let me introduce myself.. My name is
              Philipp Timokhin and i'm 27 years old.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </React.Fragment>
  );
};

export default About;
