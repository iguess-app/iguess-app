/* @flow */

import React, { Component } from 'react';
import GameList from '@components/GameList';
import { connect } from 'react-redux';
import * as gamesActions from '@redux/games/actions';
import * as gamesSelectors from '@redux/games/reducer';
import SelectedLine from '@components/SelectedLine';
import { SceneWrapper, ScrollWrapper } from '@components/Scene';
import styled from 'styled-components';
import SettingsButton from '@components/SettingsButton';

class Lines extends Component {
  componentDidMount() {
    this.props.dispatch(gamesActions.fetchGames());
    this.props.dispatch(gamesActions.makeGuess('Italy'));
  }

  render() {
    const { games } = this.props;

    return (
      <SceneWrapper>
        <Navigation>
          <SettingsButton onPress={() => console.log('Settings')} />
        </Navigation>
        <ScrollWrapper>
          <SelectedLine
            season="2018"
            selectedLine="Russian World Cup"
            points="57"
          />
          <GameList games={games} />
        </ScrollWrapper>
      </SceneWrapper>
    );
  }
}

function mapStateToProps(state) {
  return {
    games: gamesSelectors.getGames(state),
  };
}

const Navigation = styled.View`
  flex-direction: row;
  flex: 0.05;
`;

export default connect(mapStateToProps)(Lines);
