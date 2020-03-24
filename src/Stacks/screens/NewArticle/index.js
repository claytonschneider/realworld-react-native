import React, {useState, useContext} from 'react';
import {StyleSheet, TextInput, ScrollView} from 'react-native';
import {StoreContext} from '../../../context';
import {CreateArticle} from '../../../api';
import {StyledButton} from '../../../components/StyledButton';

export default function NewArticleScreen({navigation}) {
  const {token} = useContext(StoreContext);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [article, setArticle] = useState('');
  const [tags, setTags] = useState('');

  function onPress() {
    if (title && description && article) {
      CreateArticle(token, title, description, article, tags.split(' '))
        .then(console.log)
        .catch(console.warn);
      setTitle('');
      setDescription('');
      setArticle('');
      setTags('');
    }
  }

  return (
    <ScrollView style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Article Title"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={styles.input}
        placeholder="What's this article about?"
        value={description}
        onChangeText={setDescription}
      />
      <TextInput
        style={styles.input}
        placeholder="Write your article"
        value={article}
        onChangeText={setArticle}
        multiline
      />
      <TextInput
        style={styles.input}
        placeholder="Enter tags"
        value={tags}
        onChangeText={setTags}
      />
      <StyledButton
        title="Publish Article"
        onPress={onPress}
        disabled={!(title && description && article)}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
  },
  input: {
    borderWidth: 1,
    padding: 5,
    margin: 5,
    borderRadius: 5,
    borderColor: 'rgba(0, 0, 0, 0.30)',
  },
});
