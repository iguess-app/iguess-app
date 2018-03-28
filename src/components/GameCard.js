import React from 'react';
import styled from 'styled-components';

const GameCard = props => {
  const { name } = props;

  return (
    <Card>
      <CardName>{name}</CardName>
    </Card>
  );
};

const Card = styled.View`
  width: 312;
  height: 144;
  margin-bottom: 27;
  marginhorizontal: 32;
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
