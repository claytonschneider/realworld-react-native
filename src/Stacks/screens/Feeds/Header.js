import React, {useState, useContext} from 'react';
import {Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {FavouriteArticle, UnFavouriteArticle} from '../../../api';
import {StoreContext} from '../../../context';
import {useNavigation} from '@react-navigation/native';

export function Header(props) {
  const [liked, setLiked] = useState(props.favorited);
  const [likes, setLikes] = useState(props.favoritesCount);
  const {user} = useContext(StoreContext);
  const navigation = useNavigation();

  return (
    <View style={styles.header}>
      <TouchableOpacity
        style={styles.left}
        onPress={() => {
          navigation.navigate('Profile', props.author.username);
        }}>
        <Image
          style={styles.image}
          source={{
            uri: props.author.image
              ? props.author.image
              : 'https://static.productionready.io/images/smiley-cyrus.jpg',
          }}
        />
        <View style={styles.info}>
          <Text style={styles.username}>{props.author.username}</Text>
          <Text style={styles.date}>
            {new Date(props.createdAt).toDateString()}
          </Text>
        </View>
      </TouchableOpacity>
      {liked ? (
        <Text
          style={[styles.likes, styles.liked]}
          onPress={() => {
            if (user) {
              setLiked(false);
              setLikes(n => n - 1);
              UnFavouriteArticle(user.token, props.slug);
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
              FavouriteArticle(user.token, props.slug);
            }
          }}>
          {likes}
        </Text>
      )}
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
});
