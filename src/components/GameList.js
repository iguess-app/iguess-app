import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import GameCard, { gameStatus } from './GameCard';
import styled from 'styled-components';
import { connect } from 'react-redux';
import * as linesActions from '@redux/lines/actions';
import {
  SCENE_BACKGROUND_COLOR,
  CARD_LIST_TITLE_COLOR,
  CARD_LIST_SUBTITLE_COLOR,
  WIDTH_REL,
  HEIGHT_REL,
} from '@theme';
import { clockwise, spinner } from '@assets/images';
import { TextBaseBold } from '@components/Scene';

class GameList extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatch(linesActions.fetchLine());
  }

  render() {
    const { games, loading, error } = this.props;

    if (loading) {
      return (
        <Wrapper>
          <Spinner />
        </Wrapper>
      );
    }

    return (
      <Wrapper>
        <Header first title="ALLOW PREDICT" subtitle="Domingo, 19 de Abril" />
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
        <Header
          title="NOT ALLOW PREDICT"
          subtitle="Segunda - Feira, 20 de Abril"
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
        <Header title="LIVE" subtitle="Segunda - Feira, 20 de Abril" refresh />
        <List
          data={this.props.games}
          renderItem={({ item }) => (
            <GameCard
              id={item.key}
              homeGuess={item.homeGuess}
              awayGuess={item.awayGuess}
              status={gameStatus.LIVE}
              homeScore={0}
              awayScore={0}
              time={"45'"}
              score={2}
            />
          )}
        />
        <Header title="FINISHED" subtitle="Terça - Feira, 21 de Abril" />
        <List
          data={this.props.games}
          renderItem={({ item }) => (
            <GameCard
              id={item.key}
              homeGuess={item.homeGuess}
              awayGuess={item.awayGuess}
              status={gameStatus.FINISHED}
              homeScore={0}
              awayScore={0}
              score={8}
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
  flex: 1;
  background-color: ${SCENE_BACKGROUND_COLOR};
  min-height: ${800 * HEIGHT_REL};
  margin-top: ${60 * HEIGHT_REL};
`;

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
  margin-bottom: ${6 * HEIGHT_REL};
  margin-horizontal: ${32 * WIDTH_REL};
`;

const Title = styled(TextBaseBold)`
  font-size: 28;
  color: ${CARD_LIST_TITLE_COLOR};
`;

const SubTitle = styled(TextBaseBold)`
  font-size: 12;
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

const Spinner = styled.Image.attrs({
  source: spinner,
})`
  width: ${44 * WIDTH_REL};
  height: ${42 * HEIGHT_REL};
  resize-mode: contain;
  align-self: center;
  margin-top: ${80 * HEIGHT_REL};
`;

const mapStateToProps = state => {
  return {
    games: state.lines.activeLine,
    loading: state.lines.loading,
    error: state.lines.error,
  };
};

export default connect(mapStateToProps)(GameList);
