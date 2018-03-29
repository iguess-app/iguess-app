import React from 'react';
import styled from 'styled-components';
import arsenal from '@assets/images/arsenal.png';
import liverpool from '@assets/images/liverpool.png';
import Team from '@components/Team';
import Guess from '@components/Guess';
import versus from '@assets/images/vs.png';

const GameCard = props => {
  return (
    <Card>
      <HomeTeam name="Arsenal" image={arsenal} />
      <Guess />
      <MidWrapper>
        <ScheduledTime>16H 45M</ScheduledTime>
        <VS />
      </MidWrapper>
      <AwayTeam name="Liverpool" image={liverpool} />
    </Card>
  );
};

const HomeTeam = styled(Team)`
  align-self: flex-start;
`;

const AwayTeam = styled(Team)`
  margin-left: 64;
`;

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
  color: #4d6980;
`;

const MidWrapper = styled.View`
  margin-left: 24;
  flex-direction: column;
  justify-content: center;
`;

const Card = styled.View`
  flex-direction: row;
  width: 312;
  height: 144;
  margin-bottom: 27;
  margin-horizontal: 32;
  border-color: rgba(149, 177, 205, 0.25);
  border-radius: 4;
  border-width: 1;
  border-style: solid;
`;

export default GameCard;
