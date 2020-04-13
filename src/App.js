import React, {useEffect, useState, useContext} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import StoreProvider, {StoreContext} from './context';
import Navigator from './Navigation';
import {StyledLoading} from './components/StyledLoading';
import api from './api';

export default function App() {
  return (
    <StoreProvider>
      <LoadToken>
        <Navigator />
      </LoadToken>
    </StoreProvider>
  );
}

function LoadToken({children}) {
  const [loading, setLoading] = useState(true);
  const {user, setUser} = useContext(StoreContext);

  useEffect(() => {
    AsyncStorage.getItem('user')
      .then(JSON.parse)
      .then(newUser => {
        setUser(newUser);
        setLoading(false);
      });
  }, [setUser]);

  useEffect(() => {
    if (user) {
      if (user.token) {
        api.setToken(user.token);
      }
    }
  }, [user]);

  useEffect(() => {
    console.log(user ? user : 'no user');
  }, [user]);

  if (loading) {
    return <StyledLoading />;
  }

  return <>{children}</>;
}
