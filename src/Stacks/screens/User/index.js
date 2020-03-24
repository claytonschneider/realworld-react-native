import React, {useContext, useState, useEffect} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {StoreContext} from '../../../context';
import {getMe} from '../../../api';
import {StyledLoading} from '../../../components/StyledLoading'

export default function UserScreen({navigation}) {
  const {token} = useContext(StoreContext);
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getMe(token)
      .then(setUser)
      .then(() => setLoading(false));
  }, [token]);

  if (loading) {
    return <StyledLoading />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{
            uri: user.image
              ? user.image
              : 'https://static.productionready.io/images/smiley-cyrus.jpg',
          }}
        />
      </View>

      <Text style={styles.username}>{user.username}</Text>
      <Text style={styles.bio}>{user.bio}</Text>
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
