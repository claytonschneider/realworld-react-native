import Joi from 'joi';
import baseRequest from './baseRequest';

const baseRoute = '/api/user';

export function getCurrentUser() {
  return baseRequest.get(`${baseRoute}`, params);
}

const UpdateUserParams = Joi.object().keys({
  username: Joi.string().optional(),
  email: Joi.string().optional(),
  password: Joi.email().optional(),
  iamge: Joi.string().uri().optional(),
  bio: Joi.string().optional()
});
export function updateUser(params) {
  Joi.assert(params, UpdateUserParams.required());
  return baseRequest.put(`${baseRoute}`, params);
}
