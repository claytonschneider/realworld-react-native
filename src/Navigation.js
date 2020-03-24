import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StoreContext} from './context';
import YourFeedStack from './Stacks/YourFeed';
import GlobalFeedStack from './Stacks/GlobalFeed';
import NewArticleStack from './Stacks/NewArticle';
import UserStack from './Stacks/User';
import AuthStack from './Stacks/Auth';

const Tab = createBottomTabNavigator();

export default function Navigator() {
  const {token} = useContext(StoreContext);
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName={token ? 'Your Feed' : 'Global Feed'}>
        {token ? (
          <Tab.Screen name={'Your Feed'} component={YourFeedStack} />
        ) : null}
        <Tab.Screen name={'Global Feed'} component={GlobalFeedStack} />
        {token ? (
          <Tab.Screen name={'New Article'} component={NewArticleStack} />
        ) : null}
        {token ? (
          <Tab.Screen name={'User'} component={UserStack} />
        ) : (
          <Tab.Screen name={'Sign In'} component={AuthStack} />
        )}
      </Tab.Navigator>
    </NavigationContainer>
  );
}
