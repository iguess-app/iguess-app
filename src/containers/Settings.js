import React from 'react';
import { SceneWrapper, ScrollWrapper, Name } from '@components/Scene';
import styled from 'styled-components';
import close from '@assets/images/close-settings.png';
import { SETTINGS_TEXT_COLOR, SETTINGS_BORDER_COLOR } from '@theme';
import { TouchableOpacity } from 'react-native';
import conversation from '@assets/images/conversation.png';
import web from '@assets/images/web.png';
import blog from '@assets/images/blog.png';
import store from '@assets/images/store.png';

const Settings = props => {
  return (
    <SceneWrapper>
      <ScrollWrapper>
        <Close />
        <Title>SETTINGS</Title>
        <Touchable icon={conversation} text="Contact" />
        <Touchable icon={web} text="Languages" />
        <Touchable icon={blog} text="Terms and Conditions" />
        <Touchable icon={store} text="About us" />
      </ScrollWrapper>
    </SceneWrapper>
  );
};

const Touchable = props => {
  const { icon, text } = props;

  return (
    <TouchableOpacity>
      <TouchableView>
        <Icon source={icon} />
        <TouchableText>{text}</TouchableText>
      </TouchableView>
    </TouchableOpacity>
  );
};

const Close = styled.Image.attrs({
  source: close,
})`
  width: 16;
  height: 16;
  margin-left: 32;
`;

const Title = styled.Text`
  margin-top: 40;
  margin-left: 32;
  margin-bottom: 16;
  font-size: 24;
  font-weight: bold;
  color: ${SETTINGS_TEXT_COLOR};
`;

const TouchableView = styled.View`
  flex-direction: row;
  border-top = solid;
  border-color: ${SETTINGS_BORDER_COLOR};
  border-top-width: 1;
  border-bottom-width: 1;
  height: 72;
`;

const Icon = styled.Image`
  height: 24;
  resize-mode: contain;
  margin-left: 32;
  margin-top: 24;
`;

const TouchableText = styled.Text`
  font-size: 14;
  font-weight: bold;
  margin-left: 20;
  margin-top: 28;
  color: ${SETTINGS_TEXT_COLOR};
`;

export default Settings;
