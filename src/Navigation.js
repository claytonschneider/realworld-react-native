import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import YourFeedStack from './Stacks/YourFeed';
import GlobalFeedStack from './Stacks/GlobalFeed';
import NewArticleStack from './Stacks/NewArticle';
import UserStack from './Stacks/User';

const Tab = createBottomTabNavigator();

export default function Navigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName={'Your Feed'}>
        <Tab.Screen name={'Your Feed'} component={YourFeedStack} />
        <Tab.Screen name={'Global Feed'} component={GlobalFeedStack} />
        <Tab.Screen name={'New Article'} component={NewArticleStack} />
        <Tab.Screen name={'User'} component={UserStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
