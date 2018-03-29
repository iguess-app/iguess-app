import React from 'react';
import styled from 'styled-components';
import arsenal from '@assets/images/arsenal.png';
import liverpool from '@assets/images/liverpool.png';
import Team from '@components/Team';
import Guess from '@components/Guess';

const GameCard = props => {
  return (
    <Card>
      <HomeTeam name="Arsenal" image={arsenal} />
      <Guess />
      <AwayTeam name="Liverpool" image={liverpool} />
    </Card>
  );
};

const HomeTeam = styled(Team)`
  align-self: flex-start;
`;

const AwayTeam = styled(Team)`
  margin-left: 136;
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
