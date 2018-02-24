import React from 'react';
import BookList from '../containers/BookList';
import BookDetail from '../containers/BookDetail';

export default () => {
  return (
    <div>
      <BookList />
      <BookDetail />
    </div>
  );
};
