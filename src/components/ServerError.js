import React from 'react';
import styled from 'styled-components';
import { thumbsDown } from '@assets/images';
import { INPUT_ERROR_COLOR, HEIGHT_REL, WIDTH_REL } from '@theme';

const ServerError = () => {
  return (
      <ErrorView>
        <Icon />
        <ErrorText>
          Houve algum problema no servidor. 
          Tente novamente mais tarde.
        </ErrorText>
      </ErrorView>
  )
}


export const ErrorView = styled.View`
  flex-direction: row;
  width: 100%;
  height: ${80*HEIGHT_REL};
  background-color: ${INPUT_ERROR_COLOR};
  position: absolute;
  margin-top: ${587*HEIGHT_REL};
  align-items: center;
`

const Icon = styled.Image.attrs({
  source: thumbsDown,
})`
  width: ${24*WIDTH_REL};
  height: ${24*HEIGHT_REL};
  margin-left: ${32*WIDTH_REL};
  margin-right: ${16*WIDTH_REL};
`

const ErrorText = styled.Text`
  width: ${272*WIDTH_REL};
  height: ${40*HEIGHT_REL};
  font-size: 16;
  color: white;
`

export default ServerError;