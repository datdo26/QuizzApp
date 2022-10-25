import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
// @ts-ignore
import React, {useCallback} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import HeaderBack from '../../components/HeaderBack';
import {
  IC_DOT,
  IC_QUESTION_DARK,
  IC_STAR,
  IC_STAR_DARK,
  IC_TIME_DARK,
} from '../../assets';
import styled from 'styled-components/native';
import {useNavigation, useRoute} from '@react-navigation/native';

const width = Dimensions.get('window').width;
const DetailScreen = () => {
  const navigation = useNavigation<any>();
  const goToQuiz = useCallback(() => {
    navigation.navigate('QuizScreen');
  }, []);

  return (
    <LinearGradient colors={['#3179E3', '#2DA7EB']} style={styles.background}>
      <HeaderBack title={'Detail Quiz'} />

      <HeaderSection>
        <View>
          <HeaderTitle>UI UX Design Quiz</HeaderTitle>
          <Target>Get 100 points</Target>
        </View>

        <RatingSection>
          <IconStar source={IC_STAR} />
          <RatingNumber>4.8</RatingNumber>
        </RatingSection>
      </HeaderSection>

      <MainSection>
        <BriefText>Brief explanation about this quiz</BriefText>
        <WrapItem>
          <IconDark source={IC_QUESTION_DARK} />
          <View>
            <ItemTitle>10 Questions</ItemTitle>
            <DescriptionText>10 point for a correct answer</DescriptionText>
          </View>
        </WrapItem>

        <WrapItem>
          <IconDark source={IC_TIME_DARK} />
          <View>
            <ItemTitle>1 hour 15 mins</ItemTitle>
            <DescriptionText>Total duration of the quiz</DescriptionText>
          </View>
        </WrapItem>

        <WrapItem>
          <IconDark source={IC_STAR_DARK} />
          <View>
            <ItemTitle>Win 10 stars</ItemTitle>
            <DescriptionText>Answer all questions correctly</DescriptionText>
          </View>
        </WrapItem>

        <ReadingTitle>
          Please read the text below carefully so you can understand it
        </ReadingTitle>

        <ReadingSection>
          <ItemReading>
            <IconDot source={IC_DOT} />
            <ReadingText>
              10 point awarded for a correct answer and no marks for a incorrect
              answer
            </ReadingText>
          </ItemReading>

          <ItemReading>
            <IconDot source={IC_DOT} />
            <ReadingText>
              Tap on options to select the correct answer
            </ReadingText>
          </ItemReading>

          <ItemReading>
            <IconDot source={IC_DOT} />
            <ReadingText>
              Tap on the bookmark icon to save interesting questions
            </ReadingText>
          </ItemReading>

          <ItemReading>
            <IconDot source={IC_DOT} />
            <ReadingText>
              Click submit if you are sure you want to complete all the quizzes
            </ReadingText>
          </ItemReading>
        </ReadingSection>

        <Button onPress={goToQuiz}>
          <BtnText>Get Started</BtnText>
        </Button>
      </MainSection>
    </LinearGradient>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  background: {flex: 1},
});

const HeaderSection = styled.View`
  justify-content: space-between;
  flex-direction: row;
  margin: 0 24px;
  align-items: center;
`;

const HeaderTitle = styled.Text`
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  color: #ffffff;
`;

const Target = styled.Text`
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  color: #ffffff;
  margin-top: 8px;
`;
const RatingSection = styled.View`
  flex-direction: row;
  align-items: center;
`;

const RatingNumber = styled.Text`
  font-weight: 600;
  font-size: 18px;
  line-height: 25px;
  color: #ffffff;
`;

const IconStar = styled.Image`
  width: 18px;
  height: 18px;
  margin-right: 4px;
`;

const MainSection = styled.View`
  flex: 1;
  background-color: #fff;
  border-top-left-radius: 32px;
  border-top-right-radius: 32px;
  margin-top: 34px;
`;

const BriefText = styled.Text`
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  color: #333333;
  margin: 24px 0 0 24px;
`;

const WrapItem = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 12px 24px 6px 24px;
`;

const ItemTitle = styled.Text`
  font-weight: 500;
  font-size: 16px;
  line-height: 18px;
  color: #333333;
`;

const DescriptionText = styled.Text`
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  color: #999999;
`;

const ReadingSection = styled.View`
  margin: 0 24px;
  justify-content: center;
`;

const ItemReading = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 12px;
`;

const IconDot = styled.Image`
  margin-right: 16px;
`;

const ReadingTitle = styled.Text`
  font-weight: 700;
  font-size: 14px;
  line-height: 19px;
  color: #333333;
  margin: 16px 24px 0 24px;
`;

const ReadingText = styled.Text`
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  color: #333333;
`;

const IconDark = styled.Image`
  margin-right: 12px;
`;

const Button = styled.TouchableOpacity`
  width: ${width - 24}px;
  height: 50px;
  background-color: #3179e3;
  align-self: center;
  margin-top: 62px;
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
