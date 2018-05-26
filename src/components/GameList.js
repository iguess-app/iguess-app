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
import { get } from '@helpers';

class GameList extends Component {
  constructor(props) {
    super(props);
    this.state = { previous: [], next: [] };
  }

  componentDidMount() {
    console.log('Request result', this.props.base);
    this.loadNext();
  }

  _keyExtractor = item => item.matchRef;

  _renderCard(item) {
    const {
      allowToPredict,
      started,
      ended,
      homeTeam,
      awayTeam,
      homeTeamScoreGuess,
      awayTeamScoreGuess,
    } = item;

    if (allowToPredict && !started && !ended) {
      // ALLOW TO PREDICT

      const gameRef = {
        matchRef: item.matchRef,
        championshipRef: this.props.base.championship.championshipRef,
      };

      return (
        <GameCard
          homeTeam={homeTeam}
          awayTeam={awayTeam}
          homeGuess={homeTeamScoreGuess}
          awayGuess={awayTeamScoreGuess}
          initTime={item.initTimeHumanified}
          gameRef={gameRef}
        />
      );
    } else if (!allowToPredict && !started && !ended) {
      // NOT ALLOW TO PREDICT
      return (
        <GameCard
          homeTeam={homeTeam}
          awayTeam={awayTeam}
          homeGuess={homeTeamScoreGuess}
          awayGuess={awayTeamScoreGuess}
          initTime={item.initTimeHumanified}
          status={gameStatus.NOT_ALLOW_PREDICT}
        />
      );
    } else if (!allowToPredict && started && !ended) {
      // LIVE
      return (
        <GameCard
          homeTeam={homeTeam}
          awayTeam={awayTeam}
          homeGuess={homeTeamScoreGuess}
          awayGuess={awayTeamScoreGuess}
          homeScore={item.homeTeamScore}
          awayScore={item.awayTeamScore}
          pontuation={item.matchPontuation}
          time={item.minutes}
          percentageCompleted={item.percentageCompleted}
          status={gameStatus.LIVE}
        />
      );
    } else if (!allowToPredict && started && ended) {
      // FINISHED
      return (
        <GameCard
          homeTeam={homeTeam}
          awayTeam={awayTeam}
          homeGuess={homeTeamScoreGuess}
          awayGuess={awayTeamScoreGuess}
          homeScore={item.homeTeamScore}
          awayScore={item.awayTeamScore}
          pontuation={item.matchPontuation}
          status={gameStatus.FINISHED}
        />
      );
    }

    // Don't render card
    return;
  }

  loadNext() {
    get(
      `https://iguess-666666.appspot.com/guessline/getGuessLine?userTimezone=America/Sao_Paulo&page=next&dateReference=${
        this.props.base.matchDayIsoDate
      }`,
    ).then(response => {
      const next = [response].concat(this.state.next);
      this.setState({ next }, () => console.log(this.state.next));
    });
  }

  render() {
    const { base } = this.props;

    return (
      <Wrapper>
        <Header
          title={base.matchDayHumanified.mainInfoDate}
          subtitle={base.matchDayHumanified.subInfoDate}
        />
        <List
          data={base.games}
          keyExtractor={this._keyExtractor}
          renderItem={({ item }) => this._renderCard(item)}
        />
        {this.state.next.map(nextMatchDay => {
          return (
            <View key={`${nextMatchDay.matchRef}View`}>
              <Header
                key={`${nextMatchDay.matchRef}Header`}
                title={nextMatchDay.matchDayHumanified.mainInfoDate}
                subtitle={nextMatchDay.matchDayHumanified.subInfoDate}
              />
              <List
                key={`${nextMatchDay.matchRef}List`}
                data={nextMatchDay.games}
                keyExtractor={this._keyExtractor}
                renderItem={({ item }) => this._renderCard(item)}
              />
            </View>
          );
        })}
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
