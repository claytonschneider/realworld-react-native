import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

export default class Feed extends Component {
  renderItem(item) {
    return (
      <View style={{ flex: 1, height: 50, width: 50, backgroundColor: 'red', marginBottom: 20 }}>
        <Text>{item.key}</Text>
      </View>
    );
  }

  render() {
    return (
      <FlatList
        data={[{ key: 'a' }, { key: 'b' }, { key: 'c' }, { key: 'd' }, { key: 'sdf' }, { key: 'bsdf' }, { key: 'basdf' }, { key: 'b234' }, { key: '1b' }, { key: '3b' }, { key: 'b3' }, { key: 'bsdf3' }, { key: 'b234233' }, ]}
        renderItem={item => this.renderItem(item)}
      />
    );
  }
}
