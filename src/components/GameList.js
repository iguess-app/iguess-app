import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import GameCard, { gameStatus } from './GameCard';
import styled from 'styled-components';
import { PastButton, ButtonPastContainer } from '@components/Button';
import { Actions } from 'react-native-router-flux';
import {
  SCENE_BACKGROUND_COLOR,
  CARD_LIST_TITLE_COLOR,
  CARD_LIST_SUBTITLE_COLOR,
  WIDTH_REL,
  HEIGHT_REL,
} from '@theme';
import { clockwise, spinner } from '@assets/images';
import { TextBaseBold } from '@components/Scene';
import { get } from '@helpers';
import { connect } from 'react-redux';
import { fetchLine } from '@redux/lines/actions';
import DeviceInfo from 'react-native-device-info';
import I18n from 'react-native-i18n';

class GameList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      previous: [],
      next: [],
      loadingNext: false,
      loadingPrevious: false,
    };
    this.firstRun = true;
  }

  componentDidMount() {
    if (this.props.prev) {
      this.loadNext();
    } else {
      this.loadPrevious();
    }
  }

  componentWillUpdate() {
    if (
      this.props.base.hasPastMatchDays &&
      this.props.prev &&
      (!this.posY || this.posY === 0 || (this.posY >= 60 && this.posY <= 61))
    ) {
      setTimeout(() => this.scroll.scrollTo({ x: 0, y: 60 }), 100);
    }
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

  loadPrevious(date) {
    this.setState({ loadingNext: true });

    if (this.props.base) {
      const isodate = date ? date : this.props.base.matchDayIsoDate;

      get(
        `https://iguess-666666.appspot.com/guessline/getGuessLine?userTimezone=${DeviceInfo.getTimezone()}&page=previous&dateReference=${isodate}`,
      ).then(response => {
        if (response.statusCode !== 404) {
          const previous = this.state.previous.concat(response);
          this.setState({ previous }, () => {
            setTimeout(() => this.setState({ loadingNext: false }), 2500);
          });
        } else {
          this.setState({ loadingNext: false });
        }
      });
    }
  }

  loadNext(date) {
    if (this.props.base) {
      this.setState({ loadingNext: true });

      const isodate = date ? date : this.props.base.matchDayIsoDate;

      get(
        `https://iguess-666666.appspot.com/guessline/getGuessLine?userTimezone=${DeviceInfo.getTimezone()}&page=next&dateReference=${isodate}`,
      ).then(response => {
        if (response.statusCode !== 404) {
          const next = this.state.next.concat(response);
          this.setState({ next }, () => {
            setTimeout(() => this.setState({ loadingNext: false }), 2500);
          });
        } else {
          this.setState({ loadingNext: false });
        }
      });
    }
  }

  _handleScroll({ contentOffset, contentSize }) {
    const { next, previous } = this.state;

    this.posY = contentOffset.y;

    const LOAD_NEXT_DISTANCE = 1200;
    const distanceBottom = contentSize.height - contentOffset.y;

    if (!this.state.loadingNext && !this.state.loadingPrevious) {
      if (distanceBottom < LOAD_NEXT_DISTANCE) {
        if (this.props.prev) {
          if (this.state.next.length > 0) {
            this.loadNext(next[next.length - 1].matchDayIsoDate);
          } else {
            this.loadNext();
          }
        } else {
          if (this.state.previous.length > 0) {
            this.loadPrevious(previous[previous.length - 1].matchDayIsoDate);
          } else {
            this.loadPrevious();
          }
        }
      }
    }
  }

  _renderMatchDay(matchDay) {
    return (
      <View key={`${matchDay.matchDayIsoDate}View`}>
        <Header
          key={`${matchDay.matchDayIsoDate}Header`}
          title={matchDay.matchDayHumanified.mainInfoDate}
          subtitle={matchDay.matchDayHumanified.subInfoDate}
        />
        <List
          key={`${matchDay.matchDayIsoDate}List`}
          data={matchDay.games}
          keyExtractor={this._keyExtractor}
          renderItem={({ item }) => this._renderCard(item)}
        />
      </View>
    );
  }

  // _handleSize = (width, height) => {
  //   const PREVIOUS_POINT = 300;
  //   if (this.posY && this.posY < PREVIOUS_POINT) {
  //     const position = this.posY + height - this.height;
  //     this.scroll.scrollTo({ x: 0, y: position, animated: false });
  //   }
  //   this.height = height;
  // };

  render() {
    const { base, loading } = this.props;

    if (loading || !this.state.previous || !this.state.next) {
      return (
        <ScrollWrapper>
          <LoadingAll />
        </ScrollWrapper>
      );
    }

    const nextSpinner = this.state.loadingNext ? <Loading /> : null;

    return (
      <ScrollWrapper
        innerRef={ref => (this.scroll = ref)}
        onScroll={({ nativeEvent }) => this._handleScroll(nativeEvent)}
        scrollEventThrottle={13}
        // onContentSizeChange={this._handleSize}
      >
        {this.props.prev &&
          base.hasPastMatchDays && (
            <ButtonPastContainer>
              <PastButton
                text={I18n.t('showPastMatchs')}
                onPress={() => Actions.push('previouslines')}
              />
            </ButtonPastContainer>
          )}
        {this.props.prev && (
          <Header
            title={base.matchDayHumanified.mainInfoDate}
            subtitle={base.matchDayHumanified.subInfoDate}
            onPressRefresh={() => this.props.dispatch(fetchLine())}
          />
        )}
        {this.props.prev && (
          <List
            data={base.games}
            keyExtractor={this._keyExtractor}
            renderItem={({ item }) => this._renderCard(item)}
          />
        )}
        {!this.props.prev &&
          this.state.previous.map(previousMatchDay =>
            this._renderMatchDay(previousMatchDay),
          )}
        {this.props.prev &&
          this.state.next.map(nextMatchDay =>
            this._renderMatchDay(nextMatchDay),
          )}

        {nextSpinner}
      </ScrollWrapper>
    );
  }
}

const List = styled.FlatList`
  margin-top: ${8 * HEIGHT_REL};
`;

const ScrollWrapper = styled.ScrollView`
  background-color: ${SCENE_BACKGROUND_COLOR};
  margin-top: ${16 * HEIGHT_REL};
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
  font-size: ${28 * HEIGHT_REL};
  color: ${CARD_LIST_TITLE_COLOR};
`;

const SubTitle = styled(TextBaseBold)`
  font-size: ${12 * HEIGHT_REL};
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

const LoadingAll = styled.Image.attrs({
  source: spinner,
})`
  width: ${44 * WIDTH_REL};
  height: ${42 * HEIGHT_REL};
  align-self: center;
  margin-top: ${120 * HEIGHT_REL}
  resize-mode: contain;
`;

const Loading = styled.Image.attrs({
  source: spinner,
})`
  width: ${44 * WIDTH_REL};
  height: ${42 * HEIGHT_REL};
  align-self: center;
  margin-vertical: ${15 * HEIGHT_REL}
  resize-mode: contain;
`;

export default connect()(GameList);
