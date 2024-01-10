import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Order from '../screens/AppStack/Order';
import Setting from '../screens/AppStack/Setting';
import OrderScrollDown from '../screens/AppStack/OrderScrollDown';
import SelectOrder from '../screens/AppStack/SelectOrder';
import Map from '../screens/AppStack/Map';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator initialRouteName="Map" screenOptions={{headerShown: false}}>
      <Tab.Screen name="Home" component={Order} />
      <Tab.Screen name="Order" component={OrderScrollDown} />
      <Tab.Screen name="Profile" component={Setting} />
      <Tab.Screen name="SelectOrder" component={SelectOrder} />
      <Tab.Screen name="Map" component={Map} />
    </Tab.Navigator>
  );
};
export default BottomTab;
