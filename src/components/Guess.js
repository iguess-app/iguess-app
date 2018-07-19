import React, { Component } from 'react';
import styled from 'styled-components';
import { TouchableOpacity } from 'react-native';
import Appsee from 'react-native-appsee';
import { plus, plusDisabled, minus, minusDisabled } from '@assets/images';
import { GUESS_GUESSED_TEXT_COLOR, HEIGHT_REL, WIDTH_REL } from '@theme';
import { TextBaseBold } from '@components/Scene';

const DEFAULT_VALUE = '- - - -';
const MAX_GUESS = 99;

class Guess extends Component {
  constructor(props) {
    super(props);

    this.state = {
      blocked: props.blocked,
      value: this._treatValue(props.value),
    };
  }

  componentWillReceiveProps(props) {
    this.setState({
      value: this._treatValue(props.value),
      blocked: props.blocked,
    });
  }

  _treatValue(propValue) {
    let value = -1;

    if (propValue !== undefined) {
      if (propValue < 0 || undefined) {
        // Do nothing
        // Value remains -1
      } else if (propValue > MAX_GUESS) {
        value = MAX_GUESS;
      } else {
        value = propValue;
      }
    } else {
      // Do nothing
      // Value remains -1
    }

    return value;
  }

  _selectPlus(value) {
    return value < MAX_GUESS && !this.state.blocked ? (
      <EnabledButton
        type="plus"
        value={value}
        onPress={result => {
          this.setState({ value: result }, () => {
            Appsee.addEvent('plusButton');
            return this.props.updateCore();
          });
        }}
      />
    ) : (
      <DisabledButton type="plus" />
    );
  }

  _selectMinus(value) {
    return value > 0 && !this.state.blocked ? (
      <EnabledButton
        type="minus"
        value={value}
        onPress={result =>
          this.setState({ value: result }, () => {
            Appsee.addEvent('minusButton');
            this.props.updateCore();
          })
        }
      />
    ) : (
      <DisabledButton type="minus" />
    );
  }

  getValue() {
    return this.state.value;
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
  const image = isPlus ? plus : minus;
  const result = isPlus ? value + 1 : value - 1;

  const treatedResult = result < 0 ? 0 : result;

  return (
    <TouchableOpacity onPress={() => onPress(treatedResult)}>
      <ButtonImage source={image} />
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
  width: ${24 * HEIGHT_REL};
  height: ${24 * HEIGHT_REL};
  margin-horizontal: ${6 * WIDTH_REL};
  margin-vertical: ${16 * HEIGHT_REL};
`;

const Value = styled(TextBaseBold).attrs({
  guessed: props => (props.children !== DEFAULT_VALUE ? true : false),
})`
  font-size: ${props => (props.guessed ? 32 : 8)};
  margin-vertical: ${props => (props.guessed ? 0 : 14)};
  text-align: center;
  color: ${GUESS_GUESSED_TEXT_COLOR};
`;

export default Guess;
