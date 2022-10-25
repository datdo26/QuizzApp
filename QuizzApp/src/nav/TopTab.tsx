import {StyleSheet, View} from 'react-native';
// @ts-ignore
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import ComputerScreen from '../screens/Home/TopTabBar/ComputerScreen';
import PopularScreen from '../screens/Home/TopTabBar/PopularScreen';
import MathematicsScreen from '../screens/Home/TopTabBar/MathematicsScreen';
import ScienceScreen from '../screens/Home/TopTabBar/ScienceScreen';
import styled from 'styled-components/native';

const Tab = createMaterialTopTabNavigator();

const TopTab = () => {
  return (
    <Tab.Navigator
      style={{borderTopLeftRadius: 32, borderTopRightRadius: 32}}
      screenOptions={{
        tabBarShowLabel: true,
        tabBarLabelStyle: {
          color: '#FFF',
        },
      }}>
      <Tab.Screen
        name={'Popular'}
        component={PopularScreen}
        options={{
          title: () => <Title>Popular</Title>,
        }}
      />
      <Tab.Screen
        name={'Mathematics'}
        component={MathematicsScreen}
        options={{
          title: () => <Title>Mathematic</Title>,
        }}
      />
      <Tab.Screen
        name={'Science'}
        component={ScienceScreen}
        options={{
          title: () => <Title>Science</Title>,
        }}
      />
      <Tab.Screen
        name={'Computer'}
        component={ComputerScreen}
        options={{
          title: () => <Title>Computer</Title>,
        }}
      />
    </Tab.Navigator>
  );
};

export default TopTab;

const styles = StyleSheet.create({});

const Title = styled.Text`
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  color: #999999;
`;
