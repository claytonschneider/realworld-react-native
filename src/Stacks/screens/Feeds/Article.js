import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {Header} from './Header';

export default function ArticleScreen({navigation}) {
  const props = useRoute().params.props;
  const {description, body} = props;

  return (
    <View style={styles.container}>
      <Header {...props} follow />
      <ScrollView>
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.body}>{body}</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 7,
  },
  title: {
    fontSize: 32,
    padding: 10,
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
});
