import React, { Component } from 'react';
import styled from 'styled-components';
import {
  CARD_SCORE_COLOR,
  GUESS_GUESSED_TEXT_COLOR,
  GUESS_DEFAULT_TEXT_COLOR,
  HEIGHT_REL,
  WIDTH_REL,
} from '@theme';
import { TextBaseBold } from '@components/Scene';

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

const Score = styled(TextBaseBold)`
  font-size: ${40 * HEIGHT_REL};
  color: ${CARD_SCORE_COLOR};
  margin-bottom: ${16 * HEIGHT_REL};
  text-align: center;
`;

const Guessed = styled(TextBaseBold)`
  font-size: ${32 * HEIGHT_REL};
  color: ${GUESS_GUESSED_TEXT_COLOR};
  text-align: center;
`;

const NotGuessed = styled(TextBaseBold)`
  font-size: ${14 * HEIGHT_REL};
  text-align: center;
  opacity: 0.62;
  margin-vertical: ${10 * HEIGHT_REL};
  color: ${GUESS_DEFAULT_TEXT_COLOR};
`;

export default Result;
