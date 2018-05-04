import React from 'react';
import { SceneWrapper } from '@components/Scene';
import { MainButton, TransparentButton } from '@components/Button';
import { HOME_BACKGROUND } from '@theme';
import styled from 'styled-components';
import { setStatusBarStyle } from '@helpers';
import { HOME_TEXT_COLOR, PRIMARY_BUTTON_TEXT_COLOR } from '@theme';
import { TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';

const Home = () => {
  setStatusBarStyle('white');

  return (
    <SceneWrapper background={HOME_BACKGROUND} style={{borderColor: 'red', borderWidth: 1}}>
      <HomeText>Lorem ipsum dolor sit amet, consectetur.</HomeText>
      <ButtonsView>
        <MainButton text="create my account" onPress={() => Actions.signup()} />
        <TransparentButton text="sign in" onPress={() => Actions.signin()} />
      </ButtonsView>
      <TermsButton />
    </SceneWrapper>
  );
};

const HomeText = styled.Text`
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
      <TermsText>Terms and conditions</TermsText>
    </TouchableOpacity>
  );
};

const TermsText = styled.Text`
  font-size: 14;
  font-weight: bold;
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
