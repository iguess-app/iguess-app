import React, { Component } from 'react';
import GameCard from './GameCard';
import styled from 'styled-components';

export default class GameList extends Component {
  render() {
    return (
      <List
        data={[{ key: 'Brazil' }, { key: 'Germany' }, { key: 'Italy' }]}
        renderItem={({ item }) => <GameCard name={item.key} />}
      />
    );
  }
}

const List = styled.FlatList`
  margin-top: 16;
`;
