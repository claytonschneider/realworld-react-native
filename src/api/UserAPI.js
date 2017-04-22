import Joi from 'joi';
import baseRequest from './baseRequest';

const baseRoute = '/api/user';

const GetCurrentUserParams = Joi.object().keys({
  username: Joi.string().required(),
  email: Joi.string().required(),
  password: Joi.email().required()
});
export function getCurrentUser(params) {
  Joi.assert(params, GetCurrentUserParams.required());
  return baseRequest.get(`${baseRoute}`, params);
}

const UpdateUserParams = Joi.object().keys({
  username: Joi.string().required(),
  email: Joi.string().required(),
  password: Joi.email().required(),
  iamge: Joi.string().uri().required(),
  bio: Joi.string().required()
});
export function updateUser(params) {
  Joi.assert(params, UpdateUserParams.required());
  return baseRequest.put(`${baseRoute}`, params);
}
