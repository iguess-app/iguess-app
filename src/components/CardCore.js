import React, { Component } from 'react';
import { View } from 'react-native';
import styled from 'styled-components';
import Guess from '@components/Guess';
import Result from '@components/Result';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { vs, whistle, spinner, check } from '@assets/images';
import {
  SCHEDULED_TIME_COLOR,
  PROGRESS_TINT_COLOR,
  PROGRESS_BACKGROUND_COLOR,
  HEIGHT_REL,
  WIDTH_REL,
} from '@theme';
import { TextBase } from '@components/Scene';

export const predictStatus = {
  DEFAULT: 'DEFAULT',
  LOADING: 'LOADING',
  LOADED: 'LOADED',
};

export class AllowPredict extends Component {
  constructor(props) {
    super(props);

    const { homeGuess, awayGuess } = props;

    this.state = { status: predictStatus.DEFAULT, homeGuess, awayGuess };
  }

  update() {
    // Will clear a current updateStatus timeout if exists
    clearTimeout(this.timeout);

    // Guarantee that guess will not be blank
    const updatedValue = value => (value >= 0 ? value : 0);

    // Update guesses
    this.setState({
      homeGuess: updatedValue(this.home.getValue()),
      awayGuess: updatedValue(this.away.getValue()),
    });

    // Call and "updatedStatus" (contact API)
    // after 3 seconds
    this.timeout = setTimeout(() => {
      this._updateStatus(predictStatus.LOADING);
    }, 3000);
  }

  _updateStatus(status) {
    const { DEFAULT, LOADING, LOADED } = predictStatus;

    if (status === LOADING) {
      this.setState({ status: LOADING });

      console.log(
        `Set ${this.state.homeGuess} and ${this.state.awayGuess} on`,
        this.props.gameRef,
      );
      // TODO: Contact API and set Status as loaded
      // Using setTimeout for now
      setTimeout(() => this._updateStatus(LOADED), 2000);
    } else if (status === LOADED) {
      this.setState({ status: LOADED });

      // Set status as DEFAULT after 1 second
      setTimeout(() => this._updateStatus(DEFAULT), 1000);
    } else {
      this.setState({ status: DEFAULT });
    }
  }

  _mid() {
    const { LOADING, LOADED } = predictStatus;

    switch (this.state.status) {
      case LOADING:
        return (
          <MidWrapper>
            <Spinner />
          </MidWrapper>
        );
      case LOADED:
        return (
          <MidWrapper>
            <Checked />
          </MidWrapper>
        );
      default:
        return (
          <MidWrapper>
            <ScheduledTime>{this.props.scheduled.toUpperCase()}</ScheduledTime>
            <VS />
          </MidWrapper>
        );
    }
  }

  render() {
    return (
      <CardCore>
        <Guess
          value={this.state.homeGuess}
          updateCore={() => this.update()}
          ref={ref => (this.home = ref)}
        />
        {this._mid()}
        <Guess
          value={this.state.awayGuess}
          updateCore={() => this.update()}
          ref={ref => (this.away = ref)}
        />
      </CardCore>
    );
  }
}

export const NotAllowPredict = props => {
  const { scheduled, homeGuess, awayGuess } = props;

  return (
    <CardCore>
      <Guess value={homeGuess} blocked />
      <MidWrapper>
        <ScheduledTime>{scheduled.toUpperCase()}</ScheduledTime>
        <VS />
      </MidWrapper>
      <Guess value={awayGuess} blocked />
    </CardCore>
  );
};

export const Live = props => {
  const {
    homeGuess,
    awayGuess,
    homeScore,
    awayScore,
    time,
    percentageCompleted,
  } = props;

  return (
    <CardCore>
      <Result guess={homeGuess} score={homeScore} />
      <MidWrapper>
        <TimeCircular percentageCompleted={percentageCompleted}>
          {time.concat("'")}
        </TimeCircular>
        <VS />
      </MidWrapper>
      <Result guess={awayGuess} score={awayScore} />
    </CardCore>
  );
};

export const Finished = props => {
  const { homeGuess, awayGuess, homeScore, awayScore } = props;

  return (
    <CardCore>
      <Result guess={homeGuess} score={homeScore} />
      <MidWrapper>
        <Whistle />
        <VS />
      </MidWrapper>
      <Result guess={awayGuess} score={awayScore} />
    </CardCore>
  );
};

const Whistle = styled.Image.attrs({
  source: whistle,
})`
  width: 30;
  height: 30;
  resize-mode: contain;
`;

const TimeCircular = ({ children, percentageCompleted = 0 }) => (
  <View>
    <AnimatedCircularProgress
      size={26}
      width={2}
      fill={parseInt(percentageCompleted)}
      rotation={0}
      tintColor={PROGRESS_TINT_COLOR}
      backgroundColor={PROGRESS_BACKGROUND_COLOR}
    />
    <ProgressContainer>
      <Time>{children}</Time>
    </ProgressContainer>
  </View>
);

const Spinner = styled.Image.attrs({
  source: spinner,
})`
  width: ${44 * WIDTH_REL};
  height: ${42 * HEIGHT_REL};
  resize-mode: contain;
`;

const Checked = styled.Image.attrs({
  source: check,
})`
  width: ${34 * WIDTH_REL};
  height: ${24 * HEIGHT_REL};
  margin-horizontal: 5;
  resize-mode: contain;
`;

const ProgressContainer = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  width: 26;
  height: 26;
  align-items: center;
  justify-content: center;
`;

const Time = styled(TextBase)`
  font-size: 12;
  color: #4d6980;
`;

const CardCore = styled.View`
  flex-direction: row;
`;

const VS = styled.Image.attrs({
  source: vs,
})`
  width: ${40 * WIDTH_REL};
  height: ${52 * HEIGHT_REL};
  resize-mode: contain;
  margin-top: 8;
`;

const ScheduledTime = styled(TextBase)`
  font-size: 10;
  color: ${SCHEDULED_TIME_COLOR};
`;

const MidWrapper = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
