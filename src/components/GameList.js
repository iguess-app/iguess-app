import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import GameCard, { gameStatus } from './GameCard';
import styled from 'styled-components';
import { connect } from 'react-redux';
import * as gamesActions from '@redux/games/actions';
import * as gamesSelectors from '@redux/games/reducer';
import {
  SCENE_BACKGROUND_COLOR,
  CARD_LIST_TITLE_COLOR,
  CARD_LIST_SUBTITLE_COLOR,
  WIDTH_REL,
  HEIGHT_REL,
} from '@theme';
import { clockwise } from '@assets/images';

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
        <Header
          title="hoje"
          subtitle="Segunda - Feira, 20 de Abril"
          first
          refresh
        />
        <List
          data={this.props.games}
          renderItem={({ item }) => (
            <GameCard
              id={item.key}
              homeGuess={item.homeGuess}
              awayGuess={item.awayGuess}
              status={gameStatus.NOT_ALLOW_PREDICT}
            />
          )}
        />
        <Header title="Amanhã" subtitle="Terça - Feira, 21 de Abril" />
        <List
          data={this.props.games}
          renderItem={({ item }) => (
            <GameCard
              id={item.key}
              homeGuess={item.homeGuess}
              awayGuess={item.awayGuess}
            />
          )}
        />
      </Wrapper>
    );
  }
}

const List = styled.FlatList`
  margin-top: ${16 * HEIGHT_REL};
`;

export const Wrapper = styled.ScrollView`
  margin-top: ${60 * HEIGHT_REL};
  flex: 1;
  background-color: ${SCENE_BACKGROUND_COLOR};
`;

const mapStateToProps = state => {
  return {
    games: gamesSelectors.getGames(state),
  };
};

const Header = props => {
  const { title, subtitle, first, refresh } = props;

  return (
    <HeaderWrapper first={first}>
      <View>
        <Title>{title.toUpperCase()}</Title>
        <SubTitle>{subtitle.toUpperCase()}</SubTitle>
      </View>
      {refresh ? <Refresh /> : null}
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: ${props => (props.first ? 20 * HEIGHT_REL : 0)};
  margin-bottom: ${32 * HEIGHT_REL};
  margin-horizontal: ${32 * WIDTH_REL};
`;

const Title = styled.Text`
  font-size: 28;
  font-weight: bold;
  color: ${CARD_LIST_TITLE_COLOR};
`;

const SubTitle = styled.Text`
  font-size: 12;
  font-weight: bold;
  margin-top: ${7 * HEIGHT_REL};
  color: ${CARD_LIST_SUBTITLE_COLOR};
`;

const Refresh = ({ onPress }) => (
  <TouchableOpacity onPress={() => onPress}>
    <Clockwise />
  </TouchableOpacity>
);

const Clockwise = styled.Image.attrs({
  source: clockwise,
})`
  width: ${24 * WIDTH_REL};
  height: ${20.6 * HEIGHT_REL};
  resize-mode: contain;
`;

export default connect(mapStateToProps)(GameList);
