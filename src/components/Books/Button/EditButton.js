import React from "react";
import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";
import fire from "../../../fire";

const EditButton = ({ book, name, author, year, ISBN }) => {
  const handleOnUpdate = async () => {
    try {
      const db = fire.firestore();
      await db
        .collection("books")
        .doc(book.id)
        .set({ ...book, name, author, year, ISBN })
        .then(function () {
          alert("Item changed successfully! Refresh your page, please!");
        });
    } catch (error) {
      console.error("Error updating item", error);
    }
  };

  return (
    <React.Fragment>
      <Tooltip title="Редакировать?">
        <Button
          variant="contained"
          onClick={handleOnUpdate}
          style={{
            backgroundColor: "#000",
            color: "#fff",
            margin: 10,
          }}
        >
          Edit
        </Button>
      </Tooltip>
    </React.Fragment>
  );
};

export default EditButton;
