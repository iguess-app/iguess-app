import React from 'react';
import styled from 'styled-components';
import arsenal from '@assets/images/arsenal.png';
import liverpool from '@assets/images/liverpool.png';
import Team from '@components/Team';
import Guess from '@components/Guess';
import versus from '@assets/images/vs.png';
import getTimeFromISO from '../helpers/index';
import {
  CARD_BACKGROUND_COLOR,
  CARD_BORDER_COLOR,
  SCHEDULED_TIME_COLOR,
} from '@theme';

let ISODate = new Date().toISOString();

const GameCard = () => {
  return (
    <Card>
      <HomeTeam name="Arsenal" image={arsenal} />
      <Guess />
      <GameInfo scheduled={ISODate} />
      <Guess value="100" />
      <AwayTeam name="Liverpool" image={liverpool} />
    </Card>
  );
};

const GameInfo = props => {
  const { scheduled } = props;
  const time = getTimeFromISO(scheduled);

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

const Card = styled.View`
  flex-direction: row;
  width: 312;
  height: 144;
  margin-bottom: 27;
  margin-horizontal: 32;
  border-color: ${CARD_BORDER_COLOR};
  background-color: ${CARD_BACKGROUND_COLOR};
  border-radius: 4;
  border-width: 1;
  border-style: solid;
`;

export default GameCard;
