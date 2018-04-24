import React from 'react';
import { Dimensions } from 'react-native';
import styled from 'styled-components';
import { CARD_TEAM_NAME_COLOR } from '@theme';

const {
  width,
  height
} = Dimensions.get('window');

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
  margin-horizontal: ${0.04*width};
  margin-top: ${0.0599*height};
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
  width: ${0.117*width};
  height: ${0.0794*height};
  resize-mode: contain;
`;

export default Team;
