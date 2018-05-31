import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
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
  GREEN_SCOREBOARD,
  GRAY_SCOREBOARD,
  SCORE_FONT_COLOR,
  INPUT_ERROR_COLOR,
  GUESS_DEFAULT_TEXT_COLOR,
  TRY_AGAIN_SET_PREDICTION,
  HEIGHT_REL,
  WIDTH_REL,
  RATIO,
} from '@theme';
import { TextBaseBold, TextBase } from '@components/Scene';
import { warning } from '@assets/images';
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

    this.errorMsg = '';
  }

  componentDidUpdate() {
    if (this.state.error) {
      setTimeout(() => {
        this.setState({ error: false });
        this.errorMsg = '';
      }, 5000);
    }
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
            error={errorMsg => {
              this.errorMsg = errorMsg;
              this.setState({ error: true });
            }}
            ref={ref => (this.allowPredict = ref)}
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
    const error = this.state.error ? (
      <Error
        onPress={() => {
          this.setState({ error: false });
          this.allowPredict.update();
        }}
      >
        {this.errorMsg}
      </Error>
    ) : null;

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
  <ScoreBoardWrapper score={score}>
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
  background-color: ${props =>
    props.score > 0 ? GREEN_SCOREBOARD : GRAY_SCOREBOARD};
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
  border-radius: ${16 * RATIO};
  border-width: ${0.5 * RATIO};
  align-self: center;
  align-items: center;
  justify-content: center;
`;

const Error = ({ onPress, children }) => {
  if (children) {
    return (
      <ErrorView>
        <Warning />
        <ErrorTitle>{I18n.t('errorPredictionTitle')}</ErrorTitle>
        <ErrorDescription>{children}</ErrorDescription>
      </ErrorView>
    );
  }

  return (
    <ErrorView>
      <Warning />
      <ErrorTitle>{I18n.t('errorPredictionTitle')}</ErrorTitle>
      <ErrorDescription>
        {I18n.t('errorPredictionDescription')}
      </ErrorDescription>
      <TouchableOpacity onPress={onPress}>
        <TryAgainText>{I18n.t('errorPredictionButton')}</TryAgainText>
      </TouchableOpacity>
    </ErrorView>
  );
};

const ErrorView = styled(Card)`
  flex-direction: column;
  background-color: white;
  opacity: 0.95;
  position: absolute;
  padding-horizontal: ${32 * WIDTH_REL};
`;

const ErrorTitle = styled(TextBaseBold)`
  color: ${INPUT_ERROR_COLOR};
  font-size: ${28 * HEIGHT_REL};
  margin-top: ${4 * HEIGHT_REL};
`;

const ErrorDescription = styled(TextBase)`
  color: ${GUESS_DEFAULT_TEXT_COLOR};
  font-size: ${14 * HEIGHT_REL};
  margin-top: ${5 * HEIGHT_REL};
  text-align: center;
`;

const TryAgainText = styled(TextBaseBold)`
  color: ${TRY_AGAIN_SET_PREDICTION};
  font-size: ${14 * HEIGHT_REL};
  text-decoration-line: underline;
  margin-top: ${10 * HEIGHT_REL};
`;

const Warning = styled.Image.attrs({
  source: warning,
})`
  width: ${27 * WIDTH_REL};
  height: ${24 * HEIGHT_REL};
  resize-mode: contain;
`;

export default GameCard;
