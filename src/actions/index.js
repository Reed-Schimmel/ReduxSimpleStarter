import {
  SELECT_BOOK
} from './types';

export const selectBook = book => {
  return {
    type: SELECT_BOOK,
    payload: book
  };
};
