import React from 'react';
import {DetailsScreen} from './Screens/DetailsScreen';
import {SettingsScreen} from './Screens/SettingsScreen';

import {createStackNavigator} from '@react-navigation/stack';

const SettingsStack = createStackNavigator();

export function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Settings" component={SettingsScreen} />
      <SettingsStack.Screen name="Details" component={DetailsScreen} />
    </SettingsStack.Navigator>
  );
}
