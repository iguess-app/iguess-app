import React, { Component } from 'react';
import styled from 'styled-components';
import Team from '@components/Team';
import {
  AllowPredict,
  NotAllowPredict,
  Live,
  Finished,
} from '@components/CardCore';
import { arsenal, liverpool } from '@assets/images';
import {
  CARD_BACKGROUND_COLOR,
  CARD_BORDER_COLOR,
  SCORE_BOARD_COLOR,
  SCORE_FONT_COLOR,
  HEIGHT_REL,
  WIDTH_REL,
} from '@theme';
import { TextBaseBold } from '@components/Scene';

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
    };
  }

  _defineCore = () => {
    const { homeGuess, awayGuess, homeScore, awayScore, time } = this.props;

    switch (this.state.status) {
      case gameStatus.ALLOW_PREDICT:
        return (
          <AllowPredict
            homeGuess={homeGuess}
            awayGuess={awayGuess}
            scheduled="16h 45m"
          />
        );
      case gameStatus.NOT_ALLOW_PREDICT:
        return (
          <NotAllowPredict
            homeGuess={homeGuess}
            awayGuess={awayGuess}
            scheduled="16h 45m"
          />
        );
      case gameStatus.LIVE:
        return (
          <Live
            homeGuess={homeGuess}
            awayGuess={awayGuess}
            homeScore={homeScore}
            awayScore={awayScore}
            time={time}
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
    const core = this._defineCore();

    return (
      <Wrapper>
        {this._liveOrFinished() ? (
          <ScoreBoard score={this.props.score} />
        ) : null}
        <Card style={cardShadow}>
          <HomeTeam name="Arsenal" image={arsenal} />
          {core}
          <AwayTeam name="Liverpool" image={liverpool} />
        </Card>
      </Wrapper>
    );
  }
}

const ScoreBoard = ({ score }) => (
  <ScoreBoardWrapper>
    <Score>{score}</Score>
    <PointsText>POINTS</PointsText>
  </ScoreBoardWrapper>
);

const Wrapper = styled.View`
  align-items: center;
`;

const ScoreBoardWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  width: ${92 * WIDTH_REL};
  height: ${26 * HEIGHT_REL};
  border-radius: ${26 * HEIGHT_REL};
  background-color: ${SCORE_BOARD_COLOR};
  top: ${13 * HEIGHT_REL};
  padding-horizontal: ${16 * WIDTH_REL};
  z-index: 1;
`;

const Score = styled(TextBaseBold)`
  font-size: ${16.8 * HEIGHT_REL};
  color: ${SCORE_FONT_COLOR};
  margin-right: 4;
`;

const PointsText = styled(TextBaseBold)`
  font-size: 12;
  color: ${SCORE_FONT_COLOR};
`;

const HomeTeam = styled(Team)`
  align-self: flex-start;
`;

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
  width: ${327 * WIDTH_REL};
  height: ${156 * HEIGHT_REL};
  margin-bottom: ${40 * HEIGHT_REL};
  border-color: ${CARD_BORDER_COLOR};
  background-color: ${CARD_BACKGROUND_COLOR};
  padding-vertical: 20;
  padding-horizontal: 20;
  border-radius: 4;
  border-width: 1;
  align-self: center;
  align-items: center;
`;

export default GameCard;
