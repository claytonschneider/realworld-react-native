import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import YourFeedScreen from './screens/Feeds/personal';
import Article from './screens/Feeds/Article';

const YourFeedStack = createStackNavigator();

export default function() {
  return (
    <YourFeedStack.Navigator initialRouteName={'Your Feed'}>
      <YourFeedStack.Screen name={'Your Feed'} component={YourFeedScreen} />
      <YourFeedStack.Screen
        name={'Article'}
        component={Article}
        options={({route}) => ({title: route.params.title})}
      />
    </YourFeedStack.Navigator>
  );
}
