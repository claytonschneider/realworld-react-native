import Joi from 'joi';
import baseRequest from './baseRequest';

const baseRoute = '/api/users';

const LoginParams = Joi.object().keys({
  email: Joi.string().required(),
  password: Joi.email().required(),
});
export function login(params) {
  Joi.assert(params, LoginParams.required());
  return baseRequest.post(`${baseRoute}/login`, params);
}

const CreateUserParams = Joi.object().keys({
  username: Joi.string().required(),
  email: Joi.string().required(),
  password: Joi.email().required(),
});
export function createUser(params) {
  Joi.assert(params, CreateUserParams.required());
  return baseRequest.post(`${baseRoute}`, params);
}
