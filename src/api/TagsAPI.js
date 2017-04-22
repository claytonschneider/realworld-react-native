import Joi from 'joi';
import baseRequest from './baseRequest';

const baseRoute = '/api/tags';

export function getTags(username) {
  Joi.assert(username, Joi.string().required());
  return baseRequest.get(`${baseRoute}`);
}
