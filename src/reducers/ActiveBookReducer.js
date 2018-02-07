import { SELECT_BOOK } from '../actions/types';

// const INITIAL_STATE = { null };

export default (state = null, action) => {
  switch (action.type) {
    case SELECT_BOOK:
    console.log(`Book '${action.payload.title}' selected!`)
      return action.payload;
    default:
      return state;
  }
};
