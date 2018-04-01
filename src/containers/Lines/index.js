/* @flow */

import React, { Component } from 'react';
import Wrapper from '@components/Wrapper';
import { View } from '@components/Scene';
import GameList from '@components/GameList';
import { connect } from 'react-redux';
import * as gamesActions from '@redux/games/actions';
import * as gamesSelectors from '@redux/games/reducer';

class Lines extends Component {
  componentDidMount() {
    this.props.dispatch(gamesActions.fetchGames());
  }

  render() {
    const { children, games } = this.props;

    return (
      <Wrapper>
        {children}
        <View>
          <GameList games={games} />
        </View>
      </Wrapper>
    );
  }
}

function mapStateToProps(state) {
  return {
    games: gamesSelectors.getGames(state),
  };
}

export default connect(mapStateToProps)(Lines);
