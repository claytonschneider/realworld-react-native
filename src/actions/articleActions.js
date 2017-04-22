import { createAction } from 'redux-actions';
import {
  QUERY_ARTICLES_SUCCESS,
  QUERY_ARTICLES_ERROR,
} from '../actions/actionTypes';
import { ArticleAPI } from '../api';

const queryArticlesSuccess = createAction(QUERY_ARTICLES_SUCCESS);
const queryArticlesError = createAction(QUERY_ARTICLES_ERROR);

const queryArticles = () => async (dispatch) => {
  try {
    const res = await ArticleAPI.getRecentArticles();
    console.log('@@@@@@@ res', res);
  } catch (e) {
    dispatch(queryArticlesError());
  }
};
