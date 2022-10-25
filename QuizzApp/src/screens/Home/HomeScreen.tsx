// @ts-ignore
import React, {useEffect, useState} from 'react';
import {StyleSheet, TouchableWithoutFeedback, Keyboard} from 'react-native';
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import HomeHeader from '../../components/HomeHeader';
import {IC_SEARCH} from '../../assets';
import TopTab from '../../nav/TopTab';
import {useSelector} from 'react-redux';
import {baseURL} from '../../config/api';
import axios from 'axios';

const HomeScreen = () => {
  const [searchText, setSearchText] = useState('');
  // @ts-ignore
  const user_name = useSelector(state => state.Auth.payload.user.username);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <LinearGradient colors={['#3179E3', '#2DA7EB']} style={styles.background}>
        <HomeHeader />

        <WelcomeSection>
          <HelloText>Hello, {user_name}</HelloText>
          <WelcomeText>Let's test your knowledge</WelcomeText>
        </WelcomeSection>

        <SearchSection>
          <SearchIcon source={IC_SEARCH} />
          <SearchInput
            placeholder={'Search'}
            onChangeText={text => setSearchText(text)}
            value={searchText}
          />
        </SearchSection>
        <TopTab />
      </LinearGradient>
    </TouchableWithoutFeedback>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
});

const SearchSection = styled.View`
  background-color: #fff;
  flex-direction: row;
  height: 40px;
  align-items: center;
  margin: 16px 10px 9px;
  border-radius: 35px;
`;

const SearchIcon = styled.Image`
  width: 16px;
  height: 16px;
  margin-left: 9px;
  margin-right: 11px;
`;

const SearchInput = styled.TextInput`
  font-weight: 300;
  font-size: 13px;
  line-height: 16px;
  letter-spacing: 0.12px;
  flex: auto;
`;

const WelcomeSection = styled.View`
  margin-left: 24px;
`;

const HelloText = styled.Text`
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: #ffffff;
`;

const WelcomeText = styled.Text`
  font-weight: 700;
  font-size: 20px;
  line-height: 23px;
  color: #ffffff;
  margin-top: 8px;
`;
