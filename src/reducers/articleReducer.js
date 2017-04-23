import {
  QUERY_ARTICLES_SUCCESS,
} from '../actions/actionTypes';

const initialState = [];

export default function articleReducer(state = initialState, action) {
  switch (action.type) {
    case QUERY_ARTICLES_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}
