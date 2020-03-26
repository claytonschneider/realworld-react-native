import React, {useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Button} from 'react-native';
import YourFeedScreen from './screens/Feeds/personal';
import Article from './screens/Feeds/Article';
import Profile from './screens/User/Profile';
import api from '../api';

const YourFeedStack = createStackNavigator();

export default function() {
  const [following, setFollowing] = useState();

  return (
    <YourFeedStack.Navigator initialRouteName={'Your Feed'}>
      <YourFeedStack.Screen name={'Your Feed'} component={YourFeedScreen} />
      <YourFeedStack.Screen
        name={'Article'}
        component={Article}
        options={({route}) => ({title: route.params.title})}
      />
      <YourFeedStack.Screen
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
    </YourFeedStack.Navigator>
  );
}
