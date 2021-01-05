import React from "react";
import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";
import fire from "../../../fire";

const DeleteButton = ({ book }) => {
  const handleOnDelete = async () => {
    try {
      const db = fire.firestore();
      await db
        .collection("books")
        .doc(book.id)
        .delete()
        .then(function () {
          alert("Item deleted successfully!Refresh your page, please");
        });
    } catch (error) {
      console.error("Error deleting item", error);
    }
  };

  return (
    <React.Fragment>
      <Tooltip title="Удалить?">
        <Button
          variant="contained"
          onClick={handleOnDelete}
          style={{ backgroundColor: "#000", color: "#fff" }}
        >
          Delete
        </Button>
      </Tooltip>
    </React.Fragment>
  );
};

export default DeleteButton;
