import React, {useState} from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import api from '../../../api';
import {
  StyledButton,
  StyledLoading,
  StyledInput,
} from '../../../components/Styled';

export default function NewArticleScreen({navigation}) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [body, setBody] = useState('');
  const [tags, setTags] = useState('');
  const [loading, setLoading] = useState(false);

  function onPress() {
    if (title && description && body) {
      setLoading(true);
      api
        .setArticle(title, description, body, tags.split(' '))
        .then(newArticle => {
          navigation.navigate('Article', newArticle);
        })
        .catch(console.warn)
        .finally(() => setLoading(false));
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
      />
      <StyledButton
        title="Publish Article"
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
