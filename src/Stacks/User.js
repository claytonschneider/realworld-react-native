import React, {useState} from 'react';
import {Button} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import User from './screens/User/index';
import Settings from './screens/User/Settings';
import Article from './screens/Feeds/Article';
import Profile from './screens/User/Profile';
import NewArticle from './screens/NewArticle/index';
import api from '../api';

const UserStack = createStackNavigator();

export default function({navigation}) {
  const [following, setFollowing] = useState();

  return (
    <UserStack.Navigator initialRouteName={'User'}>
      <UserStack.Screen
        name={'User'}
        component={User}
        options={{
          headerRight: () => (
            <Button
              onPress={() => navigation.navigate('Settings')}
              title="Settings"
              color="#5CC85C"
            />
          ),
        }}
      />
      <UserStack.Screen name={'Settings'} component={Settings} />
      <UserStack.Screen
        name={'Article'}
        component={Article}
        options={({route}) => ({title: route.params.title})}
      />
      <UserStack.Screen
        name={'Edit Article'}
        component={NewArticle}
        options={({route}) => ({title: 'Edit ' + route.params.title})}
      />
      <UserStack.Screen
        name={'Profile'}
        component={Profile}
        options={({route}) => ({
          headerRight: () => (
            <>
              {() => setFollowing(route.params.following)}
              <Button
                onPress={() => {
                  if (following) {
                    setFollowing(false);
                    api.removeFollow(route.params.username).catch(() => {
                      setFollowing(true);
                    });
                  } else {
                    setFollowing(true);
                    api.setFollow(route.params.username).catch(() => {
                      setFollowing(false);
                    });
                  }
                }}
                title={following ? 'UnFollow' : 'Follow'}
                color="#5CC85C"
              />
            </>
          ),
        })}
      />
    </UserStack.Navigator>
  );
}
