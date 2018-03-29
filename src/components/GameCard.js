import React from 'react';
import styled from 'styled-components';
import arsenal from '@assets/images/arsenal.png';
import Team from '@components/Team';

const GameCard = props => {
  return (
    <Card>
      <Team name="Arsenal" image={arsenal} />
    </Card>
  );
};

const Card = styled.View`
  flex-direction: column;
  width: 312;
  height: 144;
  margin-bottom: 27;
  margin-horizontal: 32;
  border-color: rgba(149, 177, 205, 0.25);
  border-radius: 4;
  border-width: 1;
  border-style: solid;
`;

const CardName = styled.Text`
  color: black;
  margin: auto;
  font-weight: bold;
`;

export default GameCard;
