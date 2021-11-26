import React, { useEffect } from "react";
import { useAction } from "../hooks/useAction";
import { useTypedSelector } from "../hooks/useTypedSelector";
import BookCard from "./BookCard";

const BookList = () => {
  const { books, error, loading } = useTypedSelector(state => state.books);
  const { fetchBook } = useAction();

  useEffect(() => {
    // fetchBook();
  }, []);

  return (
    <div style={{ display: "flex", flexWrap: "wrap", flexGrow: 1 }} >
      {
        books.map(book => <BookCard key={book.id} data={book} />)
      }
    </div>
  );
};

export default BookList;