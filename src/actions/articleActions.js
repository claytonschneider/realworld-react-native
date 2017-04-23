import { createAction } from 'redux-actions';
import { ArticleAPI } from '../api';
import {
  QUERY_ARTICLES_SUCCESS,
} from '../actions/actionTypes';

const queryArticlesSuccess = createAction(QUERY_ARTICLES_SUCCESS);

export const queryArticles = () => async (dispatch) => {
  try {
    const res = await ArticleAPI.getRecentArticles();
    dispatch(queryArticlesSuccess(res.data));
  } catch (e) {
    throw new Error(`Can't query articles ${e}`);
  }
};
