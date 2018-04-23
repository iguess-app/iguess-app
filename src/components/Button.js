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
  min-width: 100%;
  min-height: 9%;
  border-radius: 38;
  background-color: ${PRIMARY_BUTTON_COLOR};
  align-items: center;
`;

const TransparentTouchable = styled.TouchableOpacity`
  min-width: 100%;
  min-height: 9%;
  border-radius: 38;
  border-style: solid;
  border-width: 2;
  border-color: white;
  background-color: rgba(42, 43, 86, 0.65);
  margin-top: 5%;
  align-items: center;
`;

const Inative = styled.View`
  min-width: 279;
  height: 56;
  border-radius: 38;
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
