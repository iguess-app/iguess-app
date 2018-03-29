import React from 'react';
import styled from 'styled-components';
import arsenal from '@assets/images/arsenal.png';

const GameCard = props => {
  const { name } = props;

  return (
    <Card>
      <Team name="Arsenal" image={arsenal} />
    </Card>
  );
};

const Team = props => {
  const { name, image } = props;

  return (
    <TeamView>
      <TeamImage source={image} />
      <TeamName>{name}</TeamName>
    </TeamView>
  );
};

const TeamView = styled.View`
  margin-horizontal: 16;
  margin-top: 40;
`;

const TeamName = styled.Text`
  opacity: 0.4;
  font-size: 12;
  color: #4d6980;
`;

const TeamImage = styled.Image`
  width: 44;
  height: 53;
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

const CardName = styled.Text`
  color: black;
  margin: auto;
  font-weight: bold;
`;

export default GameCard;
