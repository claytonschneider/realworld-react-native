import React, {useEffect, useState, useContext} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  Button,
} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {Header} from './Header';
import api from '../../../api';
import {StyledLoading, StyledInput} from '../../../components/Styled';
import {useNavigation} from '@react-navigation/native';
import {StoreContext} from '../../../context';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const ArticleTab = createMaterialTopTabNavigator();

export default function ArticleScreen() {
  const props = useRoute().params;
  const {description, body, slug, author, title, tagList} = props;
  const navigation = useNavigation();
  const {user} = useContext(StoreContext);

  useEffect(() => {
    if (author.username === user?.username) {
      navigation.setOptions({
        headerRight: () => (
          <Button
            onPress={() => {
              navigation.navigate('Edit Article', {
                editing: true,
                description,
                body,
                title,
                slug,
                tags: tagList,
              });
            }}
            title={'Edit'}
            color="#5CC85C"
          />
        ),
      });
    }
  }, [navigation, user, author, description, body, title, slug, tagList]);

  return (
    <View style={styles.container}>
      <Header {...props} follow />
      <ArticleTab.Navigator initialRouteName={'Article'} style={styles.tabs}>
        <ArticleTab.Screen name={'Article'}>
          {() => (
            <ScrollView>
              <Text style={styles.description}>{description}</Text>
              <Text style={styles.body}>{body}</Text>
            </ScrollView>
          )}
        </ArticleTab.Screen>
        <ArticleTab.Screen name={'Comments'}>
          {() => <Comments slug={slug} />}
        </ArticleTab.Screen>
      </ArticleTab.Navigator>
    </View>
  );
}

function Comments({slug}) {
  const [loading, setLoading] = useState(true);
  const [comments, setComments] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    api
      .getComments(slug)
      .then(setComments)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [slug]);

  if (loading) {
    return <StyledLoading />;
  }

  return (
    <>
      <NewComment slug={slug} setComments={setComments} />
      <FlatList
        data={comments}
        keyExtractor={(item, i) => (item.id + i).toString()}
        ListEmptyComponent={() => <Text>{JSON.stringify(error)}</Text>}
        renderItem={({item}) => (
          <>
            <Header
              {...item}
              noFavorites
              deleteCallback={() => {
                api.removeComment(slug, item.id).then(() => {
                  setComments(
                    comments.filter(comment => {
                      return comment.id !== item.id;
                    }),
                  );
                });
                // .catch(setError);
              }}
            />
            <Text style={styles.comment}>{item.body.toString()}</Text>
          </>
        )}
      />
    </>
  );
}

function NewComment({slug, setComments}) {
  const [text, setText] = useState('');
  const [error, setError] = useState();

  function Submit() {
    api
      .setComment(slug, text)
      .then(newComment => setComments(state => state.concat([newComment])))
      .catch(setError);
  }

  return (
    <>
      {error ? <Text>{JSON.stringify(error)}</Text> : null}
      <View style={styles.newComment}>
        <StyledInput
          placeholder="Leave a comment..."
          onChangeText={setText}
          value={text}
        />
        <Button
          style={styles.newCommentButton}
          color="#5CB85C"
          title="Send"
          onPress={Submit}
        />
      </View>
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
  tabs: {
    marginVertical: 10,
  },
  newComment: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  newCommentButton: {
    borderRadius: 5,
  },
});
