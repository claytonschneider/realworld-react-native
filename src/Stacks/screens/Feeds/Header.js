import React, {useState, useContext} from 'react';
import {Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import api from '../../../api';
import {StoreContext} from '../../../context';
import {useNavigation} from '@react-navigation/native';

export function Header(props) {
  const [liked, setLiked] = useState(props.favorited);
  const [likes, setLikes] = useState(props.favoritesCount);
  const [image, setImage] = useState(props.author.image);
  const [following, setFollowing] = useState(props.author.following);
  const {user} = useContext(StoreContext);
  const navigation = useNavigation();

  return (
    <View style={styles.header}>
      <TouchableOpacity
        style={styles.left}
        onPress={() => {
          console.log(props.author.username.toString());
          navigation.navigate('Profile', {
            username: props.author.username.toString(),
            following: props.author.following,
          });
        }}>
        <Image
          style={styles.image}
          source={{
            uri: image
              ? image
              : 'https://static.productionready.io/images/smiley-cyrus.jpg',
          }}
          onError={() => {
            setImage(
              'https://static.productionready.io/images/smiley-cyrus.jpg',
            );
          }}
        />
        <View style={styles.info}>
          <Text style={styles.username}>
            {props.author.username.toString()}
          </Text>
          <Text style={styles.date}>
            {new Date(props.createdAt).toDateString()}
          </Text>
        </View>
      </TouchableOpacity>
      <View style={styles.actions}>
        {props.follow ? (
          following ? (
            <Text
              style={[styles.likes, styles.liked]}
              onPress={() => {
                if (user) {
                  setFollowing(false);
                  api
                    .removeFollow(props.author.username)
                    .catch(() => setFollowing(true));
                }
              }}>
              -
            </Text>
          ) : (
            <Text
              style={[styles.likes, styles.notLiked]}
              onPress={() => {
                if (user) {
                  setFollowing(true);
                  api
                    .setFollow(props.author.username)
                    .catch(() => setFollowing(false));
                }
              }}>
              +
            </Text>
          )
        ) : null}
        {!props.noFavorites ? (
          liked ? (
            <Text
              style={[styles.likes, styles.liked]}
              onPress={() => {
                if (user) {
                  setLiked(false);
                  setLikes(n => n - 1);
                  api.removeFavorite(props.slug).catch(() => setLiked(true));
                }
              }}>
              {likes}
            </Text>
          ) : (
            <Text
              style={[styles.likes, styles.notLiked]}
              onPress={() => {
                if (user) {
                  setLiked(true);
                  setLikes(n => n + 1);
                  api.setFavorite(props.slug).catch(() => setLiked(false));
                }
              }}>
              {likes}
            </Text>
          )
        ) : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 32,
    height: 32,
    borderRadius: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  left: {
    flexDirection: 'row',
  },
  info: {
    paddingLeft: 16,
  },
  username: {
    color: '#5CB85C',
  },
  likes: {
    borderWidth: 1,
    fontSize: 26,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginLeft: 10,
  },
  liked: {
    borderColor: '#5CB85C',
    color: 'white',
    backgroundColor: '#5CB85C',
  },
  notLiked: {
    borderColor: '#5CB85C',
    color: '#5CB85C',
  },
  date: {
    color: '#bbb',
  },
  actions: {
    flexDirection: 'row',
    flex: 0,
  },
});
