import React from 'react';
import { Dimensions } from 'react-native';
import styled from 'styled-components';
import { PRIMARY_BUTTON_COLOR, PRIMARY_BUTTON_TEXT_COLOR } from '@theme';

const {
  width,
  height
} = Dimensions.get('window');

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
  width: ${0.829*width};
  height: ${0.0819*height};
  border-radius: 38;
  background-color: ${PRIMARY_BUTTON_COLOR};
  align-items: center;
  justify-content: center;
`;

const TransparentTouchable = styled.TouchableOpacity`
  width: ${0.829*width};
  height: ${0.0819*height};
  border-radius: 38;
  border-style: solid;
  border-width: 2;
  border-color: white;
  background-color: rgba(42, 43, 86, 0.65);
  margin-top: 5%;
  align-items: center;
  justify-content: center;
`;

const Inative = styled.View`
  width: ${0.829*width};
  height: ${0.0819*height};
  border-radius: 38;
  background-color: ${PRIMARY_BUTTON_COLOR};
  opacity: 0.32;
  align-items: center;
  justify-content: center;
`

const ButtonText = styled.Text`
  font-size: 15;
  font-weight: bold;
  text-align: center;
  color: ${PRIMARY_BUTTON_TEXT_COLOR};
`;
