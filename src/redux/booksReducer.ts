import { BooksState, BooksAction, BooksActionTypes } from "./types";

const initialState: BooksState = {
  books: [],
  loading: false,
  error: null
};

export const booksReducer = (state = initialState, action: BooksAction): BooksState => {
  switch (action.type) {
    case BooksActionTypes.FETCH_BOOKS:
      return { loading: true, error: null, books: [] };
    case BooksActionTypes.FETCH_BOOKS_SUCCESS:
      return { loading: false, error: null, books: action.payload };
    case BooksActionTypes.FETCH_BOOKS_ERROR:
      return { loading: true, error: action.payload, books: [] };
    default:
      return state;
  }
}