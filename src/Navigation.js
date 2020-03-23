import React, {useEffect, useState, useContext} from 'react';
import {Text} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StoreContext} from './context';
import YourFeedStack from './Stacks/YourFeed';
import GlobalFeedStack from './Stacks/GlobalFeed';
import NewArticleStack from './Stacks/NewArticle';
import UserStack from './Stacks/User';
import LoginStack from './Stacks/Login';

const Tab = createBottomTabNavigator();

export default function Navigator() {
  const [loading, setLoading] = useState(true);
  const {token, setToken} = useContext(StoreContext);

  useEffect(() => {
    AsyncStorage.getItem('user_token')
      .then(setToken)
      .then(setLoading);
  }, [setToken]);

  useEffect(() => {
    console.log(token ? token : 'no token');
  }, [token]);

  if (loading) {
    return <Text>Loading...</Text>;
  }
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
          <Tab.Screen name={'Login'} component={LoginStack} />
        )}
      </Tab.Navigator>
    </NavigationContainer>
  );
}
