import {api} from './api';

const AuthService = {
  login({username, password} = {}) {
    return api.call().post(`/v1/auth/login`, {
      username,
      password,
    });
  },

  register({username, password, email} = {}) {
    return api.call().post(`/v1/auth/register`, {
      username,
      password,
      email,
    });
  },
};

export default AuthService;
