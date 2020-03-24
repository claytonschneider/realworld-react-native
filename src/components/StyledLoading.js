import React from 'react';
import {ActivityIndicator, View, StyleSheet, Text} from 'react-native';

export function StyledLoading({text = 'Loading...'}) {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#5CB85C" />
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    marginVertical: 5,
    color: '#5CB85C',
  },
});
