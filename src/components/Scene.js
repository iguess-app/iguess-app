import React from 'react';
import styled from 'styled-components';
import { SCENE_BACKGROUND_COLOR } from '@theme';

export const ScrollWrapper = styled.ScrollView`
  flex: 1;
`;

export const SceneBackground = styled.ImageBackground`
  flex: 1;
  width: 101%;
  background-color: ${SCENE_BACKGROUND_COLOR};
`;

export const SceneWrapper = props => {
  const { background, children } = props;

  return <SceneBackground source={background}>{children}</SceneBackground>;
};
