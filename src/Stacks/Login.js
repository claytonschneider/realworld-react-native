import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Login from './screens/Login/index';

const AuthStack = createStackNavigator();

export default function() {
  return (
    <AuthStack.Navigator initialRouteName={'Login'}>
      <AuthStack.Screen name={'Login'} component={Login} />
    </AuthStack.Navigator>
  );
}
