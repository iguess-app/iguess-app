import React from 'react';
import styled from 'styled-components';
import { CARD_TEAM_NAME_COLOR, WIDTH_REL, HEIGHT_REL } from '@theme';
import { TextBaseBold } from '@components/Scene';

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
  align-items: center;
  justify-content: center;
  width: ${80 * WIDTH_REL};
  height: ${80 * HEIGHT_REL};
`;

const TeamName = styled(TextBaseBold)`
  opacity: 0.8;
  font-size: ${11 * HEIGHT_REL};
  margin-top: ${4 * HEIGHT_REL};
  color: ${CARD_TEAM_NAME_COLOR};
  text-align: center;
`;

const TeamImage = styled.Image`
  width: ${44 * WIDTH_REL};
  height: ${53 * HEIGHT_REL};
  resize-mode: contain;
`;

export default Team;
