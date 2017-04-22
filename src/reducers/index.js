import { combineReducers } from 'redux';
import articleReducer from './articleReducer';

const rootReducer = combineReducers({
  articles: articleReducer,
});

export default rootReducer;
