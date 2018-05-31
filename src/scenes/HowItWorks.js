import React from 'react';
import { SceneWrapper } from '@components/Scene';
import { NavBar, SceneDescription, Content } from '@components/Scene';
import { howItWorksImage } from '@assets/images';
import styled from 'styled-components';
import { WIDTH_REL, HEIGHT_REL } from '@theme';
import I18n from 'react-native-i18n';

const HowItWorks = () => {
  return (
    <SceneWrapper>
      <NavBar title="Como o app funciona" />
      <Scroll>
        <HeaderImage source={howItWorksImage} />
        <SceneDescription>Descrição</SceneDescription>
        <Content>Conteúdo</Content>
      </Scroll>
    </SceneWrapper>
  );
};

const Scroll = styled.ScrollView`
  margin-bottom: ${4 * HEIGHT_REL};
`;

const HeaderImage = styled.Image`
  opacity: 0.9;
  height: ${160 * HEIGHT_REL};
  width: 100%;
`;

export default HowItWorks;
