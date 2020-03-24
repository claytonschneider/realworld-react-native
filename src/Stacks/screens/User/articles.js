import React, {useContext} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Feed from '../Feeds/feed';
import {StoreContext} from '../../../context';

import {getGlobalFeed} from '../../../api';

const Tab = createMaterialTopTabNavigator();

export default function Articles({username}) {
  const {user} = useContext(StoreContext);

  return (
    <Tab.Navigator initialRouteName={'My Articles'}>
      <Tab.Screen
        name={`${
          username === user.username ? 'My' : `${username}'s`
        } Articles`}>
        {() => <Feed getData={getGlobalFeed} author={username} />}
      </Tab.Screen>
      <Tab.Screen name={'Favorited Articles'}>
        {() => <Feed getData={getGlobalFeed} favorited={username} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
}
