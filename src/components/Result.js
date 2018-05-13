import React, { Component } from 'react';
import styled from 'styled-components';
import {
  CARD_SCORE_COLOR,
  GUESS_GUESSED_TEXT_COLOR,
  GUESS_DEFAULT_TEXT_COLOR,
  HEIGHT_REL,
  WIDTH_REL,
} from '@theme';

const DEFAULT_GUESS_VALUE = '- - - -';

class Result extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const guessValue =
      this.props.guess !== undefined ? (
        <Guessed>{this.props.guess}</Guessed>
      ) : (
        <NotGuessed>{DEFAULT_GUESS_VALUE}</NotGuessed>
      );

    return (
      <Wrapper>
        <Score>{this.props.score}</Score>
        {guessValue}
      </Wrapper>
    );
  }
}

const Wrapper = styled.View`
  align-items: center;
  justify-content: center;
  margin-horizontal: ${16 * WIDTH_REL};
  flex-direction: column;
`;

const Score = styled.Text`
  font-size: 40;
  font-weight: 500;
  color: ${CARD_SCORE_COLOR};
  margin-bottom: ${16 * HEIGHT_REL};
  text-align: center;
`;

const Guessed = styled.Text`
  font-size: 32;
  font-weight: 500;
  color: ${GUESS_GUESSED_TEXT_COLOR};
  opacity: 0.62;
  text-align: center;
`;

const NotGuessed = styled.Text`
  font-size: 14;
  text-align: center;
  font-weight: 800;
  opacity: 0.62;
  margin-vertical: ${10 * HEIGHT_REL};
  color: ${GUESS_DEFAULT_TEXT_COLOR};
`;

export default Result;
