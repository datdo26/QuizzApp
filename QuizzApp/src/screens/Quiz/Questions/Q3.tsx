import {StyleSheet} from 'react-native';
import React from 'react';
import styled from 'styled-components/native';
import {useSelector} from 'react-redux';
import Answer from '../../../components/Answer';

const Q3 = () => {
  const question = useSelector(state => state.Question.question[2]);
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

export default Q3;

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
