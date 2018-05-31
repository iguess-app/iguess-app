import React from 'react';
import styled from 'styled-components';
import { TouchableWithoutFeedback, Keyboard, View } from 'react-native';
import NavBar from '@components/NavBar';
import {
  TEXT_SECONDARY_SCENE,
  SETTINGS_TEXT_COLOR,
  SCENE_BACKGROUND_COLOR,
  WIDTH_REL,
  HEIGHT_REL,
  RATIO,
} from '@theme';

export const SceneWrapper = props => {
  const { background, children } = props;

  return <SceneBackground source={background}>{children}</SceneBackground>;
};

export const InputSceneWrapper = props => {
  const { background, children, title = 'UNTITLED', hideNavBar } = props;

  const nav = hideNavBar !== false ? <NavBar title={title} /> : null;

  return (
    <SceneBackground source={background}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View>
          {nav}
          <Scroll>{children}</Scroll>
        </View>
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

export const TextBase = styled.Text`
  font-family: 'KievitOffc';
`;

export const TextBaseBold = styled.Text`
  font-family: 'KievitOffc-Bold';
`;

export const Content = styled(TextBase)`
  font-size: ${16 * RATIO};
  line-height: ${1.5 * 16 * RATIO};
  color: ${TEXT_SECONDARY_SCENE};
  margin-top: ${16 * HEIGHT_REL};
  padding-horizontal: ${32 * WIDTH_REL};
`;

export const SceneDescription = styled(TextBaseBold)`
  font-size: ${26 * RATIO};
  line-height: ${1.29 * 26};
  text-align: left;
  color: ${SETTINGS_TEXT_COLOR};
  margin-horizontal: ${32 * WIDTH_REL};
  margin-top: ${24 * HEIGHT_REL};
`;

export const Scroll = styled.ScrollView`
  height: ${587 * HEIGHT_REL};
`;
