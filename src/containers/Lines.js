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
  constructor(props) {
    super(props);
    this.state = { selectedOpacity: 1 };
  }

  componentDidMount() {
    this.props.dispatch(gamesActions.fetchGames());
    this.props.dispatch(gamesActions.makeGuess('Italy'));
  }

  _changeSelectedLineOpacity(event) {
    let offset = event.nativeEvent.contentOffset.y;
    let opacity = 1;

    if (offset <= 0) {
      opacity = 1;
    } else {
      opacity = 1 / (0.5 * offset);
    }

    this.setState({ selectedOpacity: opacity });
  }

  render() {
    const { games, swipe } = this.props;

    return (
      <SceneWrapper>
        <Navigation>
          <SettingsButton onPress={() => swipe()} />
        </Navigation>
        <ScrollWrapper
          onScroll={this._changeSelectedLineOpacity.bind(this)}
          scrollEventThrottle={16}
        >
          <SelectedLine
            season="2018"
            selectedLine="Russian World Cup"
            points="57"
            opacity={this.state.selectedOpacity}
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
