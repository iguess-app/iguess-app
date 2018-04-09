import React from 'react';
import styled from 'styled-components';
import { SCENE_BACKGROUND_COLOR } from '../theme/index';
import { TouchableOpacity } from 'react-native';
import { SETTINGS_TEXT_COLOR } from '@theme';
import close from '@assets/images/close-settings.png';
import { Actions } from 'react-native-router-flux';

export const Name = styled.Text`
  color: black;
  font-size: 28;
  font-weight: bold;
`;

export const ScrollWrapper = styled.ScrollView`
  flex: 1;
`;

export const SceneWrapper = styled.ImageBackground`
  padding-top: 40;
  flex: 1;
  background-color: ${SCENE_BACKGROUND_COLOR};
`;

export const SceneHeader = props => {
  const { title } = props;

  return (
    <HeaderWrapper>
      <Title>{title.toUpperCase()}</Title>
      <TouchableOpacity onPress={() => Actions.pop()}>
        <CloseImage />
      </TouchableOpacity>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.View`
  flex-direction: row;
`;

const Title = styled.Text`
  font-size: 14;
  font-weight: bold;
  color: ${SETTINGS_TEXT_COLOR};
  margin-left: 32;
`;

const CloseImage = styled.Image.attrs({
  source: close,
})`
  width: 16;
  height: 16;
  margin-left: 224;
`;
