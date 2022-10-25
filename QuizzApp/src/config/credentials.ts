import { configureStore } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

import store from '../store';

// axios.defaults.baseURL = 'http://137.184.207.13:5000/v1/';

// axios.interceptors.request.use(
//   async config => {
//     const TOKEN = localStorage.getItem('token');
//     const date_expired = await AsyncStorage.getItem('expires');
//     const expires = Number(new Date(date_expired));
//     const current = Number(new Date());

//     if (expires <= current) {
//       await refreshToken(
//         AsyncStorage.getItem('refresh'),
//         'deviceId-xx@gmail.com',
//       )
//         .then(res => {
//           AsyncStorage.setItem('token', res.data.data.access.token);
//           AsyncStorage.setItem('expires', res.data.data.access.expires);
//           AsyncStorage.setItem('refresh', res.data.data.refresh.token);
//           config.headers = {
//             ...config.headers,
//             Authorization: `Bearer ${res.data.data.access.token}`,
//           };

//           return config;
//         })
//         .catch(err => console.log(err));
//     }

//     config.headers = {
//       ...config.headers,
//       Authorization: 'Bearer ' + TOKEN,
//     };
//     return config;
//   },
//   function (error) {
//     return Promise.reject(error);
//   },
// );

// axios.interceptors.response.use(
//   config => {
//     document.body.classList.remove('loading');
//     return config;
//   },
//   function (error) {
//     document.body.classList.remove('loading');
//     return Promise.reject(error);
//   },
// );

const axiosService = axios.create({
  headers: {
    'Content-type': 'applycation/json',
    Accept: 'application/json',
    Authorization: `Bearer ${token}`,
  },
});

axiosService.interceptors.response.use(response => {
  return response;
},
async error => {
//error 401
let originalConfig = error.config;
if(error.response.status === 401){
  const token = await AsyncStorage.getItem('access_token')
  if(token) {
    const respRefresh = await handleRefresh(token);
  }
}
}

// const handleRefresh = async token => {
//   // set header for axios refresh
//   axiosServiceRefresh.defaults.headers.common.Authorization = `Bearer ${token}`;
//   return new Promise((resolve, reject) => {
//     axiosServiceRefresh
//       .post(yourRefreshTokenPath, param)
//       .then(response => {
//         resolve(response);
//       })
//       .catch(error => {});
//   });
// };
