import {StyleSheet, Text, View} from 'react-native';
import React, {useCallback, useState} from 'react';
import styled from 'styled-components/native';
import axios from 'axios';
import {baseURL} from '../config/api';
import {useDispatch, useSelector} from 'react-redux';
import {incremented, decremented} from '../store/slices/GetQuestionSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface Props {
  answer1: string;
  answer2: string;
  answer3: string;
  answer4: string;
  id: string;
}

const Answer = (prop: Props) => {
  const [isSelect1, setIsSelect1] = useState(true);
  const [isSelect2, setIsSelect2] = useState(true);
  const [isSelect3, setIsSelect3] = useState(true);
  const [isSelect4, setIsSelect4] = useState(true);
  // const token = useSelector(state => state.Auth.payload.tokens.access.token);

  const getToken = async () => {
    try {
      const value = await AsyncStorage.getItem('access_token');
      if (value !== null) {
        return value;
      }
    } catch (e) {
      console.log(e);
    }
  };

  const dispatch = useDispatch();

  // lưu đáp án vào reudx
  const SubmitAnswer1 = useCallback(async () => {
    const token = await AsyncStorage.getItem('access_token');
    console.log(token);

    axios
      .post(
        baseURL + `/v1/questions/submit`,
        [
          {
            id: prop.id,
            correctanswer: prop.answer1,
          },
        ],
        {headers: {Authorization: `Bearer ${token}`}},
      )
      .then(response => {
        console.log(response.data);
        if (
          response.data[0].result &&
          String(response.data[0].result) == 'true'
        ) {
          dispatch(incremented());
        } else {
          dispatch(decremented());
        }
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const SubmitAnswer2 = useCallback(async () => {
    const token = await AsyncStorage.getItem('access_token');
    console.log(token);
    axios
      .post(
        baseURL + `/v1/questions/submit`,
        [
          {
            id: prop.id,
            correctanswer: prop.answer2,
          },
        ],
        {headers: {Authorization: `Bearer ${token}`}},
      )
      .then(response => {
        console.log(response.data);
        if (
          response.data[0].result &&
          String(response.data[0].result) == 'true'
        ) {
          dispatch(incremented());
        } else {
          dispatch(decremented());
        }
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const SubmitAnswer3 = useCallback(async () => {
    const token = await AsyncStorage.getItem('access_token');
    console.log(token);
    axios
      .post(
        baseURL + `/v1/questions/submit`,
        [
          {
            id: prop.id,
            correctanswer: prop.answer2,
          },
        ],
        {headers: {Authorization: `Bearer ${token}`}},
      )
      .then(response => {
        console.log(response.data);
        if (
          response.data[0].result &&
          String(response.data[0].result) == 'true'
        ) {
          dispatch(incremented());
        } else {
          dispatch(decremented());
        }
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const SubmitAnswer4 = useCallback(async () => {
    const token = await AsyncStorage.getItem('access_token');
    console.log(token);
    axios
      .post(
        baseURL + `/v1/questions/submit`,
        [
          {
            id: prop.id,
            correctanswer: prop.answer2,
          },
        ],
        {headers: {Authorization: `Bearer ${token}`}},
      )
      .then(response => {
        console.log(response.data);
        if (
          response.data[0].result &&
          String(response.data[0].result) == 'true'
        ) {
          dispatch(incremented());
        } else {
          dispatch(decremented());
        }
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const changeStyle1 = useCallback(() => {
    setIsSelect1(!isSelect1);
    SubmitAnswer1();
  }, [isSelect1]);

  const changeStyle2 = useCallback(() => {
    setIsSelect2(!isSelect2);
    SubmitAnswer2();
  }, [isSelect2]);

  const changeStyle3 = useCallback(() => {
    setIsSelect3(!isSelect3);
    SubmitAnswer3();
  }, [isSelect3]);

  const changeStyle4 = useCallback(() => {
    setIsSelect4(!isSelect4);
    SubmitAnswer4();
  }, [isSelect4]);

  return (
    <View>
      <AnswerSection onPress={changeStyle1}>
        <AnswerHover
          style={{
            backgroundColor: isSelect1 ? '#e9e9e9' : '#2DA7EB',
          }}>
          <AnswerSelection>A</AnswerSelection>
        </AnswerHover>
        <AnswerText
          style={{
            color: isSelect1 ? '#333333' : '#2DA7EB',
          }}>
          {prop.answer1}
        </AnswerText>
      </AnswerSection>

      <AnswerSection onPress={changeStyle2}>
        <AnswerHover
          style={{
            backgroundColor: isSelect2 ? '#e9e9e9' : '#2DA7EB',
          }}>
          <AnswerSelection>B</AnswerSelection>
        </AnswerHover>
        <AnswerText
          style={{
            color: isSelect2 ? '#333333' : '#2DA7EB',
          }}>
          {prop.answer2}
        </AnswerText>
      </AnswerSection>

      <AnswerSection onPress={changeStyle3}>
        <AnswerHover
          style={{
            backgroundColor: isSelect3 ? '#e9e9e9' : '#2DA7EB',
          }}>
          <AnswerSelection>C</AnswerSelection>
        </AnswerHover>
        <AnswerText
          style={{
            color: isSelect3 ? '#333333' : '#2DA7EB',
          }}>
          {prop.answer3}
        </AnswerText>
      </AnswerSection>

      <AnswerSection onPress={changeStyle4}>
        <AnswerHover
          style={{
            backgroundColor: isSelect4 ? '#e9e9e9' : '#2DA7EB',
          }}>
          <AnswerSelection>D</AnswerSelection>
        </AnswerHover>
        <AnswerText
          style={{
            color: isSelect4 ? '#333333' : '#2DA7EB',
          }}>
          {prop.answer4}
        </AnswerText>
      </AnswerSection>
    </View>
  );
};

export default Answer;

const styles = StyleSheet.create({});

const AnswerSection = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  margin-bottom: 16px;
`;

const AnswerHover = styled.View`
  width: 40px;
  height: 40px;
  border-radius: 30px;
  justify-content: center;
  align-items: center;
  margin: 0 8px 0 24px;
`;
const AnswerSelection = styled.Text`
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  color: #ffffff;
`;

const AnswerText = styled.Text`
  font-size: 14px;
  line-height: 16px;
  font-weight: 400;
`;
