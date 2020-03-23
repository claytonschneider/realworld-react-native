import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function SettingsScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text>Settings</Text>
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
