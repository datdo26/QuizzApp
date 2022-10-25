import {StyleSheet} from 'react-native';
// @ts-ignore
import React, {ReactElement, useCallback} from 'react';
import {IC_AVT, IC_BACK} from '../assets';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import styled from 'styled-components/native';
import {useNavigation} from '@react-navigation/native';

interface Props {
  title?: string;
  right?: ReactElement;
}

const HeaderBack = (props: Props) => {
  const {title, right} = props;
  const navigation = useNavigation<any>();
  const goBack = useCallback(() => {
    navigation.goBack();
  }, []);
  return (
    <Container>
      <Left onPress={goBack}>
        <IconLeft source={IC_BACK} />
        <BannerText>{title}</BannerText>
      </Left>
      <Center></Center>
      <Right>
        <Icon source={right ? IC_AVT : ''} />
      </Right>
    </Container>
  );
};

export default HeaderBack;

const styles = StyleSheet.create({});

const Container = styled.View`
  height: ${getStatusBarHeight() + 56}px;
  padding-top: ${getStatusBarHeight()}px;
  flex-direction: row;
`;

const Left = styled.TouchableOpacity`
  height: 100%;
  flex-direction: row;
  align-items: center;
  padding-left: 16px;
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
  padding-right: 16px;
`;

const Icon = styled.Image`
  width: 32px;
  height: 32px;
`;
const IconLeft = styled.Image`
  width: 24px;
  height: 24px;
`;
const BannerText = styled.Text`
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  color: #ffffff;
  margin-left: 16px;
`;
