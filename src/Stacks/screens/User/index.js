import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import api from '../../../api';
import {User} from './User';

export default function UserScreen() {
  const [userInfo, setUserInfo] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .getMe()
      .then(UpdatedUser => {
        setUserInfo(UpdatedUser);
        AsyncStorage.setItem('user', JSON.stringify(UpdatedUser));
      })
      .then(() => setLoading(false));
  }, []);

  return <User loading={loading} userInfo={userInfo} />;
}
