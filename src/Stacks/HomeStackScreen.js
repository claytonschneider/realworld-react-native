import React from 'react';
import {DetailsScreen} from './Screens/DetailsScreen';
import {HomeScreen} from './Screens/HomeScreen';

import {createStackNavigator} from '@react-navigation/stack';

const HomeStack = createStackNavigator();

export function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Details" component={DetailsScreen} />
    </HomeStack.Navigator>
  );
}
