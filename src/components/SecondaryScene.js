import React from 'react';
import { SETTINGS_TEXT_COLOR } from '@theme';
import { Actions } from 'react-native-router-flux';
import styled from 'styled-components';
import { TouchableOpacity } from 'react-native';
import {
  TEXT_SECONDARY_SCENE,
  SECONDARY_SCENE_NAVBAR_COLOR,
  HEADER_TEXT_COLOR,
} from '@theme';
import chevronLeft from '@assets/images/chevron-left.png';

export const NavBar = props => {
  const { title } = props;

  return (
    <TopWrapper>
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

const TopWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  padding-top: 20;
  padding-left: 32;
  padding-right: 32;
  height: 80;
  background-color: ${SECONDARY_SCENE_NAVBAR_COLOR};
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
