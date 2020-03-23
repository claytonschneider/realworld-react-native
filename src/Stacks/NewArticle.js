import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import NewArticle from './NewArticle/index';

const NewArticleStack = createStackNavigator();

export default function() {
  return (
    <NewArticleStack.Navigator initialRouteName={'New Article'}>
      <NewArticleStack.Screen name={'New Article'} component={NewArticle} />
    </NewArticleStack.Navigator>
  );
}
