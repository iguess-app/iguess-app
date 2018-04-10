import React from 'react';
import { SceneWrapper } from '@components/Scene';
import SceneHeader from './SceneHeader';
import styled from 'styled-components';
import { SETTINGS_TEXT_COLOR } from '@theme';

const Support = () => {
  return (
    <SceneWrapper>
      <SceneHeader title="Support" />
      <Wrapper>
        <Description>
          Fale com alguém do nosso time ou contate-nos nas redes sociais.
        </Description>
      </Wrapper>
    </SceneWrapper>
  );
};

const Wrapper = styled.View`
  padding-left: 32;
  padding-right: 32;
`;

const Description = styled.Text`
  margin-top: 24;
  font-size: 32;
  font-weight: bold;
  text-align: left;
  color: ${SETTINGS_TEXT_COLOR};
`;

export default Support;
