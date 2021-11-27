import { BooksAction, BooksActionTypes } from "./types";
import { Dispatch } from "redux";
import { QueryBooksVolume } from "../redux/types";
import { fetchBooks } from "../api/booksApi";

export const fetchBook = (query: QueryBooksVolume) => {
  return async (dispatch: Dispatch<BooksAction>) => {
    try {
      dispatch({ type: BooksActionTypes.FETCH_BOOKS, payload: query });
      
      const booksData = await fetchBooks(query);
      
      dispatch({ type: BooksActionTypes.FETCH_BOOKS_SUCCESS, payload: booksData });
    } catch (error: any) {
      dispatch({ type: BooksActionTypes.FETCH_BOOKS_ERROR, payload: "Ошибка" });
      console.log(error);
    }
  }
};

export const fetchMoreBooks = (query: QueryBooksVolume) => {
  return async (dispatch: Dispatch<BooksAction>) => {
    try {
      dispatch({ type: BooksActionTypes.FETCH_MORE, payload: query });
      
      const booksData = await fetchBooks(query);
      
      dispatch({ type: BooksActionTypes.FETCH_MORE_SUCCESS, payload: booksData });
    } catch (error: any) {
      dispatch({ type: BooksActionTypes.FETCH_BOOKS_ERROR, payload: "Ошибка" });
      console.log(error);
    }
  }
};