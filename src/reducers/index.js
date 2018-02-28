import { combineReducers } from 'redux';
import BooksReducer from './BooksReducer';
import ActiveBookReducer from './ActiveBookReducer';
import WeatherReducer from './WeatherReducer';

const rootReducer = combineReducers({
  // state: (state = {}) => state
  books: BooksReducer,
  selectedBook: ActiveBookReducer,
  weather: WeatherReducer
});

export default rootReducer;
