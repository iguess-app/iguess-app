import React from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components';
import { SceneWrapper } from '@components/Scene';
import { Actions } from 'react-native-router-flux';
import { conversation, closeSettings, blog, store, exit } from '@assets/images';
import { SETTINGS_TEXT_COLOR, SETTINGS_BORDER_COLOR } from '@theme';

const Settings = props => {
  const { swipe } = props;

  return (
    <SceneWrapper>
      <Close onPress={swipe} />
      <Title>SETTINGS</Title>
      <TouchableRow
        icon={conversation}
        text="Support"
        onPress={() => Actions.support()}
      />
      <TouchableRow
        icon={blog}
        text="Terms and Conditions"
        onPress={() => Actions.terms()}
      />
      <TouchableRow
        icon={store}
        text="About us"
        onPress={() => Actions.about()}
      />
      <Logout />
    </SceneWrapper>
  );
};

const TouchableRow = props => {
  const { icon, text, onPress } = props;

  return (
    <TouchableView onPress={onPress}>
      <Icon source={icon} />
      <CustomText>{text}</CustomText>
    </TouchableView>
  );
};

const Logout = () => {
  return (
    <LogoutView>
      <Icon source={exit} />
      <CustomText>Log out</CustomText>
    </LogoutView>
  );
};

const Close = props => {
  const { onPress } = props;

  return (
    <TouchableOpacity onPress={() => onPress()}>
      <CloseImage />
    </TouchableOpacity>
  );
};

const CloseImage = styled.Image.attrs({
  source: closeSettings,
})`
  width: 16;
  height: 16;
  margin-left: 32;
  margin-top: 52;
`;

const Title = styled.Text`
  font-size: 24;
  font-weight: bold;
  color: ${SETTINGS_TEXT_COLOR};
  margin-top: 40;
  margin-left: 32;
  margin-bottom: 24;
`;

const TouchableView = styled.TouchableOpacity`
  flex-direction: row;
  height: 72;
  border-top = solid;
  border-color: ${SETTINGS_BORDER_COLOR};
  border-top-width: 1;
  border-bottom-width: 1;
`;

const Icon = styled.Image`
  height: 24;
  width: 30;
  resize-mode: contain;
  margin-left: 32;
  margin-top: 24;
`;

const CustomText = styled.Text`
  font-size: 14;
  font-weight: bold;
  color: ${SETTINGS_TEXT_COLOR};
  margin-left: 20;
  margin-top: 28;
`;

const LogoutView = styled.TouchableOpacity`
  flex-direction: row;
  margin-top: 216;
`;

export default Settings;
