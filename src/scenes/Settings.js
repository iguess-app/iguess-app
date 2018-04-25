import React from 'react';
import { TouchableOpacity, Alert } from 'react-native';
import styled from 'styled-components';
import { SceneWrapper } from '@components/Scene';
import { Actions } from 'react-native-router-flux';
import { conversation, closeSettings, blog, store, exit } from '@assets/images';
import { SETTINGS_TEXT_COLOR, SETTINGS_BORDER_COLOR, WIDTH_REL, HEIGHT_REL } from '@theme';

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

const _logoutAlert = () => {
  Alert.alert(
    'LOG OUT',
    'Are you sure you want to log out?',
    [{ text: 'YES', onPress: () => Actions.home()}, { text: 'Cancel' }],
    { cancelable: false },
  );
};

const Logout = () => {
  return (
    <LogoutTouchable onPress={() => _logoutAlert()}>
      <Icon source={exit} />
      <CustomText>Log out</CustomText>
    </LogoutTouchable>
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
  width: ${16*WIDTH_REL};
  height: ${16*HEIGHT_REL};
  margin-left: ${32*WIDTH_REL};
  margin-top: ${52*HEIGHT_REL};
`;

const Title = styled.Text`
  font-size: 24;
  font-weight: bold;
  color: ${SETTINGS_TEXT_COLOR};
  margin-top: ${40*HEIGHT_REL};
  margin-left: ${32*WIDTH_REL};
  margin-bottom: ${24*HEIGHT_REL};
`;

const TouchableView = styled.TouchableOpacity`
  flex-direction: row;
  height: ${72*HEIGHT_REL};
  border-top = solid;
  border-color: ${SETTINGS_BORDER_COLOR};
  border-top-width: 1;
  border-bottom-width: 1;
  align-items: center;
`;

const Icon = styled.Image`
  height: ${24*HEIGHT_REL};
  width: ${30*WIDTH_REL};
  resize-mode: contain;
  margin-left: ${32*WIDTH_REL};
`;

const CustomText = styled.Text`
  font-size: 14;
  font-weight: bold;
  color: ${SETTINGS_TEXT_COLOR};
  margin-left: ${20*WIDTH_REL};
`;

const LogoutTouchable = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  margin-top: ${216*HEIGHT_REL};
`;

export default Settings;
