import React, {useState, useContext} from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import {FavouriteArticle, UnFavouriteArticle} from '../../../api';
import {StoreContext} from '../../../context';

export function Header(props) {
  const [liked, setLiked] = useState(props.favorited);
  const [likes, setLikes] = useState(props.favoritesCount);
  const {token} = useContext(StoreContext);
  return (
    <View style={styles.header}>
      <View style={styles.left}>
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
      </View>
      {liked ? (
        <Text
          style={[styles.likes, styles.liked]}
          onPress={() => {
            if (token) {
              setLiked(false);
              setLikes(n => n - 1);
              UnFavouriteArticle(token, props.slug);
            }
          }}>
          {likes}
        </Text>
      ) : (
        <Text
          style={[styles.likes, styles.notLiked]}
          onPress={() => {
            if (token) {
              setLiked(true);
              setLikes(n => n + 1);
              FavouriteArticle(token, props.slug);
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
