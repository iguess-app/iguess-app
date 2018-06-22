import React from 'react';
import styled from 'styled-components';
import {
  PRIMARY_BUTTON_COLOR,
  PRIMARY_BUTTON_TEXT_COLOR,
  HEIGHT_REL,
  WIDTH_REL,
  RATIO,
} from '@theme';
import { plusIcon } from '@assets/images';
import { TextBaseBold } from '@components/Scene';

export const MainButton = ({ text, onPress, isDisable }) => (
  <MainTouchable
    isDisable={isDisable}
    onPress={isDisable ? null : () => onPress()}
  >
    <WhiteText>{text.toUpperCase()}</WhiteText>
  </MainTouchable>
);

export const MainIconButton = ({ text, onPress }) => (
  <MainIconTouchable onPress={() => onPress()}>
    <PlusIcon />
    <WhiteText>{text.toUpperCase()}</WhiteText>
  </MainIconTouchable>
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

const PlusIcon = styled.Image.attrs({
  source: plusIcon,
})`
  width: ${16 * WIDTH_REL};
  height: ${16 * HEIGHT_REL};
  margin-right: ${10 * WIDTH_REL};
`;

const MainIconTouchable = styled.TouchableOpacity`
  width: ${311 * WIDTH_REL};
  height: ${56 * HEIGHT_REL};
  border-radius: ${38 * RATIO};
  background-color: ${PRIMARY_BUTTON_COLOR};
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const MainTouchable = styled.TouchableOpacity`
  width: ${311 * WIDTH_REL};
  height: ${56 * HEIGHT_REL};
  border-radius: ${38 * RATIO};
  background-color: ${props =>
    props.isDisable ? '#c6ccd2' : PRIMARY_BUTTON_COLOR};
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

export const ButtonPastContainer = styled.View`
  align-items: center;
  justify-content: center;
`;

export const PastButton = ({ text, onPress }) => (
  <GrayBorderTouchable onPress={() => onPress()}>
    <GrayText>{text.toUpperCase()}</GrayText>
  </GrayBorderTouchable>
);

const GrayBorderTouchable = styled.TouchableOpacity`
  width: ${167 * WIDTH_REL};
  height: ${40 * HEIGHT_REL};
  border-radius: ${28 * RATIO};
  border: solid 0.5px rgba(149, 177, 205, 0.48);
  background-color: #fff;
  margin-top: ${12 * HEIGHT_REL};
  margin-bottom: ${12 * HEIGHT_REL};
  align-items: center;
  justify-content: center;
`;

const GrayText = styled(TextBaseBold)`
  font-size: ${10 * HEIGHT_REL};
  text-align: center;
  color: #7e7e7e;
`;
