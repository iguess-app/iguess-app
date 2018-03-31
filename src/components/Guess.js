import React from 'react';
import styled from 'styled-components';
import plus from '@assets/images/plus.png';
import plusDisabled from '@assets/images/plus-disabled.png';
import minusDisabled from '@assets/images/minus.png';
import minus from '@assets/images/minus-disabled.png';
import { TouchableOpacity, Image } from 'react-native';
import { GUESS_GUESSED_TEXT_COLOR, GUESS_DEFAULT_TEXT_COLOR } from '../theme';

const defaultValue = '- - - -';

const Guess = props => {
  let { value } = props;

  let plus = <EnabledButton type="plus" />;
  let minus = <EnabledButton type="minus" />;

  if (parseInt(value) <= 0 || value === undefined || '') {
    value = defaultValue;
    minus = <DisabledButton type="minus" />;
  } else if (parseInt(value) >= 99) {
    value = '99';
    plus = <DisabledButton type="plus" />;
  }

  return (
    <Wrapper>
      {plus}
      <Value>{value ? value : defaultValue}</Value>
      {minus}
    </Wrapper>
  );
};

const EnabledButton = props => {
  const { type } = props;

  const source = type === 'plus' ? plus : minus;

  return (
    <TouchableOpacity>
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
  margin-vertical: 20;
  margin-horizontal: 8;
  flex-direction: column;
`;

const ButtonImage = styled.Image`
  width: 24;
  height: 24;
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
