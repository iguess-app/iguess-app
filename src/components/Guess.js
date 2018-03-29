import React from 'react';
import styled from 'styled-components';
import plus from '@assets/images/plus.png';
import minus from '@assets/images/minus.png';
import { TouchableOpacity } from 'react-native';
import { GUESS_GUESSED_TEXT_COLOR, GUESS_DEFAULT_TEXT_COLOR } from '../theme';

const defaultValue = '- - - -';

const Guess = () => {
  return (
    <Wrapper>
      <TouchableImage source={plus} />
      <Value>{defaultValue}</Value>
      <TouchableImage source={minus} />
    </Wrapper>
  );
};

const TouchableImage = props => {
  const { source } = props;

  return (
    <TouchableOpacity>
      <ButtonImage source={source} />
    </TouchableOpacity>
  );
};

const Wrapper = styled.View`
  margin-horizontal: 8;
  flex-direction: column;
`;

const ButtonImage = styled.Image`
  margin-vertical: 20;
  width: 24;
  height: 24;
`;

const Value = styled.Text.attrs({
  guessed: props => (props.children !== defaultValue ? true : false),
})`
  font-size: 8;
  font-weight: bold;
  opacity: ${props => (props.guessed ? 1 : 0.6)};
  color: ${props =>
    props.guessed ? GUESS_GUESSED_TEXT_COLOR : GUESS_DEFAULT_TEXT_COLOR};
`;

export default Guess;
