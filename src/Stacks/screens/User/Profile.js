import React, {useContext, useState, useEffect} from 'react';
import {StoreContext} from '../../../context';
import {getProfile} from '../../../api';
import {User} from './User';
import {useRoute} from '@react-navigation/native';

export default function UserScreen() {
  const {user} = useContext(StoreContext);
  const username = useRoute().params;
  const [userInfo, setUserInfo] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProfile(username, user.token)
      .then(setUserInfo)
      .catch(console.warn)
      .finally(() => setLoading(false));
  }, [user.token, username]);

  return <User loading={loading} userInfo={userInfo} />;
}
