import React from 'react';
import { Image } from 'react-native';
import { SceneWrapper } from '@components/Scene';
import styled from 'styled-components';
import {
  LOADING_TITLE_COLOR,
  LOADING_SUBTITLE_COLOR,
  WIDTH_REL,
  HEIGHT_REL,
} from '@theme';
import { ballGif } from '@assets/images/index';

const Loading = () => (
  <SceneWrapper>
    <Title>Dá uma segurada aí boleiro…</Title>
    <Subtitle>Aguarde enquanto processamos algumas informações.</Subtitle>
    <AnimatedBall />
  </SceneWrapper>
);

const Title = styled.Text`
  text-align: center;
  align-self: center;
  color: ${LOADING_TITLE_COLOR};
  margin-top: ${180 * HEIGHT_REL};
  font-size: 32;
  font-weight: bold;
`;

const Subtitle = styled.Text`
  text-align: center;
  align-self: center;
  color: ${LOADING_SUBTITLE_COLOR};
  margin-top: ${8 * HEIGHT_REL};
  font-size: 16;
`;

const AnimatedBall = styled.Image.attrs({
  source: ballGif,
})`
  width: ${180 * WIDTH_REL};
  height: ${220 * HEIGHT_REL};
  margin-top: ${20 * HEIGHT_REL};
  align-self: center;
`;

export default Loading;
