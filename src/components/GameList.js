import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import GameCard, { gameStatus } from './GameCard';
import styled from 'styled-components';
import {
  SCENE_BACKGROUND_COLOR,
  CARD_LIST_TITLE_COLOR,
  CARD_LIST_SUBTITLE_COLOR,
  WIDTH_REL,
  HEIGHT_REL,
} from '@theme';
import { clockwise } from '@assets/images';
import { TextBaseBold } from '@components/Scene';

class GameList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { games, error } = this.props;

    if (error) {
      return (
        <Wrapper>
          <ErrorText>{error}</ErrorText>
        </Wrapper>
      );
    }

    return (
      <Wrapper>
        <Header title="HOJE" subtitle="Domingo, 19 de Abril" />
        <List
          data={games}
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
  flex: 1;
  background-color: ${SCENE_BACKGROUND_COLOR};
  min-height: ${420 * HEIGHT_REL};
  margin-top: ${60 * HEIGHT_REL};
  padding-top: ${20 * HEIGHT_REL};
`;

const Header = props => {
  const { title, subtitle, refresh } = props;

  return (
    <HeaderWrapper>
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
  margin-top: 0;
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

const ErrorText = styled(TextBaseBold)`
  margin-horizontal: ${32 * WIDTH_REL};
  align-self: center;
`;

export default GameList;
