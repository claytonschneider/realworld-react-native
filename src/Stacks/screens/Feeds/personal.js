import React, {useEffect, useState, useContext} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {StoreContext} from '../../../context';
import {getPersonalFeed} from '../../../api';

import ArticlePreview from './ArticlePreview';

export default function GlobalFeedScreen({navigation}) {
  const {token} = useContext(StoreContext);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getPersonalFeed(token).then(setArticles);
  }, [token]);

  return (
    <View style={styles.container}>
      <FlatList
        data={articles}
        renderItem={({item}) => (
          <ArticlePreview
            id={item.slug}
            title={item.title}
            author={item.author}
            body={item.body}
            createdAt={item.createdAt}
            updatedAt={item.updatedAt}
            tagList={item.tagList}
            description={item.description}
            favorited={item.favorited}
            favoritesCount={item.favoritesCount}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 3,
  },
});
