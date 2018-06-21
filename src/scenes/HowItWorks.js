import React from 'react';
import Appsee from 'react-native-appsee';
import { SceneWrapper, TextBaseBold } from '@components/Scene';
import { NavBar, SceneDescription, Content } from '@components/Scene';
import { howItWorksImage } from '@assets/images';
import styled from 'styled-components';
import {
  WIDTH_REL,
  HEIGHT_REL,
  RATIO,
  BOARD_BORDER_COLOR,
  SEPARATOR_COLOR,
  BOARD_TITLE_COLOR,
  HIGHLITENED_CONTENT,
} from '@theme';
import I18n from 'react-native-i18n';

const HowItWorks = () => {
  Appsee.startScreen('About Us');
  return (
    <SceneWrapper>
      <NavBar title={I18n.t('howItWorksTitle')} />
      <Scroll>
        <HeaderImage source={howItWorksImage} />
        <SceneDescription>{I18n.t('howItWorksDescription1')}</SceneDescription>
        <Content>{I18n.t('howItWorksContent1')}</Content>
        <Content>{I18n.t('howItWorksContent2')}</Content>
        <Content>{I18n.t('howItWorksContent3')}</Content>
        <Board />
        <SceneDescription>{I18n.t('howItWorksDescription2')}</SceneDescription>
        <Content>{I18n.t('howItWorksContent4')}</Content>
        <Content>{I18n.t('howItWorksContent5')}</Content>
        <Separator />
        <HighlightenedContent>
          {I18n.t('howItWorksContent6')}
        </HighlightenedContent>
        <CustomContent>{I18n.t('howItWorksContent7')}</CustomContent>
        <HighlightenedContent>
          {I18n.t('howItWorksContent8')}
        </HighlightenedContent>
        <CustomContent>{I18n.t('howItWorksContent9')}</CustomContent>
        <Separator />
        <Content>{I18n.t('howItWorksContent10')}</Content>
        <BottomSpacing />
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

const Separator = styled.View`
  height: ${2 * HEIGHT_REL};
  background-color: ${SEPARATOR_COLOR};
  margin-horizontal: ${32 * WIDTH_REL};
  margin-vertical: ${16 * HEIGHT_REL};
`;

const Board = () => (
  <BoardBorder>
    <BoardHeader>
      <BoardTitle>{I18n.t('howItWorksBoardTitle')}</BoardTitle>
    </BoardHeader>
    <BoardContent>{I18n.t('howItWorksBoardContent')}</BoardContent>
  </BoardBorder>
);

const BoardBorder = styled.View`
  height: ${180 * HEIGHT_REL};
  margin-horizontal: ${24 * WIDTH_REL};
  margin-vertical: ${32 * HEIGHT_REL};
  border-radius: ${16 * RATIO};
  border-width: 1;
  border-color: ${BOARD_BORDER_COLOR};
`;

const BoardHeader = styled.View`
  width: 100%;
  height: ${56 * HEIGHT_REL};
  background-color: ${HIGHLITENED_CONTENT};
  border-top-left-radius: ${16 * RATIO};
  border-top-right-radius: ${16 * RATIO};
  align-items: center;
  justify-content: center;
`;

const BoardTitle = styled(TextBaseBold)`
  font-size: ${24 * HEIGHT_REL};
  color: ${BOARD_TITLE_COLOR};
`;

const BoardContent = styled(Content)`
  font-size: ${12 * WIDTH_REL};
  text-align: center;
  justify-content: center;
`;

const HighlightenedContent = styled(TextBaseBold)`
  color: ${HIGHLITENED_CONTENT};
  font-size: ${16 * RATIO};
  padding-horizontal: ${32 * WIDTH_REL};
`;

const CustomContent = styled(Content)`
  margin-top: ${2 * HEIGHT_REL};
  margin-bottom: ${16 * HEIGHT_REL};
`;

const BottomSpacing = styled.View`
  margin-bottom: ${24 * HEIGHT_REL};
`;

export default HowItWorks;
