import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
export default function YourFeedScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text>Your Feed</Text>
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
