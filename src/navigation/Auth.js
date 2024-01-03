import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Welcome from '../screens/AuthStack/Welcome';
import SignIn from '../screens/AuthStack/SignIn';
import SignUp from '../screens/AuthStack/SignUp';
import SignUpNow from '../screens/AuthStack/SignUpNow';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="SignUpNow" component={SignUpNow} />
    </Stack.Navigator>
  );
}

export default App;
