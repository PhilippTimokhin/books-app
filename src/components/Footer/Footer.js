import React from "react";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";

const Footer = () => {
  return (
    <React.Fragment>
      <Typography
        style={{
          marginTop: "75px",
          fontSize: "10px",
          fontWeight: "bold",
          flex: "1",
        }}
        align="center"
      >
        Made with
        <IconButton>
          <FavoriteIcon style={{ color: "#000" }} />
        </IconButton>
        by Philipp Timokhin
      </Typography>
    </React.Fragment>
  );
};

export default Footer;
