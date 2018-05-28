import React from 'react';
import styled from 'styled-components';
import {
  PRIMARY_BUTTON_COLOR,
  PRIMARY_BUTTON_TEXT_COLOR,
  HEIGHT_REL,
  WIDTH_REL,
  RATIO,
} from '@theme';
import { TextBaseBold } from '@components/Scene';

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
  border-radius: ${38 * RATIO};
  background-color: ${PRIMARY_BUTTON_COLOR};
  align-items: center;
  justify-content: center;
`;

const WhiteBorderTouchable = styled.TouchableOpacity`
  width: ${311 * WIDTH_REL};
  height: ${56 * HEIGHT_REL};
  border-radius: ${38 * RATIO};
  border-style: solid;
  border-width: ${2 * RATIO};
  border-color: white;
  background-color: rgba(42, 43, 86, 0.65);
  margin-top: ${18 * HEIGHT_REL};
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
  border-radius: ${38 * RATIO};
  background-color: ${PRIMARY_BUTTON_COLOR};
  opacity: 0.32;
  align-items: center;
  justify-content: center;
`;

const WhiteText = styled(TextBaseBold)`
  font-size: ${15 * HEIGHT_REL};
  text-align: center;
  color: ${PRIMARY_BUTTON_TEXT_COLOR};
`;

const DarkText = styled(WhiteText)`
  color: #333333;
`;
