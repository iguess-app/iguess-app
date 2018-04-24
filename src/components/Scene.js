import React from 'react';
import { Dimensions } from 'react-native';
import styled from 'styled-components';
import { TouchableWithoutFeedback, Keyboard, View } from 'react-native';
import {
  TEXT_SECONDARY_SCENE,
  SETTINGS_TEXT_COLOR,
  SCENE_BACKGROUND_COLOR,
} from '@theme';

const {
  width,
  height
} = Dimensions.get('window');


export const SceneWrapper = props => {
  const { background, children } = props;

  return (
    <SceneBackground source={background}>
      {children}
    </SceneBackground>
  );
};

export const InputSceneWrapper = props => {
  const { background, children } = props;

  return (
    <SceneBackground source={background}>
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View>
        {children}
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

export const Content = styled.Text`
  font-size: 14;
  color: ${TEXT_SECONDARY_SCENE};
  margin-top: ${0.0239*height};
  padding-horizontal: ${0.0853*width};
`;

export const SceneDescription = styled.Text`
  font-size: 32;
  font-weight: bold;
  text-align: left;
  color: ${SETTINGS_TEXT_COLOR};
  padding-horizontal: ${0.0853*width};
  margin-top: ${0.0359*height};
`;
