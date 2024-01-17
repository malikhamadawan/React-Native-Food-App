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
import OrderStatusTwo from '../screens/AppStack/OrderStatusTwo';
import OrderStatusThree from '../screens/AppStack/OrderStatusThree';
import OrderStatusFour from '../screens/AppStack/OrderStatusFour';
import OrderStatusFive from '../screens/AppStack/OrderStatusFive';
import OrderStatusSix from '../screens/AppStack/OrderStatusSix';
import Finish from '../screens/AppStack/Finish';
import Setting from '../screens/AppStack/Setting';
import SelectOrder from '../screens/AppStack/SelectOrder';
import Map from '../screens/AppStack/Map';
import PlaceOrder from '../screens/AppStack/PlaceOrder';
import PaymentType from '../screens/AppStack/PaymentType';
import Home from '../screens/AppStack/Home';
import Mojito from '../screens/AppStack/Mojito';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <Stack.Navigator
      initialRouteName="BottomTab"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="BottomTab" component={BottomTab} />
      <Stack.Screen name="OrderScrollDown" component={OrderScrollDown} />
      <Stack.Screen name="AddCart" component={AddCart} />
      <Stack.Screen name="Map" component={Map} />
      <Stack.Screen name="MapTwo" component={MapTwo} />
      <Stack.Screen name="Mojito" component={Mojito} />
      <Stack.Screen name="AddCartTwo" component={AddCartTwo} />
      <Stack.Screen name="PlaceOrderTwo" component={PlaceOrderTwo} />
      <Stack.Screen name="PlaceOrder" component={PlaceOrder} />
      <Stack.Screen name="PaymentTypeTwo" component={PaymentTypeTwo} />
      <Stack.Screen name="PaymentType" component={PaymentType} />
      <Stack.Screen name="OrderStatus" component={OrderStatus} />
      <Stack.Screen name="OrderStatusTwo" component={OrderStatusTwo} />
      <Stack.Screen name="OrderStatusThree" component={OrderStatusThree} />
      <Stack.Screen name="OrderStatusFour" component={OrderStatusFour} />
      <Stack.Screen name="OrderStatusFive" component={OrderStatusFive} />
      <Stack.Screen name="OrderStatusSix" component={OrderStatusSix} />
      <Stack.Screen name="Finish" component={Finish} />
      <Stack.Screen name="Setting" component={Setting} />
      <Stack.Screen name="SelectOrder" component={SelectOrder} />
    </Stack.Navigator>
  );
}

export default App;
