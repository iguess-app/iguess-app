import React, { Component } from 'react';
import { FlatList, Text } from 'react-native';

export default class GameList extends Component {
  render() {
    return (
      <FlatList
        data={[
          { key: 'Devin' },
          { key: 'Jackson' },
          { key: 'James' },
          { key: 'Joel' },
          { key: 'John' },
          { key: 'Jillian' },
          { key: 'Jimmy' },
          { key: 'Julie' },
        ]}
        renderItem={({ item }) => (
          <Text style={{ padding: 30, fontSize: 20, height: 44 }}>
            {item.key}
          </Text>
        )}
      />
    );
  }
}
