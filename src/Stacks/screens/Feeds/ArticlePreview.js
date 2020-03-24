import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Header} from './Header';

export default function ArticlePreview(props) {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Header {...props} />
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Article', {
            ...props,
          })
        }>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.description}>{props.description}</Text>
        <View style={styles.more}>
          <Text style={styles.readmore}>Read more...</Text>
          <View style={styles.tags}>
            {props.tagList.map(item => (
              <Text key={item} style={styles.tag}>
                {item}
              </Text>
            ))}
          </View>
        </View>
      </TouchableOpacity>
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
