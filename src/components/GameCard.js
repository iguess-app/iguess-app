import React, { Component } from 'react';
import styled from 'styled-components';
import Team from '@components/Team';
import Guess from '@components/Guess';
import { arsenal, liverpool, versus } from '@assets/images';
import { getTimeFromDate, compareDateWithToday } from '../helpers/index';

import {
  CARD_BACKGROUND_COLOR,
  CARD_BORDER_COLOR,
  SCHEDULED_TIME_COLOR,
} from '@theme';

let mockedISODate = new Date().toISOString();

class GameCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { HomeGuess, AwayGuess, id } = this.props;

    return (
      <Card style={cardStyle}>
        <HomeTeam name="Arsenal" image={arsenal} />
        <Guess
          value={HomeGuess}
          onPress={operation =>
            console.log(operation, 'on', HomeGuess, '–– Card id:', id)
          }
        />
        <GameInfo scheduled={mockedISODate} />
        <Guess
          value={AwayGuess}
          onPress={operation =>
            console.log(operation, 'on', AwayGuess, '–– Card id:', id)
          }
        />
        <AwayTeam name="Liverpool" image={liverpool} />
      </Card>
    );
  }
}

const GameInfo = props => {
  const { scheduled } = props;

  let time = getTimeFromDate(scheduled);

  let comparison = compareDateWithToday(scheduled);

  if (comparison == 1) {
    time = 'TOMORROW';
  } else if (comparison == -1) {
    time = 'YESTERDAY';
  }

  return (
    <MidWrapper>
      <ScheduledTime>{time}</ScheduledTime>
      <VS />
    </MidWrapper>
  );
};

const HomeTeam = styled(Team)`
  align-self: flex-start;
`;

const AwayTeam = styled(Team)``;

const VS = styled.Image.attrs({
  source: versus,
})`
  width: 40;
  height: 52;
  resize-mode: contain;
  margin-left: auto;
  margin-right: auto;
  margin-top: 8;
`;

const ScheduledTime = styled.Text`
  font-size: 10;
  color: ${SCHEDULED_TIME_COLOR};
`;

const MidWrapper = styled.View`
  margin-left: 10;
  margin-right: 10;
  flex-direction: column;
  justify-content: center;
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
  width: 312;
  height: 144;
  margin-bottom: 40;
  border-color: ${CARD_BORDER_COLOR};
  background-color: ${CARD_BACKGROUND_COLOR}
  border-radius: 4;
  border-width: 1;
  align-self: center;
`;

export default GameCard;
