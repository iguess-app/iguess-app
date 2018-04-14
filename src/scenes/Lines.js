import React, { Component } from 'react';
import styled from 'styled-components';
import GameList from '@components/GameList';
import SelectedLine from '@components/SelectedLine';
import { SceneWrapper, ScrollWrapper } from '@components/Scene';
import SettingsButton from '@components/SettingsButton';
import { connect } from 'react-redux';
import * as gamesActions from '@redux/games/actions';
import * as gamesSelectors from '@redux/games/reducer';
import chevronDown from '@assets/images/chevron-down.png';
import { SELECT_LINE_PRIMARY_TEXT, DEFAULT_BACKGROUND } from '@theme';

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
            name="Russian World Cup"
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
            name="Russian World Cup"
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
  const { name, scroll, principalOpacity } = props;

  if (principalOpacity < 0.2) {
    const inversionConstant = 2.5;
    const inversalOpacity = opacity => 1 - inversionConstant * opacity;
    const initialPosition = { x: 0, y: 0, animated: true };

    return (
      <NavTouchable onPress={() => scroll.scrollTo(initialPosition)}>
        <NavText opacity={inversalOpacity(principalOpacity)}>{name}</NavText>
        <Chevron opacity={inversalOpacity(principalOpacity)} />
      </NavTouchable>
    );
  }

  return null;
};

const Navigation = styled.View`
  flex: 0.08;
  flex-direction: row;
  margin-top: 46;
`;

const NavTouchable = styled.TouchableOpacity`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
  margin-top: 2;
  margin-right: 24;
`;

const NavText = styled.Text`
  font-size: 16;
  font-weight: bold;
  color: ${SELECT_LINE_PRIMARY_TEXT};
  opacity: ${props => props.opacity};
  margin-right: 16;
`;

const Chevron = styled.Image.attrs({
  source: chevronDown,
})`
  width: 14;
  resize-mode: contain;
  margin-top: 4;
`;

function mapStateToProps(state) {
  return {
    games: gamesSelectors.getGames(state),
  };
}

export default connect(mapStateToProps)(Lines);
