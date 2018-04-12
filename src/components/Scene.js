import React from 'react';
import styled from 'styled-components';
import { SCENE_BACKGROUND_COLOR, STATUS_BAR_DEFAULT_COLOR } from '@theme';

export const ScrollWrapper = styled.ScrollView`
  flex: 1;
`;

export const SceneBackground = styled.ImageBackground`
  margin-top: 20;
  flex: 1;
  width: 101%;
  background-color: ${SCENE_BACKGROUND_COLOR};
`;

export const SceneWrapper = props => {
  const { background, children, statusColor } = props;

  return (
    <SceneView color={statusColor}>
      <SceneBackground source={background}>{children}</SceneBackground>
    </SceneView>
  );
};

const SceneView = styled.View`
  flex: 1;
  background-color: ${props =>
    props.color ? props.color : STATUS_BAR_DEFAULT_COLOR};
`;
