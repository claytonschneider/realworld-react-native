import React, {useContext} from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StoreContext} from './context';
import YourFeedStack from './Stacks/YourFeed';
import GlobalFeedStack from './Stacks/GlobalFeed';
import NewArticleStack from './Stacks/NewArticle';
import UserStack from './Stacks/User';
import AuthStack from './Stacks/Auth';

const Tab = createBottomTabNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'rgb(179, 104, 178)',
    border: 'rgb(179, 104, 178)',
    card: 'white',
    background: 'white',
  },
};

export default function Navigator() {
  const {user} = useContext(StoreContext);
  return (
    <NavigationContainer theme={MyTheme}>
      <Tab.Navigator initialRouteName={user ? 'Your Feed' : 'Global Feed'}>
        {user ? (
          <Tab.Screen name={'Your Feed'} component={YourFeedStack} />
        ) : null}
        <Tab.Screen name={'Global Feed'} component={GlobalFeedStack} />
        {user ? (
          <Tab.Screen name={'New Article'} component={NewArticleStack} />
        ) : null}
        {user ? (
          <Tab.Screen name={'User'} component={UserStack} />
        ) : (
          <Tab.Screen name={'Sign In'} component={AuthStack} />
        )}
      </Tab.Navigator>
    </NavigationContainer>
  );
}
