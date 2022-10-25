import {StyleSheet, Text, View} from 'react-native';
import React, {useCallback, useState} from 'react';
import {useSelector} from 'react-redux';
import styled from 'styled-components/native';
import Answer from '../../../components/Answer';
const Q9 = () => {
  const question = useSelector(state => state.Question?.question[8]);
  const id = question?.id;

  return (
    <Container>
      <Question>{question?.question}</Question>

      <Answer
        answer1={question?.answer1}
        answer2={question?.answer2}
        answer3={question?.answer3}
        answer4={question?.answer4}
        id={id}
      />
    </Container>
  );
};

export default Q9;

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
