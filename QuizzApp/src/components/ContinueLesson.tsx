import {
  Dimensions,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
// @ts-ignore
import React from 'react';
import {IC_QUESTION, IC_TIME, IC_TRASH, IMG_LESSON} from '../assets';
import styled from 'styled-components/native';

const width = Dimensions.get('window').width;

const ContinueLesson = ({title}: any) => {
  return (
    <LessonSection>
      <Item>
        <LessonDetail>
          <Image source={IMG_LESSON} style={{width: 112, height: 112}} />
          <LessonTitleSection>
            <HeaderTitle>
              <Title>{title}</Title>
              <TouchableOpacity>
                <Image source={IC_TRASH} />
              </TouchableOpacity>
            </HeaderTitle>

            <View>
              <Question>
                <Image source={IC_QUESTION} />
                <QuestionText>8/10 Question</QuestionText>
              </Question>
              <Time>
                <Image source={IC_TIME} />
                <TimeText>35 min</TimeText>
              </Time>
            </View>
            <ContinueBtn>
              <BtnText>Continue Quiz</BtnText>
            </ContinueBtn>
          </LessonTitleSection>
        </LessonDetail>
      </Item>
    </LessonSection>
  );
};

export default ContinueLesson;

const styles = StyleSheet.create({});

const LessonSection = styled.View`
  justify-content: center;
  align-items: center;
`;

const Item = styled.View`
  background: #ffffff;
  box-shadow: 10px 24px 54px rgba(51, 51, 51, 0.1);
  border-radius: 5px;
  margin-top: 16px;
  width: ${width - 24}px;
  height: 136px;
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

const HeaderTitle = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const ContinueBtn = styled.TouchableOpacity`
  width: 199px;
  height: 32px;
  background: #333333;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  margin-top: 12px;
`;

const BtnText = styled.Text`
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  text-align: center;
  color: #ffffff;
`;
