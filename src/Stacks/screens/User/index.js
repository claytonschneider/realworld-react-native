import React, {useContext, useState, useEffect} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {StoreContext} from '../../../context';
import {getMe} from '../../../api';
import {StyledLoading} from '../../../components/Styled';

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

  if (loading) {
    return <StyledLoading />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{
            uri: userInfo.image
              ? userInfo.image
              : 'https://static.productionready.io/images/smiley-cyrus.jpg',
          }}
        />
      </View>

      <Text style={styles.username}>{userInfo.username}</Text>
      <Text style={styles.bio}>{userInfo.bio}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 3,
  },
  username: {
    fontSize: 32,
    textAlign: 'center',
    color: '#373a3c',
  },
  imageContainer: {
    padding: 10,
    width: '100%',
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 50,
    alignSelf: 'center',
  },
  bio: {
    color: '#aaa',
    textAlign: 'center',
  },
});
