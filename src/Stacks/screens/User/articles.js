import React from 'react';
import {Text} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Feed from '../Feeds/feed';

import {getGlobalFeed} from '../../../api';

const Tab = createMaterialTopTabNavigator();

export default function Articles() {
  return (
    <Tab.Navigator initialRouteName={'My Articles'}>
      <Tab.Screen name={'My Articles'} component={MyArticles} />
      <Tab.Screen name={'Favorited Articles'} component={FavoritedArticles} />
    </Tab.Navigator>
  );
}

function MyArticles() {
  return <Feed getData={getGlobalFeed} author={"nick14"} />;
}

function FavoritedArticles() {
  return <Feed getData={getGlobalFeed} favorited={"nick14"} />;
}
