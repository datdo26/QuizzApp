import {Dimensions, StyleSheet, TouchableOpacity} from 'react-native';
// @ts-ignore
import React, {useCallback, useState} from 'react';
import styled from 'styled-components/native';
import ItemLesson from '../../../components/ItemLesson';
import ContinueLesson from '../../../components/ContinueLesson';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';
import {addQuestion} from '../../../store/slices/GetQuestionSlice';
import {baseURL} from '../../../config/api';
import AsyncStorage from '@react-native-async-storage/async-storage';

const width = Dimensions.get('window').width;

const numb = Math.floor(Math.random() * 5);
const ComputerScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<any>();
  const [question, setQuestion] = useState();
  // @ts-ignore
  const token = useSelector(state => state.Auth.payload.tokens.access.token);
  const [isSelected, setIsSelected] = useState(true);

  const getQuestionData = useCallback(async () => {
    // const token = await AsyncStorage.getItem('access_token');
    // console.log(token);

    axios
      .get(baseURL + `/v1/questions?page=${numb}&limit=10`, {
        headers: {Authorization: `Bearer ${token}`},
      })
      .then(response => {
        const questionData = response.data.results;
        setQuestion(questionData);
        dispatch(addQuestion(questionData));
      })
      .catch(error => {
        console.log(error);
      });
  }, [question]);

  const goToDetail = useCallback(() => {
    navigation.navigate('DetailScreen');
  }, []);

  const getQuestion = useCallback(() => {
    getQuestionData();
    setIsSelected(!isSelected);
  }, [isSelected]);

  return (
    <Container>
      <TouchableOpacity
        onPress={getQuestion}
        style={{
          borderColor: isSelected ? '#fff' : '#3179e3',
          borderWidth: 1,
          marginTop: 16,
        }}>
        <ItemLesson title={'UI UX Design'} />
      </TouchableOpacity>
      <TouchableOpacity>
        <ItemLesson title={'Graphic Design'} />
      </TouchableOpacity>
      <ContinueQuizText>Continue Quiz</ContinueQuizText>
      <ContinueLesson title={'3D Animation'} />

      <StartBtn onPress={goToDetail}>
        <BtnText>Start Quiz</BtnText>
      </StartBtn>
    </Container>
  );
};

export default ComputerScreen;

const styles = StyleSheet.create({});

const Container = styled.View`
  flex: 1;
  background-color: white;
`;

const ContinueQuizText = styled.Text`
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  color: #333333;
  margin: 16px 0 0 24px;
`;

const StartBtn = styled.TouchableOpacity`
  width: ${width - 24}px;
  height: 50px;
  background-color: #3179e3;
  align-self: center;
  margin-top: 56px;
  border-radius: 5px;
  justify-content: center;
`;

const BtnText = styled.Text`
  font-weight: 500;
  font-size: 16px;
  line-height: 18px;
  color: #ffffff;
  text-align: center;
`;
