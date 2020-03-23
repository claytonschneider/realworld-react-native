import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import YourFeedScreen from './YourFeed/index';
import Article from './SharedScreens/Article';

const YourFeedStack = createStackNavigator();

export default function() {
  return (
    <YourFeedStack.Navigator initialRouteName={'Your Feed'}>
      <YourFeedStack.Screen name={'Your Feed'} component={YourFeedScreen} />
      <YourFeedStack.Screen name={'Article'} component={Article} />
    </YourFeedStack.Navigator>
  );
}
