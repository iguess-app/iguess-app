import React from 'react';
import styled from 'styled-components';
import {
  PRIMARY_BUTTON_COLOR,
  PRIMARY_BUTTON_TEXT_COLOR,
  HEIGHT_REL,
  WIDTH_REL,
} from '@theme';

export const MainButton = ({ text, onPress }) => (
  <MainTouchable onPress={() => onPress()}>
    <WhiteText>{text.toUpperCase()}</WhiteText>
  </MainTouchable>
);

export const WhiteBorderButton = ({ text, onPress }) => (
  <WhiteBorderTouchable onPress={() => onPress()}>
    <WhiteText>{text.toUpperCase()}</WhiteText>
  </WhiteBorderTouchable>
);

export const DarkBorderButton = ({ text, onPress }) => (
  <DarkBorderTouchable onPress={() => onPress()}>
    <DarkText>{text.toUpperCase()}</DarkText>
  </DarkBorderTouchable>
);

export const InativeButton = ({ text }) => (
  <Inative>
    <WhiteText>{text.toUpperCase()}</WhiteText>
  </Inative>
);

const MainTouchable = styled.TouchableOpacity`
  width: ${311 * WIDTH_REL};
  height: ${56 * HEIGHT_REL};
  border-radius: 38;
  background-color: ${PRIMARY_BUTTON_COLOR};
  align-items: center;
  justify-content: center;
`;

const WhiteBorderTouchable = styled.TouchableOpacity`
  width: ${311 * WIDTH_REL};
  height: ${56 * HEIGHT_REL};
  border-radius: 38;
  border-style: solid;
  border-width: 2;
  border-color: white;
  background-color: rgba(42, 43, 86, 0.65);
  margin-top: 5%;
  align-items: center;
  justify-content: center;
`;

const DarkBorderTouchable = styled(WhiteBorderTouchable)`
  background-color: white;
  border-color: #333333;
`;

const Inative = styled.View`
  width: ${311 * WIDTH_REL};
  height: ${56 * HEIGHT_REL};
  border-radius: 38;
  background-color: ${PRIMARY_BUTTON_COLOR};
  opacity: 0.32;
  align-items: center;
  justify-content: center;
`;

const WhiteText = styled.Text`
  font-family: 'KievitOffc-Bold';
  font-size: 15;
  text-align: center;
  color: ${PRIMARY_BUTTON_TEXT_COLOR};
`;

const DarkText = styled(WhiteText)`
  color: #333333;
`;
