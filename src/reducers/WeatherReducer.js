import { FETCH_WEATHER } from '../actions/types';

export default (state = [], action) => {
  console.log('Action received', action);
  switch (action.type) {
  case FETCH_WEATHER:
  console.log(action.payload);
    return [action.payload.data, ...state]; // [city, city, city, ...] 
  default:
    return state;
  }
};
