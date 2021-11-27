import { QueryBooksVolume, BooksVolume, Book } from '../redux/types';

const BOOKS_API_URL = 'https://www.googleapis.com/books/v1/volumes';
const API_KEY = 'AIzaSyC5rVFDMxmgoOiTZ4TgQS5D2xLA8sQaBPE';

export const fetchBooks = async (query: QueryBooksVolume): Promise<BooksVolume> => {
  console.log(query)
  const urlParams = createUrlParams({ ...query, key: API_KEY });
  const url = `${BOOKS_API_URL}?${urlParams}`;

  const response = await fetch(url).then((response) => response);
  const json = await response.json().then((data) => data); 

  const booksVolume = parseBooksJson(json);

  return booksVolume;
};

const createUrlParams = (query: object) => {
  const urlParams = Object.entries(query).map(([key, value]) => {
    if (value) {
      const param = `${key}=${value}`;
      return param;
    } else {
      return undefined;
    }
  });

  return urlParams.filter((item) => item).join('&');
};

const parseBooksJson = (json: any): BooksVolume => {
  const totalItems: number = json['totalItems'];
  const items = json['items'];

  const booksData: Book[] = items.map((item: any) => {
    const volumeInfo = item['volumeInfo'];
    const data: Book = {
      id: item["id"],
      authors: volumeInfo["authors"],
      title: volumeInfo["title"],
      categories: volumeInfo["categories"],
      description: volumeInfo["description"],
    };

    if (volumeInfo["imageLinks"]) {
      data.imageLink = volumeInfo["imageLinks"]["thumbnail"];
    }

    return data;
  });

  return { data: booksData, totalItems: totalItems };
}