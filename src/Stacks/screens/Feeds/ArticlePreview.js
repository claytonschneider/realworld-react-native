import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

export default function ArticlePreview({
  title,
  body,
  createdAt,
  updatedAt,
  tagList,
  description,
  author,
  favorited,
  favoritesCount,
}) {
  const [liked, setLiked] = useState(favorited);
  const [likes, setLikes] = useState(favoritesCount);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.left}>
          <Image
            style={styles.image}
            source={{
              uri: author.image,
            }}
          />
          <View style={styles.info}>
            <Text style={styles.username}>{author.username}</Text>
            <Text style={styles.date}>
              {new Date(createdAt).toDateString()}
            </Text>
          </View>
        </View>
        {liked ? (
          <Text
            style={[styles.likes, styles.liked]}
            onPress={() => {
              setLiked(false);
              setLikes(n => n - 1);
            }}>
            {likes}
          </Text>
        ) : (
          <Text
            style={[styles.likes, styles.notLiked]}
            onPress={() => {
              setLiked(true);
              setLikes(n => n + 1);
            }}>
            {likes}
          </Text>
        )}
      </View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      <View style={styles.more}>
        <Text style={styles.readmore}>Read more...</Text>
        <View style={styles.tags}>
          {tagList.map(item => (
            <Text key={item} style={styles.tag}>
              {item}
            </Text>
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.1)',
    marginBottom: 5,
  },
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
  title: {
    color: '#373a3c',
    fontSize: 24,
    paddingVertical: 5,
  },
  description: {
    color: '#999',
  },
  readmore: {
    color: '#bbb',
    paddingVertical: 5,
  },
  more: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  tags: {
    flexDirection: 'row',
  },
  tag: {
    borderWidth: 1,
    color: '#aaa',
    borderColor: '#aaa',
    height: 24,
    paddingHorizontal: 7,
    paddingVertical: 2,
    borderRadius: 12,
    marginLeft: 4,
  },
});
