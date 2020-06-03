import React, {useEffect, useState} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {StyledLoading} from '../../../components/Styled';
import ArticlePreview from './ArticlePreview';
import api from '../../../api';

export default function Feed({author, favorited, tag, personal}) {
  const [articles, setArticles] = useState([]);
  const [offset, setOffset] = useState(0);
  const [refresh, setRefresh] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (refresh || offset) {
      if (personal) {
        if (offset) {
          api
            .getPersonalFeed(offset)
            .then(data => setArticles(state => state.concat(data)));
        } else {
          api.getPersonalFeed().then(data => {
            setArticles(data);
            setLoading(false);
          });
        }
      } else {
        if (offset) {
          api
            .getGlobalFeed({offset, author, favorited, tag})
            .then(data => setArticles(state => state.concat(data)));
        } else {
          api.getGlobalFeed({author, favorited, tag}).then(data => {
            setArticles(data);
            setLoading(false);
          });
        }
      }
    }
    setRefresh(false);
  }, [offset, refresh, author, favorited, tag, personal]);

  useEffect(() => {
    if (tag) {
      setLoading(true);
      setRefresh(true);
    }
  }, [tag]);

  if (loading) {
    return <StyledLoading />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={articles}
        keyExtractor={(item, i) => item.slug + i}
        onEndReached={() => setOffset(n => n + 20)}
        onRefresh={() => {
          setOffset(0);
          setRefresh(true);
        }}
        refreshing={refresh}
        renderItem={({item}) => (
          <ArticlePreview
            id={item.slug}
            slug={item.slug}
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
