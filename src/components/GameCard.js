import React, { Component } from 'react';
import styled from 'styled-components';
import Team from '@components/Team';
import {
  AllowPredict,
  NotAllowPredict,
  Live,
  Finished,
} from '@components/CardCore';
import {
  CARD_BACKGROUND_COLOR,
  CARD_BORDER_COLOR,
  SCORE_BOARD_COLOR,
  SCORE_FONT_COLOR,
  INPUT_ERROR_COLOR,
  GUESS_DEFAULT_TEXT_COLOR,
  HEIGHT_REL,
  WIDTH_REL,
  RATIO,
} from '@theme';
import { TextBaseBold } from '@components/Scene';
import I18n from '../i18n';

export const gameStatus = {
  ALLOW_PREDICT: 'ALLOW_PREDICT',
  NOT_ALLOW_PREDICT: 'NOT_ALLOW_PREDICT',
  LIVE: 'LIVE',
  FINISHED: 'FINISHED',
};

// By default GameCard allow predictions
class GameCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      status: props.status ? props.status : gameStatus.ALLOW_PREDICT,
      error: false,
    };
  }

  _treatValue = value => {
    if (value > 99) {
      return 99;
    } else if (value < -1) {
      return -1;
    } else {
      return value;
    }
  };

  _defineCore = () => {
    const homeGuess = this._treatValue(this.props.homeGuess);
    const awayGuess = this._treatValue(this.props.awayGuess);
    const homeScore = this._treatValue(this.props.homeScore);
    const awayScore = this._treatValue(this.props.awayScore);

    switch (this.state.status) {
      case gameStatus.ALLOW_PREDICT:
        return (
          <AllowPredict
            homeGuess={homeGuess}
            awayGuess={awayGuess}
            scheduled={this.props.initTime}
            gameRef={this.props.gameRef}
            error={() => this.setState({ error: true })}
          />
        );
      case gameStatus.NOT_ALLOW_PREDICT:
        return (
          <NotAllowPredict
            homeGuess={homeGuess}
            awayGuess={awayGuess}
            scheduled={this.props.initTime}
          />
        );
      case gameStatus.LIVE:
        return (
          <Live
            homeGuess={homeGuess}
            awayGuess={awayGuess}
            homeScore={homeScore}
            awayScore={awayScore}
            time={this.props.time}
            percentageCompleted={this.props.percentageCompleted}
          />
        );
      case gameStatus.FINISHED:
        return (
          <Finished
            homeGuess={homeGuess}
            awayGuess={awayGuess}
            homeScore={homeScore}
            awayScore={awayScore}
          />
        );
      default:
        return null;
    }
  };

  _liveOrFinished = () => {
    if (
      this.state.status === gameStatus.FINISHED ||
      this.state.status === gameStatus.LIVE
    ) {
      return true;
    } else {
      return false;
    }
  };

  render() {
    const { homeTeam, awayTeam } = this.props;

    const core = this._defineCore();
    const error = true ? <Error /> : null;

    return (
      <Wrapper>
        {this._liveOrFinished() ? (
          <ScoreBoard score={this.props.pontuation} />
        ) : null}
        <Card style={cardShadow}>
          <HomeTeam
            name={homeTeam.shortName}
            image={{ uri: homeTeam.logo.mini }}
          />
          {core}
          <AwayTeam
            name={awayTeam.shortName}
            image={{ uri: awayTeam.logo.mini }}
          />
          {error}
        </Card>
      </Wrapper>
    );
  }
}

const ScoreBoard = ({ score }) => (
  <ScoreBoardWrapper>
    <Score>{score}</Score>
    <PointsText>
      {I18n.t(score === 1 ? 'point' : 'points').toUpperCase()}
    </PointsText>
  </ScoreBoardWrapper>
);

const Wrapper = styled.View`
  align-items: center;
`;

const ScoreBoardWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: ${92 * WIDTH_REL};
  height: ${26 * HEIGHT_REL};
  border-radius: ${26 * HEIGHT_REL};
  background-color: ${SCORE_BOARD_COLOR};
  top: ${13 * HEIGHT_REL};
  z-index: 1;
`;

const Score = styled(TextBaseBold)`
  font-size: ${16.8 * HEIGHT_REL};
  color: ${SCORE_FONT_COLOR};
  margin-right: ${4 * WIDTH_REL};
  margin-bottom: ${4 * HEIGHT_REL};
`;

const PointsText = styled(TextBaseBold)`
  font-size: ${12 * HEIGHT_REL};
  color: ${SCORE_FONT_COLOR};
`;

const HomeTeam = styled(Team)``;

const AwayTeam = styled(Team)``;

// Having problems with styled components + box-shadow in this version
// Didn't work on Android devices
const cardShadow = {
  shadowOpacity: 0.16,
  shadowColor: '#4D6980',
  shadowOffset: {
    width: 8,
    height: 16,
  },
  shadowRadius: 8,
};

const Card = styled.View`
  flex-direction: row;
  width: ${330 * WIDTH_REL};
  height: ${156 * HEIGHT_REL};
  margin-bottom: ${40 * HEIGHT_REL};
  border-color: ${CARD_BORDER_COLOR};
  background-color: ${CARD_BACKGROUND_COLOR};
  padding-vertical: ${20 * HEIGHT_REL};
  border-radius: ${4 * RATIO};
  border-width: ${1 * RATIO};
  align-self: center;
  align-items: center;
  justify-content: center;
`;

const Error = () => (
  <ErrorView>
    <ErrorTitle>Ooops!</ErrorTitle>
    <ErrorDescription>
      Não conseguimos enviar seu palpite, tente novamente.
    </ErrorDescription>
  </ErrorView>
);

const ErrorView = styled(Card)`
  flex-direction: column;
  background-color: white;
  opacity: 0.95;
  position: absolute;
`;

const ErrorTitle = styled.Text`
  color: ${INPUT_ERROR_COLOR};
  font-size: ${28 * HEIGHT_REL};
  font-weight: 800;
`;

const ErrorDescription = styled.Text`
  color: ${GUESS_DEFAULT_TEXT_COLOR};
  font-size: ${14 * HEIGHT_REL};
  margin-top: ${10 * HEIGHT_REL};
  text-align: center;
`;

export default GameCard;
