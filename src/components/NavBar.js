import React from 'react';
import styled from 'styled-components';
import { Actions } from 'react-native-router-flux';
import { chevronLeft } from '@assets/images';
import { setStatusBarStyle } from '@helpers';
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
  <BackTouchable
    onPress={() => {
      Actions.pop();
    }}
  >
    <BackImage />
  </BackTouchable>
);

const NavWrapper = styled.ImageBackground`
  flex-direction: row;
  align-items: center;
  padding-top: 20;
  height: 80;
  z-index: 1;
`;

const BackImage = styled.Image.attrs({
  source: chevronLeft,
})`
  width: 16;
  height: 16;
  resize-mode: contain;
`;

const BackTouchable = styled.TouchableOpacity`
  padding-horizontal: 8%;
  padding-vertical: 10;
`;

const Title = styled.Text`
  font-family: 'KievitOffc';
  flex-direction: row;
  flex: 1;
  text-align: center;
  font-size: 14;
  font-weight: bold;
  color: ${HEADER_TEXT_COLOR};
  margin-right: 64;
`;

export default NavBar;
