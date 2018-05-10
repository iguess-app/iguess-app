import React, { Component } from 'react';
import styled from 'styled-components';
import { TouchableOpacity } from 'react-native';
import { plus, plusDisabled, minus, minusDisabled } from '@assets/images';
import { GUESS_GUESSED_TEXT_COLOR, GUESS_DEFAULT_TEXT_COLOR, HEIGHT_REL, WIDTH_REL } from '@theme';

const DEFAULT_VALUE = '- - - -';

class Guess extends Component {
  constructor(props) {
    super(props);

    this.state = ({value: this._treatValue(props.value)});
  }

  _treatValue(propValue) {
    let value = -1;

    if(propValue !== undefined) {
      if(propValue < 0) {
        // Do nothing
        // Value remains -1
      } else if (propValue > 99) {
        // Max guess is 99
        value = 99;
      } else {
        value = propValue;
      }
    } else {
      // Do nothing
    }

    return value;
  }

  render() {

    const value = this.state.value;

    let plus = value < 99 ? <EnabledButton type="plus" /> : <DisabledButton type="plus" />;
    let minus = value > 0 ? <EnabledButton type="minus" /> : <DisabledButton type="minus" />;

    return (
      <Wrapper>
        {plus}
        <Value>{value > 0 ? value : DEFAULT_VALUE}</Value>
        {minus}
      </Wrapper>
    );
  }
}

const EnabledButton = ({ type, onPress }) => {

  const isPlus = type === 'plus';
  const source = isPlus ? plus : minus;
  const operation = isPlus ? 'ADD 1' : 'SUBTRACT 1';

  return (
    <TouchableOpacity onPress={() => console.log(operation)}>
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
