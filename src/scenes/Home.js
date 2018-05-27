import React from 'react';
import { SceneWrapper } from '@components/Scene';
import { MainButton, WhiteBorderButton } from '@components/Button';
import styled from 'styled-components';
import { setStatusBarStyle } from '@helpers';
import {
  HOME_TEXT_COLOR,
  PRIMARY_BUTTON_TEXT_COLOR,
  HOME_BACKGROUND,
  WIDTH_REL,
  HEIGHT_REL,
  RATIO,
} from '@theme';
import { TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import I18n from '../i18n';
import { TextBaseBold, TextBase } from '@components/Scene';

const Home = () => {
  setStatusBarStyle('white');

  return (
    <SceneWrapper background={HOME_BACKGROUND}>
      <HomeText>{I18n.t('homeGreeting')}</HomeText>
      <ButtonsView>
        <MainButton
          text={I18n.t('homeSignUp')}
          onPress={() => Actions.signup()}
        />
        <WhiteBorderButton
          text={I18n.t('homeSignIn')}
          onPress={() => Actions.signin()}
        />
      </ButtonsView>
      <TermsButton />
    </SceneWrapper>
  );
};

const HomeText = styled(TextBase)`
  font-size: ${26 * RATIO};
  text-align: center;
  color: ${HOME_TEXT_COLOR};
  padding-left: ${40 * WIDTH_REL};
  padding-right: ${40 * WIDTH_REL};
  margin-top: ${186 * HEIGHT_REL};
  margin-bottom: ${192 * HEIGHT_REL};
`;

const TermsButton = () => {
  return (
    <TouchableOpacity onPress={() => Actions.terms()}>
      <TermsText>{I18n.t('homeTerms')}</TermsText>
    </TouchableOpacity>
  );
};

const TermsText = styled(TextBaseBold)`
  font-size: ${14 * RATIO};
  color: ${PRIMARY_BUTTON_TEXT_COLOR};
  text-decoration-line: underline;
  align-self: center;
  margin-top: ${24 * HEIGHT_REL};
`;

const ButtonsView = styled.View`
  align-self: center;
  margin-horizontal: ${32 * WIDTH_REL};
`;

export default Home;
