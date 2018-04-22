import React from 'react';
import styled from 'styled-components';
import { PRIMARY_BUTTON_COLOR, PRIMARY_BUTTON_TEXT_COLOR } from '@theme';

export const MainButton = props => {
  const { text, onPress } = props;

  return (
    <MainTouchable onPress={() => onPress()}>
      <ButtonText>{text.toUpperCase()}</ButtonText>
    </MainTouchable>
  );
};

export const TransparentButton = props => {
  const { text, onPress } = props;

  return (
    <TransparentTouchable onPress={() => onPress()}>
      <ButtonText>{text.toUpperCase()}</ButtonText>
    </TransparentTouchable>
  );
};

export const InativeButton = props => {
  const { text } = props;

  return (
    <Inative>
      <ButtonText>{text.toUpperCase()}</ButtonText>
    </Inative>
  )
}

const MainTouchable = styled.TouchableOpacity`
  width: 311px;
  height: 56px;
  border-radius: 38px;
  background-color: ${PRIMARY_BUTTON_COLOR};
  align-items: center;
`;

const TransparentTouchable = styled.TouchableOpacity`
  width: 311px;
  height: 56px;
  border-radius: 38px;
  background-color: rgba(42, 43, 86, 0.65);
  margin-top: 24;
  margin-bottom: 32;
  align-items: center;
  border-style: solid;
  border-width: 2;
  border-color: white;
`;

const Inative = styled.View`
  width: 311px;
  height: 56px;
  border-radius: 38px;
  background-color: ${PRIMARY_BUTTON_COLOR};
  opacity: 0.32;
  align-items: center;
`

const ButtonText = styled.Text`
  margin-top: 18;
  font-size: 15;
  font-weight: bold;
  color: ${PRIMARY_BUTTON_TEXT_COLOR};
`;
