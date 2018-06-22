import React from 'react';
import styled from 'styled-components';
import { Actions } from 'react-native-router-flux';
import { chevronLeftWhite, dots } from '@assets/images';
import { setStatusBarStyle } from '@helpers';
import {
  HEADER_TEXT_COLOR,
  DEFAULT_BACKGROUND,
  WIDTH_REL,
  HEIGHT_REL,
  RATIO,
} from '@theme';

const NavBar = props => {
  const { title, onPress } = props;

  setStatusBarStyle('white');

  return (
    <NavWrapper source={DEFAULT_BACKGROUND}>
      <Back onPress={onPress} />
      <Title>{title.toUpperCase()}</Title>
    </NavWrapper>
  );
};

export const NavBarWithMenu = props => {
  const { title, back, menu } = props;

  setStatusBarStyle('white');

  return (
    <NavWrapper source={DEFAULT_BACKGROUND}>
      <Back onPress={back} />
      <Title>{title.toUpperCase()}</Title>
      <Menu onPress={menu} />
    </NavWrapper>
  );
};

const Back = ({ onPress }) => (
  <BackTouchable onPress={() => (onPress ? onPress() : Actions.pop())}>
    <BackImage />
  </BackTouchable>
);

const Menu = ({ onPress }) => (
  <BackTouchable onPress={() => onPress()}>
    <MenuImage />
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
  source: chevronLeftWhite,
})`
  width: ${16 * RATIO};
  height: ${16 * RATIO};
  resize-mode: contain;
`;

const MenuImage = styled.Image.attrs({
  source: dots,
})`
  width: ${18 * RATIO};
  height: ${18 * RATIO};
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
  font-size: ${14 * HEIGHT_REL};
  color: ${HEADER_TEXT_COLOR};
  margin-right: ${64 * WIDTH_REL};
`;

export default NavBar;
