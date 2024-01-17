/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Order from '../screens/AppStack/Order';
import Setting from '../screens/AppStack/Setting';
import OrderScrollDown from '../screens/AppStack/OrderScrollDown';
import {Image} from 'react-native';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false, tabBarActiveTintColor: '#024220'}}>
      <Tab.Screen
        name="Home"
        component={Order}
        options={{
          tabBarIcon: ({color, size}) => (
            <Image
              source={require('../assets/home_fill.png')}
              resizeMode={'contain'}
              style={{
                width: 25,
                height: 25,
                tintColor: color,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Order"
        component={OrderScrollDown}
        options={{
          tabBarIcon: ({color}) => (
            <Image
              source={require('../assets/orderIcon1122.png')}
              resizeMode={'contain'}
              style={{
                width: 18,
                height: 18,
                tintColor: color,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Setting}
        options={{
          tabBarIcon: ({color}) => (
            <Image
              source={require('../assets/profileIcon.png')}
              resizeMode={'contain'}
              style={{
                width: 20,
                height: 20,
                tintColor: color,
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default BottomTab;
