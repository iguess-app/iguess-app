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
import { logo } from '@assets/images';
import { TextBaseBold, TextBase } from '@components/Scene';

const Home = () => {
  setStatusBarStyle('white');

  return (
    <SceneWrapper background={HOME_BACKGROUND}>
      <LogoContainer>
        <LogoIcon source={logo} />
      </LogoContainer>

      <ButtonsView>
        <MainButton
          text={I18n.t('homeSignUp')}
          onPress={() => Actions.signup()}
        />
        <WhiteBorderButton
          text={I18n.t('homeSignIn')}
          onPress={() => Actions.signin()}
        />
        <TermsButton />
      </ButtonsView>
    </SceneWrapper>
  );
};

const LogoContainer = styled.View`
  flex: 2;
  justify-content: center;
  align-items: center;
`;

const LogoIcon = styled.Image`
  height: 87;
  width: 223;
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
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export default Home;
