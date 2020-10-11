import React, { useEffect } from "react";
import ListBook from "./listBook";
import { connect } from "react-redux";
import { compose } from "redux";
import { deleteBook, getBook } from "../../redux/bookThunk";

const ListBookContainer = ({ getBook, deleteBook, books, filterWord }) => {
  useEffect(() => {
    getBook();
  }, [getBook]);

  if (!books) {
    return <div>No Books</div>;
  }
  let filterBooks = books
    .reverse()
    .filter((item) => ~item.name.indexOf(filterWord));

  return <ListBook books={filterBooks} deleteBook={deleteBook} />;
};

let mapStateToProps = (state) => {
  return {
    books: state.books.books,
    filterWord: state.books.filterWord,
  };
};

export default compose(
  connect(mapStateToProps, { getBook, deleteBook })(ListBookContainer)
);
