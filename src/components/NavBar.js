import React from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components';
import { Actions } from 'react-native-router-flux';
import { chevronLeft } from '@assets/images';
import { setStatusBarStyle } from '../helpers';
import { HEADER_TEXT_COLOR, DEFAULT_BACKGROUND } from '@theme';

const NavBar = props => {
  const { title } = props;

  setStatusBarStyle('white');

  return (
    <NavWrapper source={DEFAULT_BACKGROUND}>
      <Back />
      <Title>{title.toUpperCase()}</Title>
    </NavWrapper>
  );
};

const Back = () => (
  <TouchableOpacity
    onPress={() => {
      Actions.pop();
    }}
  >
    <BackImage />
  </TouchableOpacity>
);

const NavWrapper = styled.ImageBackground`
  flex-direction: row;
  align-items: center;
  padding-top: 20;
  padding-left: 32;
  padding-right: 52;
  height: 80;
`;

const BackImage = styled.Image.attrs({
  source: chevronLeft,
})`
  width: 16;
  height: 16;
  resize-mode: contain;
`;

const Title = styled.Text`
  flex-direction: row;
  flex: 1;
  text-align: center;
  font-size: 14;
  font-weight: bold;
  color: ${HEADER_TEXT_COLOR};
`;

export default NavBar;