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
import { SELECT_LINE_PRIMARY_TEXT } from '@theme';
import chevronDown from '@assets/images/chevron-down.png';
import { DEFAULT_BACKGROUND } from '@theme';

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

    const Touchable =
      this.state.selectedOpacity < 0.2 ? (
        <NavSelectedLine scroll={this.scroll} />
      ) : (
        undefined
      );

    return (
      <SceneWrapper source={DEFAULT_BACKGROUND}>
        <Navigation>
          <SettingsButton onPress={swipe} />
          {Touchable}
        </Navigation>
        <ScrollWrapper
          onScroll={this._changeSelectedLineOpacity.bind(this)}
          scrollEventThrottle={16}
          innerRef={ref => (this.scroll = ref)}
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

const NavSelectedLine = props => {
  const { scroll } = props;

  const initialPosition = { x: 0, y: 0, animated: true };
  return (
    <NavTouchable onPress={() => scroll.scrollTo(initialPosition)}>
      <NavText>Russian World Cup</NavText>
      <Chevron />
    </NavTouchable>
  );
};

function mapStateToProps(state) {
  return {
    games: gamesSelectors.getGames(state),
  };
}

const Navigation = styled.View`
  flex-direction: row;
  flex: 0.08;
`;

const NavTouchable = styled.TouchableOpacity`
  flex-direction: row;
  margin-top: 2;
  margin-left: 105;
`;

const NavText = styled.Text`
  font-size: 16;
  font-weight: bold;
  color: ${SELECT_LINE_PRIMARY_TEXT};
  margin-right: 16;
`;

const Chevron = styled.Image.attrs({
  source: chevronDown,
})`
  width: 14;
  resize-mode: contain;
  margin-top: 4;
`;

export default connect(mapStateToProps)(Lines);
