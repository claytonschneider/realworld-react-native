import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import YourFeedScreen from './screens/Feeds/personal';
import Article from './screens/Feeds/Article';
import Profile from './screens/User/Profile';

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
      <YourFeedStack.Screen name={'Profile'} component={Profile} />
    </YourFeedStack.Navigator>
  );
}
