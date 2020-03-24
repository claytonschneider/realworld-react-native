import React, {useContext, useState, useEffect} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {StoreContext} from '../../../context';
import {getMe} from '../../../api';
import {User} from './User';

export default function UserScreen({navigation}) {
  const {user} = useContext(StoreContext);
  const [userInfo, setUserInfo] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getMe(user.token)
      .then(UpdatedUser => {
        setUserInfo(UpdatedUser);
        AsyncStorage.setItem('user', JSON.stringify(UpdatedUser));
      })
      .then(() => setLoading(false));
  }, [user.token]);

  return <User loading={loading} userInfo={userInfo} />;
}
