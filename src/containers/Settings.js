import React from 'react';
import { SceneWrapper, ScrollWrapper, Name } from '@components/Scene';
import styled from 'styled-components';
import close from '@assets/images/close-settings.png';
import { SETTINGS_TEXT_COLOR } from '@theme';

const Settings = props => {
  return (
    <SceneWrapper>
      <ScrollWrapper>
        <Close />
        <Title>Settings</Title>
      </ScrollWrapper>
    </SceneWrapper>
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
  font-size: 24;
  margin-left: 32;
  font-weight: bold;
  color: ${SETTINGS_TEXT_COLOR};
`;

export default Settings;
