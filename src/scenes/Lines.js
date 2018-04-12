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
import { SELECT_LINE_PRIMARY_TEXT, DEFAULT_BACKGROUND } from '@theme';
import chevronDown from '@assets/images/chevron-down.png';

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
    let opacity = offset <= 0 ? 1 : 1 / (0.3 * offset);

    this.setState({ selectedOpacity: opacity });
  }

  render() {
    const { games, swipe } = this.props;

    return (
      <SceneWrapper background={DEFAULT_BACKGROUND}>
        <Navigation>
          <SettingsButton onPress={swipe} />
          <SecondarySelectedLine
            scroll={this.scroll}
            principalOpacity={this.state.selectedOpacity}
          />
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

const SecondarySelectedLine = props => {
  const { scroll, principalOpacity } = props;

  const opacity = principalOpacity => 1 - 2.5 * principalOpacity;

  if (principalOpacity < 0.2) {
    const initialPosition = { x: 0, y: 0, animated: true };
    return (
      <NavTouchable onPress={() => scroll.scrollTo(initialPosition)}>
        <NavText opacity={opacity(principalOpacity)}>Russian World Cup</NavText>
        <Chevron opacity={opacity(principalOpacity)} />
      </NavTouchable>
    );
  }

  return null;
};

const Navigation = styled.View`
  flex-direction: row;
  margin-top: 26;
  flex: 0.08;
`;

const NavTouchable = styled.TouchableOpacity`
  flex-direction: row;
  flex: 1;
  justify-content: flex-end;
  margin-top: 2;
  margin-right: 24;
`;

const NavText = styled.Text`
  font-size: 16;
  font-weight: bold;
  color: ${SELECT_LINE_PRIMARY_TEXT};
  margin-right: 16;
  opacity: ${props => props.opacity};
`;

const Chevron = styled.Image.attrs({
  source: chevronDown,
})`
  width: 14;
  margin-top: 4;
  resize-mode: contain;
`;

function mapStateToProps(state) {
  return {
    games: gamesSelectors.getGames(state),
  };
}

export default connect(mapStateToProps)(Lines);
