import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Auth from './screens/Auth/index';

const AuthStack = createStackNavigator();

export default function() {
  return (
    <AuthStack.Navigator initialRouteName={'Welcome'}>
      <AuthStack.Screen name={'Welcome'} component={Auth} />
    </AuthStack.Navigator>
  );
}
