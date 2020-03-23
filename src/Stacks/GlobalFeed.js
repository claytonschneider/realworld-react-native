import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import GlobalFeed from './GlobalFeed/index';
import Article from './SharedScreens/Article';

const GlobalFeedStack = createStackNavigator();

export default function() {
  return (
    <GlobalFeedStack.Navigator initialRouteName={'Global Feed'}>
      <GlobalFeedStack.Screen name={'Global Feed'} component={GlobalFeed} />
      <GlobalFeedStack.Screen name={'Article'} component={Article} />
    </GlobalFeedStack.Navigator>
  );
}
