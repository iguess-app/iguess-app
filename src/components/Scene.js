import React from 'react';
import styled from 'styled-components';
import { SCENE_BACKGROUND_COLOR } from '../theme/index';

export const Name = styled.Text`
  color: black;
  font-size: 28;
  font-weight: bold;
`;

export const ScrollWrapper = styled.ScrollView`
  flex: 1;
`;

export const SceneBackground = styled.ImageBackground`
  margin-top: 20;
  padding-top: 20;
  flex: 1;
  background-color: ${SCENE_BACKGROUND_COLOR};
`;

export const SceneWrapper = props => {
  const { background, children } = props;

  return (
    <SceneView>
      <SceneBackground source={background}>{children}</SceneBackground>
    </SceneView>
  );
};

const SceneView = styled.View`
  flex: 1;
  background-color: white;
`;
