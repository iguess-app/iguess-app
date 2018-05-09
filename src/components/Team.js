import React from 'react';
import styled from 'styled-components';
import { CARD_TEAM_NAME_COLOR, WIDTH_REL, HEIGHT_REL } from '@theme';

const Team = props => {
  const { name, image, style } = props;

  return (
    <TeamView style={style}>
      <TeamImage source={image} />
      <TeamName>{name}</TeamName>
    </TeamView>
  );
};

const TeamView = styled.View`
  margin-horizontal: ${8*WIDTH_REL};
  margin-top: ${40*HEIGHT_REL};
  align-items: center;
`;

const TeamName = styled.Text`
  opacity: 0.8;
  font-size: 12;
  font-weight: bold;
  margin-top: 4;
  color: ${CARD_TEAM_NAME_COLOR};
`;

const TeamImage = styled.Image`
  width: ${44*WIDTH_REL};
  height: ${53*HEIGHT_REL};
  resize-mode: contain;
`;

export default Team;