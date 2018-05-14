import React, { Component } from 'react';
import styled from 'styled-components';
import Team from '@components/Team';
import Guess from '@components/Guess';
import Result from '@components/Result';
import { arsenal, liverpool, vs, whistle } from '@assets/images';
import {
  CARD_BACKGROUND_COLOR,
  CARD_BORDER_COLOR,
  SCHEDULED_TIME_COLOR,
  SCORE_BOARD_COLOR,
  SCORE_FONT_COLOR,
  HEIGHT_REL,
  WIDTH_REL,
} from '@theme';

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

  render() {
    const core = this._defineCore();

    return (
      <Wrapper>
        {this.state.status === gameStatus.FINISHED ? (
          <ScoreBoard score={this.props.score} />
        ) : null}
        <Card style={cardStyle}>
          <HomeTeam name="Arsenal" image={arsenal} />
          {core}
          <AwayTeam name="Liverpool" image={liverpool} />
        </Card>
      </Wrapper>
    );
  }
}

const AllowPredict = props => {
  const { scheduled, homeGuess, awayGuess } = props;

  return (
    <CardCore>
      <Guess value={homeGuess} />
      <MidWrapper>
        <Stadium>Old Trafford</Stadium>
        <ScheduledTime>{scheduled.toUpperCase()}</ScheduledTime>
        <VS />
      </MidWrapper>
      <Guess value={awayGuess} />
    </CardCore>
  );
};

const NotAllowPredict = props => {
  const { scheduled, homeGuess, awayGuess } = props;

  return (
    <CardCore>
      <Guess value={homeGuess} blocked />
      <MidWrapper>
        <ScheduledTime>{scheduled.toUpperCase()}</ScheduledTime>
        <VS />
      </MidWrapper>
      <Guess value={awayGuess} blocked />
    </CardCore>
  );
};

const Live = props => {
  const { homeGuess, awayGuess, homeScore, awayScore, time } = props;

  return (
    <CardCore>
      <Result guess={homeGuess} score={homeScore} />
      <MidWrapper>
        <TimeBox>{time}</TimeBox>
        <VS />
      </MidWrapper>
      <Result guess={awayGuess} score={awayScore} />
    </CardCore>
  );
};

const Finished = props => {
  const { homeGuess, awayGuess, homeScore, awayScore } = props;

  return (
    <CardCore>
      <Result guess={homeGuess} score={homeScore} />
      <MidWrapper>
        <Whistle />
        <VS />
      </MidWrapper>
      <Result guess={awayGuess} score={awayScore} />
    </CardCore>
  );
};

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

const Score = styled.Text`
  font-size: ${16.8 * HEIGHT_REL};
  font-weight: bold;
  color: ${SCORE_FONT_COLOR};
  margin-right: 4;
`;

const PointsText = styled.Text`
  font-size: 12;
  font-weight: bold;
  color: ${SCORE_FONT_COLOR};
`;

const Whistle = styled.Image.attrs({
  source: whistle,
})`
  width: 30;
  height: 30;
  resize-mode: contain;
`;

const TimeBox = ({ children }) => {
  return (
    <Box>
      <Time>{children}</Time>
    </Box>
  );
};

// Temporary
const Box = styled.View`
  width: 30;
  height: 30;
  border-width: 2;
  border-color: #694cfe;
  border-radius: 15;
  justify-content: center;
  align-items: center;
`;

const Time = styled.Text`
  font-size: 12;
  color: #4d6980;
`;

const CardCore = styled.View`
  flex-direction: row;
`;

const HomeTeam = styled(Team)`
  align-self: flex-start;
`;

const AwayTeam = styled(Team)``;

const VS = styled.Image.attrs({
  source: vs,
})`
  width: ${40 * WIDTH_REL};
  height: ${52 * HEIGHT_REL};
  resize-mode: contain;
  margin-top: 8;
`;

const Stadium = styled.Text`
  font-size: 8;
  opacity: 0.6;
  margin-bottom: 2;
`;

const ScheduledTime = styled.Text`
  font-size: 10;
  color: ${SCHEDULED_TIME_COLOR};
`;

const MidWrapper = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

// Having problems with styled components + box-shadow in this version
// Didn't work on Android devices
const cardStyle = {
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
  width: ${312 * WIDTH_REL};
  height: ${144 * HEIGHT_REL};
  margin-bottom: ${40 * HEIGHT_REL};
  border-color: ${CARD_BORDER_COLOR};
  background-color: ${CARD_BACKGROUND_COLOR}
  border-radius: 4;
  border-width: 1;
  align-self: center;
  justify-content: center;
`;

export default GameCard;
