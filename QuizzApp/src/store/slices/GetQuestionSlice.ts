import {createSlice} from '@reduxjs/toolkit';

const getQuestionSlice = createSlice({
  name: 'Question',
  initialState: {
    question: null,
    point: 0,
    correct_answer: 0,
  },
  reducers: {
    addQuestion(state, action) {
      state.question = action.payload;
    },
    incremented(state) {
      state.point += 10;
      state.correct_answer += 1;
    },
    decremented(state) {
      if ((state.point == 0, state.correct_answer == 0)) {
        state.point == 0;
        state.correct_answer == 0;
      } else {
        state.point -= 10;
        state.correct_answer -= 1;
      }
    },
  },
});

const {actions, reducer} = getQuestionSlice;

export const {addQuestion, incremented, decremented} = actions;
export default reducer;
