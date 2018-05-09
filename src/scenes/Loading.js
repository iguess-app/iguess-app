import React from 'react';
import { SceneWrapper } from '@components/Scene';
import styled from 'styled-components';
import { setStatusBarStyle } from '@helpers';
import { LOADING_TITLE_COLOR, LOADING_SUBTITLE_COLOR, HEIGHT_REL } from '@theme';

const Loading = () => (
  <SceneWrapper>
    <Title>Dá uma segurada aí boleiro…</Title>
    <Subtitle>Aguarde enquanto processamos algumas informações.</Subtitle>
  </SceneWrapper>
)

const Title = styled.Text`
  text-align: center;
  align-self: center;
  color: ${LOADING_TITLE_COLOR};
  margin-top: ${180*HEIGHT_REL};
  font-size: 32;
  font-weight: bold;
`

const Subtitle = styled.Text`
  text-align: center;
  align-self: center;
  color: ${LOADING_SUBTITLE_COLOR};
  margin-top: ${8*HEIGHT_REL};
  font-size: 16;
`

export default Loading;