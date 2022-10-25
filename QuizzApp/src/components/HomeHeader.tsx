import {StyleSheet, Text, View} from 'react-native';
// @ts-ignore
import React, {memo, ReactElement, useCallback} from 'react';
import styled from 'styled-components/native';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import {useNavigation} from '@react-navigation/native';
import {IC_AVT, IC_MENU} from '../assets';
import {useSelector} from 'react-redux';

interface Props {
  title?: string;
  right?: ReactElement;
  left?: ReactElement;
}

export const HeaderBack = memo(function HeaderBack(props: Props) {
  const {title, right, left} = props;
  // @ts-ignore
  const payload = useSelector(state => state.Auth.payload);

  return (
    <Container>
      <Left>
        <Icon source={IC_MENU} />
      </Left>
      <Center>
        <BannerText>{title}</BannerText>
      </Center>
      <Right>
        <Avatar source={{uri: payload.user.avatar}} />
      </Right>
    </Container>
  );
});

export default HeaderBack;

const styles = StyleSheet.create({});

const Container = styled.View`
  height: ${getStatusBarHeight() + 56}px;
  padding-top: ${getStatusBarHeight()}px;
  flex-direction: row;
`;

const Left = styled.TouchableOpacity`
  width: 60px;
  height: 100%;
  flex-direction: row;
  align-items: center;
  padding-left: 24px;
`;

const Center = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Right = styled.View`
  width: 60px;
  height: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  padding-right: 24px;
`;

const Icon = styled.Image``;

const BannerText = styled.Text`
  font-size: 20px;
  color: #fff;
  font-weight: 600;
`;

const Avatar = styled.Image`
  width: 40px;
  height: 40px;
`;
