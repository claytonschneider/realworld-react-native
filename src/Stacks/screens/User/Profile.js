import React, {useState, useEffect} from 'react';
import api from '../../../api';
import {User} from './User';
import {useRoute} from '@react-navigation/native';

export default function UserScreen() {
  const {username} = useRoute().params;
  const [userInfo, setUserInfo] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .getProfile(username)
      .then(setUserInfo)
      .catch(console.warn)
      .finally(() => setLoading(false));
  }, [username]);

  return <User loading={loading} userInfo={userInfo} />;
}
