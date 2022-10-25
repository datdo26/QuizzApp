import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import AuthService from '../../config/auth';

export const fetchAsyncRegister = createAsyncThunk(
  'auth/fetchAsyncRegister',
  async (data: any, thunkAPI) => {
    const response = await AuthService.register(data);
    return response.data;
  },
);

const registerSlice = createSlice({
  name: 'Register',
  initialState: {
    payload_register: [],
  },

  reducers: {
    register(state, action) {
      const payload = action.payload;
      return {
        ...state,
        payload_register: payload,
      };
    },
  },

  extraReducers: builder => {
    builder
      .addCase(fetchAsyncRegister.fulfilled, (state, action) => {
        const payload = action.payload;
        return {
          ...state,
          payload_register: payload,
        };
      })

      .addCase(fetchAsyncRegister.rejected, (state, action) => {
        console.log(action.error.message);
      });
  },
});

const {actions, reducer} = registerSlice;

export default reducer;
export const {register} = actions;
