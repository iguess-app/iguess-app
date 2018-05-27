import React from 'react';
import styled from 'styled-components';
import { Actions } from 'react-native-router-flux';
import { chevronLeft } from '@assets/images';
import { setStatusBarStyle } from '@helpers';
import {
  HEADER_TEXT_COLOR,
  DEFAULT_BACKGROUND,
  WIDTH_REL,
  HEIGHT_REL,
  RATIO,
} from '@theme';

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
  padding-top: ${20 * HEIGHT_REL};
  height: ${80 * HEIGHT_REL};
  z-index: 1;
`;

const BackImage = styled.Image.attrs({
  source: chevronLeft,
})`
  width: ${16 * RATIO};
  height: ${16 * RATIO};
  resize-mode: contain;
`;

const BackTouchable = styled.TouchableOpacity`
  padding-horizontal: ${32 * WIDTH_REL};
  padding-vertical: ${10 * HEIGHT_REL};
`;

const Title = styled.Text`
  font-family: 'KievitOffc-Bold';
  flex-direction: row;
  flex: 1;
  text-align: center;
  font-size: ${14 * RATIO};
  color: ${HEADER_TEXT_COLOR};
  margin-right: ${64 * WIDTH_REL};
`;

export default NavBar;
