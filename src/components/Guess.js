import React from 'react';
import styled from 'styled-components';
import { TouchableOpacity } from 'react-native';
import { plus, plusDisabled, minus, minusDisabled } from '@assets/images';
import { GUESS_GUESSED_TEXT_COLOR, GUESS_DEFAULT_TEXT_COLOR, HEIGHT_REL, WIDTH_REL } from '@theme';

const defaultValue = '- - - -';

const Guess = props => {
  let { value, onPress } = props;

  let plus = <EnabledButton type="plus" onPress={onPress} />;
  let minus = <EnabledButton type="minus" onPress={onPress} />;

  if (value < 0 || value === undefined || value === '') {
    value = defaultValue;
    minus = <DisabledButton type="minus" />;
  } else if (parseInt(value) >= 99) {
    value = '99';
    plus = <DisabledButton type="plus" />;
  }

  return (
    <Wrapper>
      {plus}
      <Value>{value}</Value>
      {minus}
    </Wrapper>
  );
};

const EnabledButton = props => {
  const { type, onPress } = props;

  const isPlus = type === 'plus';
  const source = isPlus ? plus : minus;
  const operation = isPlus ? 'ADD 1' : 'SUBTRACT 1';

  return (
    <TouchableOpacity onPress={() => onPress(operation)}>
      <ButtonImage source={source} />
    </TouchableOpacity>
  );
};

const DisabledButton = props => {
  const { type } = props;

  const source = type == 'plus' ? plusDisabled : minusDisabled;

  return <ButtonImage source={source} />;
};

const Wrapper = styled.View`
  align-self: center;
  align-items: center;
  margin-horizontal: ${8*WIDTH_REL};
  flex-direction: column;
`;

const ButtonImage = styled.Image`
  width: ${24*WIDTH_REL};
  height: ${24*HEIGHT_REL};
  margin-horizontal: ${10*WIDTH_REL};
  margin-vertical: ${16*HEIGHT_REL};
`;

const Value = styled.Text.attrs({
  guessed: props => (props.children !== defaultValue ? true : false),
})`
  font-size: ${props => (props.guessed ? 20 : 8)};
  margin-vertical: ${props => (props.guessed ? 8 : 15)};
  font-weight: bold;
  text-align: center;
  opacity: ${props => (props.guessed ? 0.9 : 0.6)};
  color: ${props =>
    props.guessed ? GUESS_GUESSED_TEXT_COLOR : GUESS_DEFAULT_TEXT_COLOR};
`;

export default Guess;
