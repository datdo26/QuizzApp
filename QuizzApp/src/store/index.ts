import {configureStore} from '@reduxjs/toolkit';
import AuthReducer from './slices/AuthSlice';
import QuestionReducer from './slices/GetQuestionSlice';
import RegisterReducer from './slices/RegisterSlice';
const store = configureStore({
  reducer: {
    Auth: AuthReducer,
    Question: QuestionReducer,
    Register: RegisterReducer,
  },
});

export default store;
