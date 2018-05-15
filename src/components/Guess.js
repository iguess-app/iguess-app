import React, { Component } from 'react';
import styled from 'styled-components';
import { TouchableOpacity } from 'react-native';
import { plus, plusDisabled, minus, minusDisabled } from '@assets/images';
import {
  GUESS_GUESSED_TEXT_COLOR,
  GUESS_DEFAULT_TEXT_COLOR,
  HEIGHT_REL,
  WIDTH_REL,
} from '@theme';

const DEFAULT_VALUE = '- - - -';
const MAX_GUESS = 99;

class Guess extends Component {
  constructor(props) {
    super(props);

    const isBlocked = props.blocked !== undefined ? props.blocked : false;

    this.state = { value: this._treatValue(props.value), blocked: isBlocked };
  }

  _treatValue(propValue) {
    let value = -1;

    if (propValue !== undefined) {
      if (propValue < 0) {
        // Do nothing
        // Value remains -1
      } else if (propValue > MAX_GUESS) {
        value = MAX_GUESS;
      } else {
        value = propValue;
      }
    } else {
      // Do nothing
    }

    return value;
  }

  _selectPlus(value) {
    return value < MAX_GUESS && !this.state.blocked ? (
      <EnabledButton
        type="plus"
        value={value}
        onPress={result => this.setState({ value: result })}
      />
    ) : (
      <DisabledButton type="plus" />
    );
  }

  _selectMinus(value) {
    return value >= 0 && !this.state.blocked ? (
      <EnabledButton
        type="minus"
        value={value}
        onPress={result => this.setState({ value: result })}
      />
    ) : (
      <DisabledButton type="minus" />
    );
  }

  render() {
    const value = this.state.value;

    return (
      <Wrapper>
        {this._selectPlus(value)}
        <Value>{value >= 0 ? value : DEFAULT_VALUE}</Value>
        {this._selectMinus(value)}
      </Wrapper>
    );
  }
}

const EnabledButton = ({ type, value, onPress }) => {
  const isPlus = type === 'plus';
  const source = isPlus ? plus : minus;
  const result = isPlus ? value + 1 : value - 1;

  return (
    <TouchableOpacity onPress={() => onPress(result)}>
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
  margin-horizontal: ${8 * WIDTH_REL};
  flex-direction: column;
`;

const ButtonImage = styled.Image`
  width: ${24 * WIDTH_REL};
  height: ${24 * HEIGHT_REL};
  margin-horizontal: ${10 * WIDTH_REL};
  margin-vertical: ${16 * HEIGHT_REL};
`;

const Value = styled.Text.attrs({
  guessed: props => (props.children !== DEFAULT_VALUE ? true : false),
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
