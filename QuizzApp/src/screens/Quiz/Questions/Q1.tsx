import {StyleSheet, Text} from 'react-native';
import React from 'react';
import styled from 'styled-components/native';
import {useSelector} from 'react-redux';
import Answer from '../../../components/Answer';

const Q1 = () => {
  const question = useSelector(state => state.Question.question[0]);
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

      <Footer>
        <Text style={{fontSize: 24}}>Slide to next Question </Text>
      </Footer>
    </Container>
  );
};

export default Q1;

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

const Footer = styled.View`
  flex-direction: row;
  justify-content: center;
  margin: 0px 24px 32px 24px;
  flex: 1;
  align-items: auto;
`;
