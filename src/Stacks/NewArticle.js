import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import NewArticle from './screens/NewArticle/index';
import Article from './screens/Feeds/Article';

const NewArticleStack = createStackNavigator();

export default function() {
  return (
    <NewArticleStack.Navigator initialRouteName={'New Article'}>
      <NewArticleStack.Screen name={'New Article'} component={NewArticle} />
      <NewArticleStack.Screen
        name={'Article'}
        component={Article}
        options={({route}) => ({title: route.params.title})}
      />
    </NewArticleStack.Navigator>
  );
}
