import React from "react";
import { Route, Switch } from "react-router-dom";
import BooksList from "../BooksList/BooksList";
import MyBooks from "../MyFavoriteBooks/MyBooks";
import About from "../About/About";
import BooksForm from "../BooksForm/BooksForm";

const Pages = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/" component={BooksList} />
        <Route path="/books" component={MyBooks} />
        <Route path="/about" component={About} />
        <Route path="/form" component={BooksForm} />
      </Switch>
    </React.Fragment>
  );
};

export default Pages;
