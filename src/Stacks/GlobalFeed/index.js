import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default function GlobalFeedScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text>Global Feed</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 3,
    alignItems: 'center',
  },
});
