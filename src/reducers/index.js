import { combineReducers } from 'redux';
import BooksReducer from './BooksReducer';
import ActiveBookReducer from './ActiveBookReducer';

const rootReducer = combineReducers({
  // state: (state = {}) => state
  books: BooksReducer,
  selectedBook: ActiveBookReducer
});

export default rootReducer;
