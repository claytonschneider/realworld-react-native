import _ from 'lodash';
import Joi from 'joi';
import baseRequest from './baseRequest';

const baseRoute = '/api/articles';

const GetArticlesQueryParams = Joi.object().keys({
  limit: Joi.number().optional(),
  offset: Joi.number().optional(),
});
export function getFeedArticles(params = {}) {
  Joi.assert(params, GetArticlesQueryParams.required());
  return baseRequest.get(`${baseRoute}/feed`, { params });
}

const GetRecentArticlesParams = GetArticlesQueryParams.keys({
  tag: Joi.string().optional(),
  author: Joi.string().optional(),
  favorited: Joi.string().optional(),
});
export function getRecentArticles(params = {}) {
  Joi.assert(params, GetRecentArticlesParams.required());
  return baseRequest.get(`${baseRoute}`, { params });
}

export function get(slug) {
  Joi.assert(slug, Joi.string().required());
  return baseRequest.get(`${baseRoute}/${encodeURIComponent(slug)}`);
}

const CreateArticleParams = Joi.object().keys({
  title: Joi.string().required(),
  description: Joi.string().required(),
  body: Joi.string().required(),
  tagList: Joi.array().items(Joi.string()).required(),
});
export function create(params) {
  Joi.assert(params, CreateArticleParams.required());
  return baseRequest.post(`${baseRoute}`, params);
}

const UpdateArticleParams = Joi.object().keys({
  title: Joi.string().required(),
  description: Joi.string().required(),
  body: Joi.string().required(),
});
export function update(params) {
  Joi.assert(params, UpdateArticleParams.required());
  return baseRequest.put(`${baseRoute}`, params);
}

const AddCommentParams = Joi.object().keys({
  body: Joi.string().required(),
});
export function addComment(slug, params) {
  Joi.assert(slug, Joi.string().required());
  Joi.assert(params, AddCommentParams.required());
  return baseRequest.post(`${baseRoute}/${encodeURIComponent(slug)}/comments`, params);
}

export function getComments(slug) {
  Joi.assert(slug, Joi.string().required());
  return baseRequest.get(`${baseRoute}/${encodeURIComponent(slug)}/comments`);
}

export function favorite(slug) {
  Joi.assert(slug, Joi.string().required());
  return baseRequest.post(`${baseRoute}/${encodeURIComponent(slug)}/favorite`);
}

export function unfavorite(slug) {
  Joi.assert(slug, Joi.string().required());
  return baseRequest.delete(`${baseRoute}/${encodeURIComponent(slug)}/favorite`);
}
