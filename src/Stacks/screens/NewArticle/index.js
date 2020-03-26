import React, {useState} from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import api from '../../../api';
import {
  StyledButton,
  StyledLoading,
  StyledInput,
} from '../../../components/Styled';

export default function NewArticleScreen({navigation, route}) {
  const [title, setTitle] = useState(
    route.params?.title ? route.params.title : '',
  );
  const [description, setDescription] = useState(
    route.params?.description ? route.params.description : '',
  );
  const [body, setBody] = useState(route.params?.body ? route.params.body : '');
  const [tags, setTags] = useState(
    route.params?.tags ? route.params.tags.join(' ') : '',
  );
  const [loading, setLoading] = useState(false);

  function onPress() {
    if (title && description && body) {
      setLoading(true);
      if (route.params?.editing) {
        api
          .updateArticle(route.params.slug, title, description, body)
          .then(newArticle => {
            navigation.navigate('Article', newArticle);
          })
          .catch(console.warn)
          .finally(() => setLoading(false));
      } else {
        api
          .setArticle(title, description, body, tags.split(' '))
          .then(newArticle => {
            navigation.navigate('Article', newArticle);
          })
          .catch(console.warn)
          .finally(() => setLoading(false));
      }

      setTitle('');
      setDescription('');
      setBody('');
      setTags('');
    }
  }

  if (loading) {
    return <StyledLoading text="Publishing..." />;
  }

  return (
    <ScrollView style={styles.container}>
      <StyledInput
        placeholder="Article Title"
        value={title}
        onChangeText={setTitle}
      />
      <StyledInput
        placeholder="What's this article about?"
        value={description}
        onChangeText={setDescription}
      />
      <StyledInput
        placeholder="Write your article"
        value={body}
        onChangeText={setBody}
        multiline
      />
      <StyledInput
        placeholder="Enter tags"
        value={tags}
        onChangeText={setTags}
        editable={!route.params?.editing}
      />
      <StyledButton
        title={route.params?.editing ? 'Update Article' : 'Publish Article'}
        onPress={onPress}
        disabled={!(title && description && body)}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
  },
});
