import React, {useState, useContext} from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import {StoreContext} from '../../../context';
import {CreateArticle} from '../../../api';
import {
  StyledButton,
  StyledLoading,
  StyledInput,
} from '../../../components/Styled';

export default function NewArticleScreen({navigation}) {
  const {user} = useContext(StoreContext);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [article, setArticle] = useState('');
  const [tags, setTags] = useState('');
  const [loading, setLoading] = useState(false);

  function onPress() {
    if (title && description && article) {
      setLoading(true);
      CreateArticle(user.token, title, description, article, tags.split(' '))
        .then(newArticle => {
          navigation.navigate('Article', newArticle);
        })
        .catch(console.warn)
        .finally(() => setLoading(false));
      setTitle('');
      setDescription('');
      setArticle('');
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
        value={article}
        onChangeText={setArticle}
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
});
