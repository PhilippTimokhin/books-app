import React from "react";
import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";
import { Link } from "react-router-dom";
import PlusOneIcon from "@material-ui/icons/PlusOne";

const AddButton = () => {
  return (
    <React.Fragment>
      <Link to="/form">
        <Tooltip title="Хотите добавить книгу?">
          <Button
            style={{ backgroundColor: "#000", color: "#fff", width: 400 }}
            startIcon={<PlusOneIcon />}
          >
            Add book
          </Button>
        </Tooltip>
      </Link>
    </React.Fragment>
  );
};

export default AddButton;
