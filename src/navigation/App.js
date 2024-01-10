import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Order from '../screens/AppStack/Order';
import OrderScrollDown from '../screens/AppStack/OrderScrollDown';
import BottomTab from './BottomTab';
import AddCart from '../screens/AppStack/AddCart';
import MapTwo from '../screens/AppStack/MapTwo';
import AddCartTwo from '../screens/AppStack/AddCartTwo';
import PlaceOrderTwo from '../screens/AppStack/PlaceOrderTwo';
import PaymentTypeTwo from '../screens/AppStack/PaymentTypeTwo';
import OrderStatus from '../screens/AppStack/OrderStatus';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <Stack.Navigator
      initialRouteName="OrderStatus"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="BottomTab" component={BottomTab} />
      <Stack.Screen name="OrderScrollDown" component={OrderScrollDown} />
      <Stack.Screen name="AddCart" component={AddCart} />
      <Stack.Screen name="MapTwo" component={MapTwo} />
      <Stack.Screen name="AddCartTwo" component={AddCartTwo} />
      <Stack.Screen name="PlaceOrderTwo" component={PlaceOrderTwo} />
      <Stack.Screen name="PaymentTypeTwo" component={PaymentTypeTwo} />
      <Stack.Screen name="OrderStatus" component={OrderStatus} />
    </Stack.Navigator>
  );
}

export default App;
