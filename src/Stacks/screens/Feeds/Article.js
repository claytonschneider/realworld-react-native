import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function ArticleScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text>Article</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 3,
  },
});
