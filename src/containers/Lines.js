/* @flow */

import React, { Component } from 'react';
import { SceneView } from '@components/Scene';
import GameList from '@components/GameList';
import { connect } from 'react-redux';
import * as gamesActions from '@redux/games/actions';
import * as gamesSelectors from '@redux/games/reducer';
import SelectedLine from '@components/SelectedLine';
import styled from 'styled-components';
import LineNavigation from './LineNavigation';
import { SceneWrapper, ScrollWrapper } from '@components/Scene';

class Lines extends Component {
  componentDidMount() {
    this.props.dispatch(gamesActions.fetchGames());
    this.props.dispatch(gamesActions.makeGuess('Italy'));
  }

  render() {
    const { games } = this.props;

    return (
      <SceneWrapper>
        <LineNavigation />
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

export default connect(mapStateToProps)(Lines);
