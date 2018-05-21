import React from 'react';
import { SceneWrapper } from '@components/Scene';
import { MainButton, WhiteBorderButton } from '@components/Button';
import { HOME_BACKGROUND } from '@theme';
import styled from 'styled-components';
import { setStatusBarStyle } from '@helpers';
import { HOME_TEXT_COLOR, PRIMARY_BUTTON_TEXT_COLOR } from '@theme';
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
  font-size: 26;
  text-align: center;
  color: ${HOME_TEXT_COLOR};
  padding-left: 40;
  padding-right: 40;
  margin-top: 46%;
  margin-bottom: 56%;
`;

const TermsButton = () => {
  return (
    <TouchableOpacity onPress={() => Actions.terms()}>
      <TermsText>{I18n.t('homeTerms')}</TermsText>
    </TouchableOpacity>
  );
};

const TermsText = styled(TextBaseBold)`
  font-size: 14;
  color: ${PRIMARY_BUTTON_TEXT_COLOR};
  text-decoration-line: underline;
  align-self: center;
  margin-top: 8%;
`;

const ButtonsView = styled.View`
  align-self: center;
  margin-horizontal: 5%;
`;

export default Home;
