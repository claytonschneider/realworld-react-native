import React, {useState, useEffect} from 'react';
import api from '../../../api';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Feed from './feed';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default function GlobalFeedScreen() {
  const [tag, setTag] = useState();

  return (
    <>
      <Tags setTag={setTag} tag={tag} />
      <Feed tag={tag} />
    </>
  );
}

function Tags({tag, setTag}) {
  const navigation = useNavigation();
  const [tags, setTags] = useState([]);

  useEffect(() => {
    api.getTags().then(setTags);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tags:</Text>
      <FlatList
        horizontal
        data={tags}
        keyExtractor={(item, i) => item + i}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => {
              if (tag === item) {
                navigation.setOptions({title: 'Global Feed'});
                setTag();
              } else {
                navigation.setOptions({title: '#' + item});
                setTag(item);
              }
            }}>
            <Text style={[styles.tag, tag === item ? styles.selected : {}]}>
              {item}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.2)',
    padding: 5,
    margin: 4,
    flexDirection: 'row',
  },
  text: {
    paddingVertical: 2,
  },
  selected: {
    color: '#5CB85C',
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
