import React, { Component } from 'react';
import styled from 'styled-components';
import Team from '@components/Team';
import Guess from '@components/Guess';
import Result from '@components/Result';
import { arsenal, liverpool, vs } from '@assets/images';
import {
  CARD_BACKGROUND_COLOR,
  CARD_BORDER_COLOR,
  SCHEDULED_TIME_COLOR,
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

  _defineMid = () => {
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
      default:
        return null;
    }
  };

  render() {
    const mid = this._defineMid();

    return (
      <Card style={cardStyle}>
        <HomeTeam name="Arsenal" image={arsenal} />
        {mid}
        <AwayTeam name="Liverpool" image={liverpool} />
      </Card>
    );
  }
}

const AllowPredict = props => {
  const { scheduled, homeGuess, awayGuess } = props;

  return (
    <AllowPredictWrapper>
      <Guess value={homeGuess} />
      <MidWrapper>
        <Stadium>Old Trafford</Stadium>
        <ScheduledTime>{scheduled.toUpperCase()}</ScheduledTime>
        <VS />
      </MidWrapper>
      <Guess value={awayGuess} />
    </AllowPredictWrapper>
  );
};

const NotAllowPredict = props => {
  const { scheduled, homeGuess, awayGuess } = props;

  return (
    <AllowPredictWrapper>
      <Guess value={homeGuess} blocked />
      <MidWrapper>
        <ScheduledTime>{scheduled.toUpperCase()}</ScheduledTime>
        <VS />
      </MidWrapper>
      <Guess value={awayGuess} blocked />
    </AllowPredictWrapper>
  );
};

const Live = props => {
  const { homeGuess, awayGuess, homeScore, awayScore, time } = props;

  return (
    <AllowPredictWrapper>
      <Result guess={homeGuess} score={homeScore} />
      <MidWrapper>
        <TimeBox>{time}</TimeBox>
        <VS />
      </MidWrapper>
      <Result guess={awayGuess} score={awayScore} />
    </AllowPredictWrapper>
  );
};

const TimeBox = ({ children }) => {
  return (
    <Box>
      <Time>{children}</Time>
    </Box>
  );
};

// Temporary
const Box = styled.View`
  width: 26;
  height: 26;
  border-width: 2;
  border-color: #694cfe;
  justify-content: center;
  align-items: center;
`;

const Time = styled.Text`
  font-size: 12;
  color: #4d6980;
`;

const AllowPredictWrapper = styled.View`
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
