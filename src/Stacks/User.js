import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import User from './User/index';
import Settings from './User/Settings';

const UserStack = createStackNavigator();

export default function() {
  return (
    <UserStack.Navigator initialRouteName={'User'}>
      <UserStack.Screen name={'User'} component={User} />
      <UserStack.Screen name={'Settings'} component={Settings} />
    </UserStack.Navigator>
  );
}
