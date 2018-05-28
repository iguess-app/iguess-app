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
  RATIO,
} from '@theme';
import { TextBase } from '@components/Scene';
import { put } from '@helpers';

export const predictStatus = {
  DEFAULT: 'DEFAULT',
  LOADING: 'LOADING',
  LOADED: 'LOADED',
};

export class AllowPredict extends Component {
  constructor(props) {
    super(props);

    const { homeGuess, awayGuess } = props;

    this.state = {
      status: predictStatus.DEFAULT,
      homeGuess,
      awayGuess,
      blocked: false,
    };
  }

  update() {
    // Will clear a current updateStatus inactivityTime if exists
    clearTimeout(this.inactivityTime);

    // Guarantee that guess will not be blank
    const updatedValue = value => (value >= 0 ? value : 0);

    // Update guesses
    this.setState({
      homeGuess: updatedValue(this.home.getValue()),
      awayGuess: updatedValue(this.away.getValue()),
    });

    // Call and "updatedStatus" (contact API)
    this.inactivityTime = setTimeout(() => {
      this._updateStatus(predictStatus.LOADING);
    }, 1500);
  }

  _updateStatus(status) {
    const { DEFAULT, LOADING, LOADED } = predictStatus;

    const predictionBody = {
      championshipRef: this.props.gameRef.championshipRef,
      guesses: [
        {
          matchRef: this.props.gameRef.matchRef,
          homeTeamScoreGuess: this.state.homeGuess,
          awayTeamScoreGuess: this.state.awayGuess,
        },
      ],
    };

    if (status === LOADING) {
      this.setState({ status: LOADING, blocked: true });

      put(
        'https://iguess-666666.appspot.com/guessline/setPredictions',
        predictionBody,
      )
        .then(() => this._updateStatus(LOADED))
        .catch(() => {
          throw new Error('Error setting prediction');
        });
    } else if (status === LOADED) {
      this.setState({ status: LOADED });

      // Set status as DEFAULT after 1 second
      setTimeout(() => this._updateStatus(DEFAULT), 1000);
    } else {
      this.setState({ status: DEFAULT }, () =>
        this.setState({ blocked: false }),
      );
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
          blocked={this.state.blocked}
        />
        {this._mid()}
        <Guess
          value={this.state.awayGuess}
          updateCore={() => this.update()}
          ref={ref => (this.away = ref)}
          blocked={this.state.blocked}
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
  width: ${30 * RATIO};
  height: ${30 * RATIO};
  resize-mode: contain;
`;

const TimeCircular = ({ children, percentageCompleted = 0 }) => (
  <View>
    <AnimatedCircularProgress
      size={26}
      width={2}
      fill={percentageCompleted}
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
  margin-horizontal: ${5 * WIDTH_REL};
  resize-mode: contain;
`;

const ProgressContainer = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  width: ${26 * WIDTH_REL};
  height: ${26 * WIDTH_REL};
  align-items: center;
  justify-content: center;
`;

const Time = styled(TextBase)`
  font-size: ${12 * HEIGHT_REL};
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
  margin-top: ${8 * HEIGHT_REL};
`;

const ScheduledTime = styled(TextBase)`
  font-size: ${9 * HEIGHT_REL};
  color: ${SCHEDULED_TIME_COLOR};
`;

const MidWrapper = styled.View`
  width: ${45 * WIDTH_REL};
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
