import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import GlobalFeed from './screens/Feeds/global';
import Article from './screens/Feeds/Article';

const GlobalFeedStack = createStackNavigator();

export default function() {
  return (
    <GlobalFeedStack.Navigator initialRouteName={'Global Feed'}>
      <GlobalFeedStack.Screen name={'Global Feed'} component={GlobalFeed} />
      <GlobalFeedStack.Screen name={'Article'} component={Article} />
    </GlobalFeedStack.Navigator>
  );
}
