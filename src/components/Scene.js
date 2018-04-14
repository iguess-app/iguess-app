import React from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components';
import { Actions } from 'react-native-router-flux';
import chevronLeft from '@assets/images/chevron-left.png';
import {
  TEXT_SECONDARY_SCENE,
  HEADER_TEXT_COLOR,
  DEFAULT_BACKGROUND,
  SETTINGS_TEXT_COLOR,
  SCENE_BACKGROUND_COLOR,
} from '@theme';

export const SceneBackground = styled.ImageBackground`
  flex: 1;
  width: 101%;
  background-color: ${SCENE_BACKGROUND_COLOR};
`;

export const SceneWrapper = props => {
  const { background, children } = props;

  return <SceneBackground source={background}>{children}</SceneBackground>;
};

export const NavBar = props => {
  const { title } = props;

  return (
    <TopWrapper source={DEFAULT_BACKGROUND}>
      <Back />
      <Title>{title.toUpperCase()}</Title>
    </TopWrapper>
  );
};

const Back = () => (
  <TouchableOpacity onPress={() => Actions.pop()}>
    <BackImage />
  </TouchableOpacity>
);

const TopWrapper = styled.ImageBackground`
  flex-direction: row;
  align-items: center;
  padding-top: 20;
  padding-left: 32;
  padding-right: 32;
  height: 80;
`;

export const Content = styled.Text`
  font-size: 14;
  color: ${TEXT_SECONDARY_SCENE}
  margin-top: 16;
  padding-right: 32;
  padding-left: 32;
`;

const Title = styled.Text`
  flex-direction: row;
  flex: 1;
  text-align: center;
  font-size: 14;
  font-weight: bold;
  color: ${HEADER_TEXT_COLOR};
`;

const BackImage = styled.Image.attrs({
  source: chevronLeft,
})`
  width: 16;
  height: 16;
  resize-mode: contain;
`;

export const SceneDescription = styled.Text`
  font-size: 32;
  font-weight: bold;
  text-align: left;
  color: ${SETTINGS_TEXT_COLOR};
  padding-left: 32;
  padding-right: 32;
  margin-top: 24;
`;
