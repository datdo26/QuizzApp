import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
// @ts-ignore
import React, {useCallback, useState} from 'react';
import styled from 'styled-components/native';
import {IC_NEXT, IC_PREVIOUS_COLOR} from '../../../assets';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import Answer from '../../../components/Answer';

const Q10 = () => {
  const navigation = useNavigation<any>();

  const goToResult = useCallback(() => {
    navigation.navigate('ResultScreen');
  }, []);

  const question = useSelector(state => state.Question?.question[9]);
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

      <Footer>
        <ButtonSubmit onPress={goToResult}>
          <Text>Submit Quiz</Text>
        </ButtonSubmit>
      </Footer>
    </Container>
  );
};

export default Q10;

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

const ButtonSubmit = styled.TouchableOpacity`
  width: 195px;
  height: 50px;
  border-color: #3550dc;
  border-width: 1px;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
`;
