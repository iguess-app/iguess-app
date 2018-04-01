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
            id={item.key}
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
