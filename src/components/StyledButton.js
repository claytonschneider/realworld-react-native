import React from 'react';
import {Button, View, StyleSheet} from 'react-native';

export function StyledButton({title, onPress, disabled}) {
  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <Button
          color="#5CB85C"
          title={title}
          onPress={onPress}
          disabled={disabled}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'center',
    alignContent: 'center',
    marginVertical: 5,
  },
  button: {
    width: '80%',
    marginHorizontal: '10%',
    borderRadius: 5,
  },
});
