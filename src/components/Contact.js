import React from 'react';
import { SceneWrapper, Name } from '@components/Scene';
import styled from 'styled-components';
import close from '@assets/images/close-settings.png';
import { TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';

const Contact = () => {
  return (
    <SceneWrapper>
      <Close />
      <Name>CONTACT</Name>
    </SceneWrapper>
  );
};

const Close = () => {
  return (
    <TouchableOpacity onPress={() => Actions.pop()}>
      <CloseImage />
    </TouchableOpacity>
  );
};

const CloseImage = styled.Image.attrs({
  source: close,
})`
  width: 16;
  height: 16;
  margin-left: 32;
`;

export default Contact;
