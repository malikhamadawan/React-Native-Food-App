import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Order from '../screens/AppStack/Order';
import OrderScrollDown from '../screens/AppStack/OrderScrollDown';
import BottomTab from './BottomTab';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <Stack.Navigator
      initialRouteName="BottomTab"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="BottomTab" component={BottomTab} />
      <Stack.Screen name="OrderScrollDown" component={OrderScrollDown} />
    </Stack.Navigator>
  );
}

export default App;
