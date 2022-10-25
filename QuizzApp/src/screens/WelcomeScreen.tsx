import {Image, StyleSheet} from 'react-native';
// @ts-ignore
import React, {useCallback} from 'react';
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import {IMG_BANNER_LOGIN} from '../assets';
import {useNavigation} from '@react-navigation/native';

const WelcomeScreen = () => {
  const navigation = useNavigation<any>();

  const goToSignIn = useCallback(() => {
    navigation.navigate('SignInScreen');
  }, []);

  const goToSignUp = useCallback(() => {
    navigation.navigate('SignUpScreen');
  }, []);

  const goToHome = useCallback(() => {
    navigation.navigate('HomeScreen');
  }, []);

  return (
    <Container>
      <LinearGradient colors={['#3179E3', '#2DA7EB']} style={styles.background}>
        <Image source={IMG_BANNER_LOGIN} />
        <Title>QuizzMe</Title>
        <SubTitle>Test your knowledge</SubTitle>

        <ButtonSection>
          <ButtonRegister onPress={goToSignUp}>
            <TextRegister>SIGN UP</TextRegister>
          </ButtonRegister>

          <RemainingVew>
            <TextNotLogin>ALREADY HAVE AN ACCOUNT?</TextNotLogin>
            <ButtonLogin onPress={goToSignIn}>
              <TextLogin>LOG IN</TextLogin>
            </ButtonLogin>
          </RemainingVew>
        </ButtonSection>
      </LinearGradient>
    </Container>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const Container = styled.View`
  flex: 1;
`;

const Title = styled.Text`
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  text-align: center;
  color: #ffffff;
  margin-top: 68px;
`;

const SubTitle = styled.Text`
  font-style: italic;
  font-weight: 400;
  font-size: 16px;
  text-align: center;
  color: #ffffff;
`;

const ButtonSection = styled.View`
  margin-top: 66px;
`;

const TextRegister = styled.Text`
  font-weight: 400;
  font-size: 14px;
  letter-spacing: 0.05px;
  color: #010101;
  text-align: center;
`;

const ButtonRegister = styled.TouchableOpacity`
  width: 353px;
  height: 50.6px;
  background: #ffffff;
  border-radius: 38px;
  justify-content: center;
`;

const RemainingVew = styled.View`
  margin-top: 16px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

const ButtonLogin = styled.TouchableOpacity`
  margin-left: 12px;
`;
const TextLogin = styled.Text`
  font-weight: 400;
  font-size: 14px;
  line-height: 15px;
  letter-spacing: 0.05px;
  color: #000000;
`;

const TextNotLogin = styled.Text`
  font-weight: 400;
  font-size: 14px;
  line-height: 15px;
  letter-spacing: 0.05px;
  color: #ffffff;
`;
