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
  RATIO,
} from '@theme';
import { clockwise, spinner } from '@assets/images';
import { TextBaseBold } from '@components/Scene';
import { get } from '@helpers';
import { connect } from 'react-redux';
import { fetchLine } from '@redux/lines/actions';
import DeviceInfo from 'react-native-device-info';

class GameList extends Component {
  constructor(props) {
    super(props);
    this.state = { previous: [], next: [] };
  }

  componentWillMount() {
    this.loadNext();
    this.loadPrevious();
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

  loadPrevious() {
    get(
      `https://iguess-666666.appspot.com/guessline/getGuessLine?userTimezone=${DeviceInfo.getTimezone()}&page=previous&dateReference=${
        this.props.base.matchDayIsoDate
      }`,
    ).then(response => {
      if (response.statusCode !== 404) {
        const previous = [response].concat(this.state.previous);
        this.setState({ previous }, () =>
          console.log('Previous', this.state.previous),
        );
      } else {
        console.log('No previous games');
      }
    });
  }

  loadNext() {
    get(
      `https://iguess-666666.appspot.com/guessline/getGuessLine?userTimezone=${DeviceInfo.getTimezone()}&page=next&dateReference=${
        this.props.base.matchDayIsoDate
      }`,
    ).then(response => {
      if (response.statusCode !== 404) {
        const next = [response].concat(this.state.next);
        this.setState({ next }, () => console.log('Next', this.state.next));
      } else {
        console.log('No games next');
      }
    });
  }

  _renderMatchDay(matchDay) {
    return (
      <View key={`${matchDay.matchRef}View`}>
        <Header
          key={`${matchDay.matchRef}Header`}
          title={matchDay.matchDayHumanified.mainInfoDate}
          subtitle={matchDay.matchDayHumanified.subInfoDate}
        />
        <List
          key={`${matchDay.matchRef}List`}
          data={matchDay.games}
          keyExtractor={this._keyExtractor}
          renderItem={({ item }) => this._renderCard(item)}
        />
      </View>
    );
  }

  render() {
    const { base, loading } = this.props;

    if (loading || !this.state.previous || !this.state.next) {
      return (
        <Wrapper>
          <Spinner />
        </Wrapper>
      );
    }

    return (
      <Wrapper innerRef={ref => (this.scroll = ref)}>
        {this.state.previous.map(previousMatchDay =>
          this._renderMatchDay(previousMatchDay),
        )}
        <View
          onLayout={({ nativeEvent }) =>
            this.scroll.scrollTo({ y: nativeEvent.layout.y, animated: true })
          }
        >
          <Header
            title={base.matchDayHumanified.mainInfoDate}
            subtitle={base.matchDayHumanified.subInfoDate}
            onPressRefresh={() => this.props.dispatch(fetchLine())}
          />
        </View>
        <List
          data={base.games}
          keyExtractor={this._keyExtractor}
          renderItem={({ item }) => this._renderCard(item)}
        />
        {this.state.next.map(nextMatchDay =>
          this._renderMatchDay(nextMatchDay),
        )}
      </Wrapper>
    );
  }
}

const List = styled.FlatList`
  margin-top: ${16 * HEIGHT_REL};
`;

export const Wrapper = styled.ScrollView`
  background-color: ${SCENE_BACKGROUND_COLOR};
  margin-top: ${60 * HEIGHT_REL};
  padding-top: ${20 * HEIGHT_REL};
`;

const Header = props => {
  const { title, subtitle, onPressRefresh } = props;

  return (
    <HeaderWrapper>
      <View>
        <Title>{title.toUpperCase()}</Title>
        <SubTitle>{subtitle.toUpperCase()}</SubTitle>
      </View>
      {onPressRefresh ? <Refresh onPress={() => onPressRefresh()} /> : null}
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${6 * HEIGHT_REL};
  margin-horizontal: ${32 * WIDTH_REL};
`;

const Title = styled(TextBaseBold)`
  font-size: ${28 * RATIO};
  color: ${CARD_LIST_TITLE_COLOR};
`;

const SubTitle = styled(TextBaseBold)`
  font-size: ${12 * RATIO};
  margin-top: ${7 * HEIGHT_REL};
  color: ${CARD_LIST_SUBTITLE_COLOR};
`;

const Refresh = ({ onPress }) => (
  <TouchableOpacity onPress={() => onPress()}>
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
  align-self: center;
  margin-top: ${120 * HEIGHT_REL}
  resize-mode: contain;
`;

export default connect()(GameList);
