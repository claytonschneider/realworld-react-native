import React, {useEffect, useState, useContext} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {StoreContext} from './context';
import StoreProvider from './context';
import Navigator from './Navigation';
import {StyledLoading} from './components/StyledLoading';

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
    return <StyledLoading />;
  }

  return <>{children}</>;
}
