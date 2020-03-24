import React, {useEffect, useState, useContext} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {StoreContext} from '../../../context';
import {StyledLoading} from '../../../components/StyledLoading';
import ArticlePreview from './ArticlePreview';

export default function Feed({getData}) {
  const {token} = useContext(StoreContext);
  const [articles, setArticles] = useState([]);
  const [offset, setOffset] = useState(0);
  const [refresh, setRefresh] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (refresh || offset) {
      if (offset) {
        getData({offset}, token).then(data =>
          setArticles(state => state.concat(data)),
        );
      } else {
        getData({}, token).then(data => {
          setArticles(data);
          setLoading(false);
        });
      }
      setRefresh(false);
    }
  }, [offset, refresh, token, getData]);

  if (loading) {
    return <StyledLoading />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={articles}
        keyExtractor={item => item.slug}
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
