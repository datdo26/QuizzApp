import {useSelector} from 'react-redux';
import axios from 'axios';
import {baseURL} from './api';
const authAxios = axios.create({
  baseURL: baseURL,
});

const publicAxios = axios.create({
  baseURL: baseURL,
});

// {headers: {Authorization: `Bearer ${token}`}},

const refreshAuthLogic = async failedRequest => {
  const refToken = useSelector(
    state => state.Auth.payload.tokens.refresh.token,
  );
  const data = {
    refreshToken: refToken,
  };

  const options = {
    method: 'POST',
    data,
    url: baseURL + `/v1/auth/refresh-tokens`,
  };

  return axios(options).then(async tokenRefreshResponse => {
    failedRequest.response.config.headers.Authorization =
      'Bearer' + tokenRefreshResponse.data.refreshToken;
  });
};
