import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import AuthService from '../../config/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const fetchAsyncLogin = createAsyncThunk(
  'auth/fetchAsyncLogin',
  async (data: any, thunkAPI) => {
    const response = await AuthService.login(data);
    return response.data;
  },
);

const authSlice = createSlice({
  name: 'Auth',
  initialState: {
    payload: [],
    isLogin: false,
  },

  reducers: {
    LogOut: (state, action) => {
      AsyncStorage.removeItem('access_token');
      return {
        ...state,
        isLogin: false,
        payload: [],
      };
    },
  },

  extraReducers: builder => {
    builder
      .addCase(fetchAsyncLogin.fulfilled, (state, action) => {
        const payload = action.payload;
        const access_token = action.payload.tokens.access.token;
        const refresh_token = action.payload.tokens.refresh.token;
        const expires = action.payload.tokens.access.expires;
        AsyncStorage.setItem('access_token', JSON.stringify(access_token));
        AsyncStorage.setItem('refresh_token', refresh_token);
        AsyncStorage.setItem('expires', expires);
        //mã hoá sau khi async str, dùng keychain
        return {
          ...state,
          payload: payload,
          isLogin: true,
        };
      })
      .addCase(fetchAsyncLogin.rejected, (state, action) => {
        console.log(action.error.message);
      });
  },
});

export const {LogOut} = authSlice.actions;
export default authSlice.reducer;
