export interface Book {
  id: string;
  imageLink?: string;
  authors?: string[];
  title?: string;
  categories?: string[];
  description?: string;
};

export interface BooksVolume {
  data: Book[];
  totalItems: number;
};

export interface BooksState {
  booksVolume: BooksVolume;
  loading: boolean;
  appStartedFirstTime: boolean;
  currentBooksVolumeQuery?: QueryBooksVolume;
  error: null | string;
};

export enum BooksActionTypes {
  FETCH_BOOKS = "FETCH_BOOKS",
  FETCH_BOOKS_SUCCESS = "FETCH_BOOKS_SUCCESS",
  FETCH_BOOKS_ERROR = "FETCH_BOOKS_ERROR",
  FETCH_MORE = "FETCH_MORE",
  FETCH_MORE_SUCCESS = "FETCH_MORE_SUCCESS",
};

interface FetchBooksAction {
  type: BooksActionTypes.FETCH_BOOKS;
  payload: QueryBooksVolume;
};

interface FetchBooksSuccessAction {
  type: BooksActionTypes.FETCH_BOOKS_SUCCESS;
  payload: BooksVolume;
};

interface FetchBooksErrorAction {
  type: BooksActionTypes.FETCH_BOOKS_ERROR;
  payload: string;
};

interface FetchMoreAction {
  type: BooksActionTypes.FETCH_MORE;
};

export interface FechMoreSuccessAction {
  type: BooksActionTypes.FETCH_MORE_SUCCESS;
  payload: BooksVolume;
};

export interface QueryBooksVolume {
  q: string;
  orderBy: string;
  startIndex?: string;
  maxResults?: string;
};

export type BooksAction = FetchBooksAction | FetchBooksSuccessAction | FetchBooksErrorAction | FetchMoreAction | FechMoreSuccessAction;