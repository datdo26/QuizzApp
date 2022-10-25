import {api} from './api';

const QuestionService = {
  list({...restParams} = {}) {
    return api.call().get(`/v1/questions`, {
      params: {
        ...restParams,
      },
    });
  },
};
export default QuestionService;
