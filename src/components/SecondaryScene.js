import React from 'react';
import { SETTINGS_TEXT_COLOR } from '@theme';
import close from '@assets/images/close-settings.png';
import { Actions } from 'react-native-router-flux';
import styled from 'styled-components';
import { TouchableOpacity, View } from 'react-native';
import { SUBTEXT_SECONDARY_SCENE } from '@theme';

export const Header = props => {
  const { title } = props;

  return (
    <View>
      <TopWrapper>
        <Title>{title.toUpperCase()}</Title>
        <Close />
      </TopWrapper>
    </View>
  );
};

const Close = () => (
  <TouchableOpacity onPress={() => Actions.pop()}>
    <CloseImage />
  </TouchableOpacity>
);

export const Content = styled.Text`
  font-size: 14;
  color: ${SUBTEXT_SECONDARY_SCENE}
  margin-top: 10;
  padding-right: 32;
  padding-left: 32;
`;

const TopWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-left: 32;
  padding-right: 32;
`;

const Title = styled.Text`
  font-size: 14;
  font-weight: bold;
  color: ${SETTINGS_TEXT_COLOR};
`;

const CloseImage = styled.Image.attrs({
  source: close,
})`
  align-content: flex-end;
  width: 16;
  height: 16;
`;

export const SceneDescription = styled.Text`
  margin-top: 24;
  font-size: 32;
  font-weight: bold;
  text-align: left;
  color: ${SETTINGS_TEXT_COLOR};
  padding-left: 32;
  padding-right: 32;
`;

export const HeaderImage = styled.Image`
  opacity: 0.9;
  height: 160;
  width: 100%;
  margin-top: 24;
`;
