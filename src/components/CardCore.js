import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components';
import Guess from '@components/Guess';
import Result from '@components/Result';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { vs, whistle } from '@assets/images';
import {
  SCHEDULED_TIME_COLOR,
  PROGRESS_TINT_COLOR,
  PROGRESS_BACKGROUND_COLOR,
  HEIGHT_REL,
  WIDTH_REL,
} from '@theme';

export const AllowPredict = props => {
  const { scheduled, homeGuess, awayGuess } = props;

  return (
    <CardCore>
      <Guess value={homeGuess} />
      <MidWrapper>
        <Stadium>Old Trafford</Stadium>
        <ScheduledTime>{scheduled.toUpperCase()}</ScheduledTime>
        <VS />
      </MidWrapper>
      <Guess value={awayGuess} />
    </CardCore>
  );
};

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
  const { homeGuess, awayGuess, homeScore, awayScore, time } = props;

  return (
    <CardCore>
      <Result guess={homeGuess} score={homeScore} />
      <MidWrapper>
        <TimeCircular>{time}</TimeCircular>
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

const TimeCircular = ({ children }) => (
  <View>
    <AnimatedCircularProgress
      size={26}
      width={2}
      fill={50}
      rotation={0}
      tintColor={PROGRESS_TINT_COLOR}
      backgroundColor={PROGRESS_BACKGROUND_COLOR}
    />
    <ProgressContainer>
      <Time>{children}</Time>
    </ProgressContainer>
  </View>
);

const ProgressContainer = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  width: 26;
  height: 26;
  align-items: center;
  justify-content: center;
`;

const Time = styled.Text`
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

const Stadium = styled.Text`
  font-size: 8;
  opacity: 0.6;
  margin-bottom: 2;
`;

const ScheduledTime = styled.Text`
  font-size: 10;
  color: ${SCHEDULED_TIME_COLOR};
`;

const MidWrapper = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
