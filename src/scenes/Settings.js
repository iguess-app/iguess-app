import React from 'react';
import { TouchableOpacity, Dimensions } from 'react-native';
import styled from 'styled-components';
import { SceneWrapper } from '@components/Scene';
import { Actions } from 'react-native-router-flux';
import { conversation, closeSettings, blog, store, exit } from '@assets/images';
import { SETTINGS_TEXT_COLOR, SETTINGS_BORDER_COLOR } from '@theme';

const {
  width,
  height
} = Dimensions.get('window');

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
  width: ${0.0426*width};
  height: ${0.0239*height};
  margin-left: 8%;
  margin-top: ${0.0779*height};
`;

const Title = styled.Text`
  font-size: 24;
  font-weight: bold;
  color: ${SETTINGS_TEXT_COLOR};
  margin-top: ${0.06*height};
  margin-left: 8%;
  margin-bottom: ${0.03598*height};
`;

const TouchableView = styled.TouchableOpacity`
  flex-direction: row;
  height: ${0.11*height};
  border-top = solid;
  border-color: ${SETTINGS_BORDER_COLOR};
  border-top-width: 1;
  border-bottom-width: 1;
  align-items: center;
`;

const Icon = styled.Image`
  height: ${0.036*height};
  width: ${0.08*width};
  resize-mode: contain;
  margin-left: ${0.08*width};
`;

const CustomText = styled.Text`
  font-size: 14;
  font-weight: bold;
  color: ${SETTINGS_TEXT_COLOR};
  margin-left: ${0.053*width};
`;

const LogoutView = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  margin-top: ${0.32*height};
`;

export default Settings;
