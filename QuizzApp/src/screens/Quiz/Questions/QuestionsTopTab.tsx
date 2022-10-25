import {StyleSheet, Text} from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Q1 from './Q1';
import Q2 from './Q2';
import Q3 from './Q3';
import Q4 from './Q4';
import Q5 from './Q5';
import Q6 from './Q6';
import Q7 from './Q7';
import Q8 from './Q8';
import Q9 from './Q9';
import Q10 from './Q10';

const Tab = createMaterialTopTabNavigator();

const QuestionsTopTab = () => {
  return (
    <Tab.Navigator
      style={{
        borderTopLeftRadius: 32,
        borderTopRightRadius: 32,
      }}
      screenOptions={{
        tabBarShowLabel: true,
        tabBarLabelStyle: {
          color: '#FFF',
        },
      }}>
      <Tab.Screen
        name={'1'}
        component={Q1}
        options={{
          title: () => <Text>1</Text>,
        }}
      />
      <Tab.Screen
        name={'2'}
        component={Q2}
        options={{
          title: () => <Text>2</Text>,
        }}
      />
      <Tab.Screen
        name={'3'}
        component={Q3}
        options={{
          title: () => <Text>3</Text>,
        }}
      />
      <Tab.Screen
        name={'4'}
        component={Q4}
        options={{
          title: () => <Text>4</Text>,
        }}
      />
      <Tab.Screen
        name={'5'}
        component={Q5}
        options={{
          title: () => <Text>5</Text>,
        }}
      />
      <Tab.Screen
        name={'6'}
        component={Q6}
        options={{
          title: () => <Text>6</Text>,
        }}
      />
      <Tab.Screen
        name={'7'}
        component={Q7}
        options={{
          title: () => <Text>7</Text>,
        }}
      />
      <Tab.Screen
        name={'8'}
        component={Q8}
        options={{
          title: () => <Text>8</Text>,
        }}
      />
      <Tab.Screen
        name={'9'}
        component={Q9}
        options={{
          title: () => <Text>9</Text>,
        }}
      />
      <Tab.Screen
        name={'10'}
        component={Q10}
        options={{
          title: () => <Text>10</Text>,
        }}
      />
    </Tab.Navigator>
  );
};

export default QuestionsTopTab;

const styles = StyleSheet.create({});
