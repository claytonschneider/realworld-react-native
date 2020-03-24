import React from 'react';
import {Button} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import User from './screens/User/index';
import Settings from './screens/User/Settings';

const UserStack = createStackNavigator();

export default function({navigation}) {
  return (
    <UserStack.Navigator initialRouteName={'User'}>
      <UserStack.Screen
        name={'User'}
        component={User}
        options={{
          headerRight: () => (
            <Button
              onPress={() => navigation.navigate('Settings')}
              title="Settings"
              color="#5CC85C"
            />
          ),
        }}
      />
      <UserStack.Screen name={'Settings'} component={Settings} />
    </UserStack.Navigator>
  );
}
