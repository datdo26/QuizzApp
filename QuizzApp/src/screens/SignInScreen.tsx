// @ts-ignore
import React, {useCallback, useState} from 'react';
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import {
  Image,
  StyleSheet,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  Alert,
  View,
  Text,
} from 'react-native';
import {IC_BACK_CIRCLE, IC_FB, IC_GG} from '../assets';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {fetchAsyncLogin} from '../store/slices/AuthSlice';
import InputInfo from '../components/InputInfo';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {isValidPassword} from '../utilities/Validation';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const width = Dimensions.get('window').width;

const SignInScreen = () => {
  const [showPass, setShowPass] = useState(true);
  const dispatch = useDispatch();
  const [errorPassword, setErrorPassword] = useState('');
  const [data, setData] = useState({
    username: '',
    password: '',
  });

  const handleShowPass = useCallback(() => {
    setShowPass(!showPass);
  }, [showPass]);

  const handleLogin = useCallback(() => {
    // @ts-ignore
    return dispatch(fetchAsyncLogin(data)).then(response => {
      if (!response.error) {
        navigation.navigate('HomeScreen');
      } else {
        Alert.alert('Please check your email or password');
      }
    });
  }, [data]);

  const keyboardVerticalOffset = Platform.OS === 'ios' ? 20 : 0;

  const navigation = useNavigation<any>();

  const goBack = useCallback(() => {
    navigation.goBack();
  }, []);

  const onChangeText = useCallback(
    (keyName: string, value: string) => {
      setData({...data, [keyName]: value});
    },
    [data],
  );

  const onChangePassword = useCallback(
    val => {
      setErrorPassword(
        isValidPassword(val) === true
          ? ''
          : 'Password must have min 8 characters',
      );
      setData({...data, password: val});
    },
    [data],
  );

  const SignupSchema = Yup.object().shape({
    username: Yup.string()
      .required('Username is required')
      .min(5, 'Username must have min 5 characters')
      .max(10, 'Username have max 10 characters'),
    password: Yup.string()
      .min(8, ({min}) => `Password must be at least ${min} characters`)
      .required('Password is required'),
  });

  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={keyboardVerticalOffset}
      style={{flex: 1}}>
      <LinearGradient colors={['#3179E3', '#2DA7EB']} style={styles.background}>
        <ButtonBack onPress={goBack}>
          <Image
            source={IC_BACK_CIRCLE}
            style={{marginTop: 42, marginLeft: 12}}
          />
        </ButtonBack>
        <TitleSection>
          <Title>Welcome Back</Title>
        </TitleSection>
        <ButtonSection>
          <ButtonFB>
            <Image source={IC_FB} />
            <ButtonText>CONTINUE WITH FACEBOOK</ButtonText>
          </ButtonFB>
          <ButtonGG>
            <Image source={IC_GG} />
            <ButtonText>CONTINUE WITH GOOGLE</ButtonText>
          </ButtonGG>
          <TextLoginOther>OR LOGIN WITH EMAIL</TextLoginOther>
        </ButtonSection>
        <Formik
          initialValues={{
            username: '',
            password: '',
          }}
          onSubmit={value => console.log(value)}
          validationSchema={SignupSchema}>
          {({errors, touched}) => (
            <View>
              <InputEmail>
                <InputInfo
                  title={'Username'}
                  value={data.username}
                  onChangeValue={onChangeText}
                  keyName={'username'}
                />
              </InputEmail>
              {errors.username && touched.username ? (
                <Text style={{color: 'red', fontSize: 12}}>
                  hello,{errors.username}
                </Text>
              ) : null}

              <InputPassword>
                <Password
                  placeholder={'Password'}
                  value={data.password}
                  onChangeText={onChangePassword}
                  secureTextEntry={showPass}
                  placeholderTextColor={'gray'}
                />
                <ButtonShowPass onPress={handleShowPass}>
                  <FontAwesome
                    name={!showPass ? 'eye' : 'eye-slash'}
                    size={18}
                    color="black"
                  />
                </ButtonShowPass>
              </InputPassword>
              <Text style={styles.errorPassword}>{errorPassword}</Text>
              <ButtonLogin onPress={handleLogin}>
                <ButtonLoginText>LOG IN</ButtonLoginText>
              </ButtonLogin>
            </View>
          )}
        </Formik>

        <ButtonForgotPW>
          <TextForgotPW>Forgot Password?</TextForgotPW>
        </ButtonForgotPW>
        <RemainingView>
          <TextNotLogin>DON’T HAVE AN ACCOUNT? </TextNotLogin>
          <TextRegister>SIGN UP</TextRegister>
        </RemainingView>
      </LinearGradient>
    </KeyboardAvoidingView>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  errorPassword: {
    fontSize: 12,
    marginLeft: 22,
    color: '#fff',
    marginTop: 5,
  },
});

const ButtonBack = styled.TouchableOpacity``;

const TitleSection = styled.View`
  justify-content: center;
  align-items: center;
`;

const Title = styled.Text`
  font-weight: 400;
  font-size: 28px;
  line-height: 38px;
  color: #ffffff;
`;
const ButtonSection = styled.View`
  justify-content: center;
  align-items: center;
`;

const ButtonFB = styled(ButtonBack)`
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.01);
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 38px;
  width: ${width - 22}px;
  height: 63px;
  flex-direction: row;
  align-items: center;
  margin-top: 30px;
  justify-content: space-evenly;
`;
const ButtonGG = styled(ButtonFB)``;

const ButtonText = styled.Text`
  font-weight: 400;
  font-size: 14px;
  line-height: 15px;
  letter-spacing: 0.05px;
  color: #000000;
`;

const TextLoginOther = styled.Text`
  font-weight: 400;
  font-size: 14px;
  line-height: 15px;
  letter-spacing: 0.05px;
  color: #ffffff;
  margin-top: 30px;
`;

const InputEmail = styled.View`
  align-items: center;
`;

const InputPassword = styled.View`
  width: ${width - 22}px;
  height: 50px;
  background-color: white;
  border-radius: 38px;
  align-items: center;
  flex-direction: row;
  margin-top: 30px;
  align-self: center;
`;

const ButtonShowPass = styled.TouchableOpacity`
  margin-right: 12px;
`;

const Password = styled.TextInput`
  height: 50px;
  flex: auto;
  padding: 10px;
`;

const ButtonLogin = styled(ButtonFB)`
  justify-content: center;
  align-self: center;
  height: 50px;
`;

const ButtonLoginText = styled(ButtonText)``;

const ButtonForgotPW = styled(ButtonBack)`
  justify-content: center;
  align-self: center;
  margin-top: 30px;
`;

const TextForgotPW = styled(ButtonText)`
  color: white;
`;

const RemainingView = styled(ButtonBack)`
  flex-direction: row;
  margin-top: 60px;
  justify-content: center;
  align-items: center;
`;

const TextNotLogin = styled.Text`
  font-weight: 400;
  font-size: 14px;
  line-height: 15px;
  letter-spacing: 0.05px;
  color: #ffffff;
`;

const TextRegister = styled(TextNotLogin)`
  color: black;
`;

const RequirementText = styled.Text`
  color: #fff;
  font-size: 12px;
  margin: 8px 0 0 22px;
`;
