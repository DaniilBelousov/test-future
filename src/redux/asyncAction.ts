import { BooksAction, BooksActionTypes } from "./types";
import { Dispatch } from "redux";

export const fetchBook = () => {
  return async (dispatch: Dispatch<BooksAction>) => {
    try {
      dispatch({type: BooksActionTypes.FETCH_BOOKS});
      const response = await fetch("https://www.googleapis.com/books/v1/volumes?q=search+terms");
      const json = await response.json();
      setTimeout(() => {
        dispatch({ type: BooksActionTypes.FETCH_BOOKS_SUCCESS, payload: json});
        console.log(json);
      }, 1000);
    } catch (error: any) {
      dispatch({ type: BooksActionTypes.FETCH_BOOKS_ERROR, payload: "Ошибка" });
      console.log(error);
    }
  }
};