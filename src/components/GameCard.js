import React, { Component } from 'react';
import { Dimensions } from 'react-native';
import styled from 'styled-components';
import Team from '@components/Team';
import Guess from '@components/Guess';
import { arsenal, liverpool, vs } from '@assets/images';
import { getTimeFromDate, compareDateWithToday } from '../helpers/index';
import {
  CARD_BACKGROUND_COLOR,
  CARD_BORDER_COLOR,
  SCHEDULED_TIME_COLOR,
} from '@theme';

const {
  width,
  height
} = Dimensions.get('window');


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
  source: vs,
})`
  width: ${0.106*width};
  height: ${0.0779*height};
  resize-mode: contain;
  margin-top: 8;
`;

const ScheduledTime = styled.Text`
  font-size: 10;
  color: ${SCHEDULED_TIME_COLOR};
`;

const MidWrapper = styled.View`
  margin-horizontal: ${0.0266*width};
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
  width: ${0.882*width};
  height: ${0.216*height};
  margin-bottom: ${0.0599*height};
  border-color: ${CARD_BORDER_COLOR};
  background-color: ${CARD_BACKGROUND_COLOR}
  border-radius: 4;
  border-width: 1;
  align-self: center;
  justify-content: center;
`;

export default GameCard;
