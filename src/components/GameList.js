import React, { Component } from 'react';
import GameCard from './GameCard';
import styled from 'styled-components';
import { connect } from 'react-redux';
import * as gamesActions from '@redux/games/actions';
import * as gamesSelectors from '@redux/games/reducer';
import { SCENE_BACKGROUND_COLOR } from '../theme';

class GameList extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatch(gamesActions.fetchGames());
  }

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
  flex: 1;
  background-color: ${SCENE_BACKGROUND_COLOR};
`;

const mapStateToProps = state => {
  return {
    games: gamesSelectors.getGames(state),
  };
}

export default connect(mapStateToProps)(GameList);