import {Dimensions, Image, StyleSheet, View} from 'react-native';
// @ts-ignore
import React from 'react';
import {IC_QUESTION, IC_STAR, IC_TIME, IMG_LESSON} from '../assets';
import styled from 'styled-components/native';

const width = Dimensions.get('window').width;

const ItemLesson = ({title}: any) => {
  return (
    <LessonSection>
      <Item>
        <LessonDetail>
          <Image source={IMG_LESSON} />
          <LessonTitleSection>
            <Title>{title}</Title>
            <View>
              <Question>
                <Image source={IC_QUESTION} />
                <QuestionText>10 Question</QuestionText>
              </Question>
              <Time>
                <Image source={IC_TIME} />
                <TimeText>1 hour 15 min</TimeText>
              </Time>
            </View>
          </LessonTitleSection>
        </LessonDetail>

        <RatingSection>
          <Image source={IC_STAR} />
          <RatingNumber>4.8</RatingNumber>
        </RatingSection>
      </Item>
    </LessonSection>
  );
};

export default ItemLesson;

const styles = StyleSheet.create({});

const LessonSection = styled.View`
  align-items: center;
`;

const Item = styled.View`
  background: #ffffff;
  box-shadow: 10px 24px 54px rgba(51, 51, 51, 0.1);
  border-radius: 5px;
  margin-top: 16px;
  width: ${width - 24}px;
  height: 96px;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const LessonDetail = styled.View`
  flex-direction: row;
  align-items: center;
`;
const LessonTitleSection = styled.View`
  margin-left: 24px;
`;

const Title = styled.Text`
  font-weight: 500;
  font-size: 16px;
  line-height: 18px;
  color: rgb(53, 80, 220););
`;

const Question = styled.View`
  flex-direction: row;
  align-items: center;
`;

const QuestionText = styled.Text`
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  color: #999999;
  margin-left: 4px;
`;

const Time = styled(Question)``;

const TimeText = styled(QuestionText)``;

const RatingSection = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const RatingNumber = styled.Text`
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  color: rgb(53, 80, 220);
  margin-left: 4px;
`;
