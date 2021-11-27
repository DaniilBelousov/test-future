import React from 'react';
import './BookList.css';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { QueryBooksVolume } from '../redux/types';
import { useAction } from '../hooks/useAction';
import BookCard from './BookCard';
import Spinner from './Spinner';


const BookList = () => {
  const { booksVolume, appStartedFirstTime, currentBooksVolumeQuery, error, loading } = useTypedSelector(state => state.books);
  const { fetchMoreBooks } = useAction();

  const onLoadMoreClick = async () => {
    if (currentBooksVolumeQuery) {
      const query: QueryBooksVolume = {
        ...currentBooksVolumeQuery,
        startIndex: booksVolume.data.length.toString(),
      }

      fetchMoreBooks(query);
    }

  };

  if (appStartedFirstTime) {
    return <p className='text-center' >Enter book title and click search</p>;
  }

  return (
    <div>
      {
        error ?
          <div className='alert alert-danger' role='alert'>
            A simple danger alert—check it out!
          </div>
          :
          null
      }
      {booksVolume.data.length > 0 ? <p className='text-center fs-4 fw-bold' >{`Found ${booksVolume.totalItems} results`}</p> : null}
      <div className='container-wrap'>
        {
          booksVolume.data.map((book, index) => <BookCard key={book.id + index.toString()} data={book} />)
        }
      </div>
      {
        loading ?
          <div className='d-flex justify-content-center mt-3 mb-3'>
            <Spinner />
          </div>
          :
          <div className='d-flex justify-content-center mt-3 mb-3'>
            <button type='button' className='btn btn-dark mt-3 mb-3' onClick={onLoadMoreClick}>Load more</button>
          </div>
      }

    </div>
  );
};

export default BookList;