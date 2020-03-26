import React, {useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Button} from 'react-native';
import GlobalFeed from './screens/Feeds/global';
import Article from './screens/Feeds/Article';
import Profile from './screens/User/Profile';
import api from '../api';

const GlobalFeedStack = createStackNavigator();

export default function() {
  const [following, setFollowing] = useState();

  return (
    <GlobalFeedStack.Navigator initialRouteName={'Global Feed'}>
      <GlobalFeedStack.Screen name={'Global Feed'} component={GlobalFeed} />
      <GlobalFeedStack.Screen
        name={'Article'}
        component={Article}
        options={({route}) => ({title: route.params.title})}
      />
      <GlobalFeedStack.Screen
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
    </GlobalFeedStack.Navigator>
  );
}
