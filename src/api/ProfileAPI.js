import Joi from 'joi';
import baseRequest from './baseRequest';

const baseRoute = '/api/profiles';

export function getProfile(username) {
  Joi.assert(username, Joi.string().required());
  return baseRequest.get(`${baseRoute}/${encodeURIComponent(username)}`);
}

export function followUser(username) {
  Joi.assert(username, Joi.string().required());
  return baseRequest.post(`${baseRoute}/${encodeURIComponent(username)}/follow`);
}

export function unfollowUser(username) {
  Joi.assert(username, Joi.string().required());
  return baseRequest.delete(`${baseRoute}/${encodeURIComponent(username)}/follow`);
}
