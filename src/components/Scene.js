import React from 'react';
import styled from 'styled-components';
import { TouchableWithoutFeedback, Keyboard, ScrollView } from 'react-native';
import {
  TEXT_SECONDARY_SCENE,
  SETTINGS_TEXT_COLOR,
  SCENE_BACKGROUND_COLOR,
  WIDTH_REL,
  HEIGHT_REL,
} from '@theme';
import { TextBase } from './wrapper';

export const SceneWrapper = props => {
  const { background, children } = props;

  return <SceneBackground source={background}>{children}</SceneBackground>;
};

export const InputSceneWrapper = props => {
  const { background, children } = props;

  return (
    <SceneBackground source={background}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <ScrollView>{children}</ScrollView>
      </TouchableWithoutFeedback>
    </SceneBackground>
  );
};

export NavBar from '@components/NavBar';

export const SceneBackground = styled.ImageBackground`
  flex: 1;
  width: 101%;
  background-color: ${SCENE_BACKGROUND_COLOR};
`;

export const Content = styled(TextBase)`
  font-size: 14;
  color: ${TEXT_SECONDARY_SCENE};
  margin-top: ${16 * HEIGHT_REL};
  padding-horizontal: ${32 * WIDTH_REL};
`;

export const SceneDescription = styled(TextBase)`
  font-size: 32;
  font-weight: bold;
  text-align: left;
  color: ${SETTINGS_TEXT_COLOR};
  padding-horizontal: ${32 * WIDTH_REL};
  margin-top: ${24 * HEIGHT_REL};
`;
