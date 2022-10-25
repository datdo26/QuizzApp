import {StyleSheet} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import styled from 'styled-components/native';
import Answer from '../../../components/Answer';
const Q7 = () => {
  const question = useSelector(state => state.Question.question[6]);
  const id = question.id;

  return (
    <Container>
      <Question>{question.question}</Question>

      <Answer
        answer1={question.answer1}
        answer2={question.answer2}
        answer3={question.answer3}
        answer4={question.answer4}
        id={id}
      />
    </Container>
  );
};

export default Q7;

const styles = StyleSheet.create({});
const Container = styled.View`
  flex: 1;
`;

const Question = styled.Text`
  font-weight: 500;
  font-size: 16px;
  line-height: 18px;
  color: #333333;
  margin: 24px 24px;
`;
