import React, { Component } from 'react';
import GameCard from './GameCard';
import styled from 'styled-components';
import { SCENE_BACKGROUND_COLOR } from '../theme';

export default class GameList extends Component {
  render() {
    return (
      <Wrapper>
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
      </Wrapper>
    );
  }
}

const List = styled.FlatList`
  margin-top: 16;
`;

export const Wrapper = styled.ScrollView`
  margin-top: 60;
  width: 100%;
  flex: 1;
  background-color: ${SCENE_BACKGROUND_COLOR};
`;
