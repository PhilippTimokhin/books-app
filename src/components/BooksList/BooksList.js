import React, { useState, useEffect } from "react";
import Books from "../Books/Books";
import AddButton from "../Paper/PaperForAddButton";

import fire from "../../fire";

const BooksList = () => {
  const [book, setBook] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const db = fire.firestore();
        const data = await db.collection("books").get();
        setBook(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <React.Fragment>
      <AddButton />
      {book.map((book) => (
        <Books key={book.id} book={book} />
      ))}
    </React.Fragment>
  );
};

export default BooksList;
