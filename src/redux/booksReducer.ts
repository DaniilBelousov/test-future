import { BooksState, BooksAction, BooksActionTypes } from "./types";

const initialState: BooksState = {
  booksVolume: {
    data: [],
    totalItems: 0,
  },
  loading: false,
  appStartedFirstTime: true,
  error: null,
};

export const booksReducer = (state = initialState, action: BooksAction): BooksState => {
  switch (action.type) {
    case BooksActionTypes.FETCH_BOOKS:
      return { ...state, loading: true, appStartedFirstTime: false, currentBooksVolumeQuery: action.payload };
    case BooksActionTypes.FETCH_BOOKS_SUCCESS:
      return { ...state, loading: false, booksVolume: action.payload };
    case BooksActionTypes.FETCH_BOOKS_ERROR:
      return { ...state, error: action.payload };
    case BooksActionTypes.FETCH_MORE:
      return { ...state, loading: true };
    case BooksActionTypes.FETCH_MORE_SUCCESS:
      return {
        ...state,
        loading: false,
        booksVolume: {
          ...state.booksVolume,
          data: [...state.booksVolume.data, ...action.payload.data]
        }
      };
    default:
      return state;
  }
}