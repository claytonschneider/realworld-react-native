import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, ScrollView, FlatList} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {Header} from './Header';
import {getComments} from '../../../api';
import {StyledLoading} from '../../../components/Styled';

export default function ArticleScreen() {
  const props = useRoute().params;
  const {description, body, slug} = props;

  return (
    <View style={styles.container}>
      <Header {...props} follow />
      <ScrollView>
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.body}>{body}</Text>
        <Comments slug={slug} />
      </ScrollView>
    </View>
  );
}

function Comments({slug}) {
  const [loading, setLoading] = useState(true);
  const [comments, setComments] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    getComments(slug)
      .then(setComments)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [slug]);

  if (loading) {
    return <StyledLoading />;
  }

  return (
    <>
      <Text style={styles.comments}>Comments</Text>
      <Text>{JSON.stringify(error)}</Text>
      <FlatList
        data={comments}
        keyExtractor={(item, i) => (item.id + i).toString()}
        renderItem={({item}) => (
          <>
            <Header {...item} noFavorites />
            <Text style={styles.comment}>{item.body.toString()}</Text>
          </>
        )}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 7,
  },
  comments: {
    fontSize: 24,
    paddingTop: 20,
    textAlign: 'center',
  },
  description: {
    fontSize: 14,
    textAlign: 'center',
    padding: 5,
  },
  body: {
    fontSize: 16,
    color: '#373a3c',
  },
  comment: {
    padding: 10,
  },
});
