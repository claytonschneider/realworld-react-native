import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import {StyledLoading} from '../../../components/Styled';
import Articles from './articles';

export function User({loading, userInfo}) {
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
      <Articles username={userInfo.username} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 7,
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
    padding: 10,
  },
});
