import React, { Component } from 'react';
import GameCard from './GameCard';
import styled from 'styled-components';

export default class GameList extends Component {
  render() {
    return (
      <List
        data={this.props.games}
        renderItem={({ item }) => (
          <GameCard
            name={item.key}
            HomeGuess={item.HomeGuess}
            AwayGuess={item.AwayGuess}
          />
        )}
      />
    );
  }
}

const List = styled.FlatList`
  margin-top: 16;
`;
