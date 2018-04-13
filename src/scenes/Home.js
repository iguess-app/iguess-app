import React from 'react';
import { SceneWrapper } from '@components/Scene';
import { HOME_BACKGROUND } from '@theme';
import styled from 'styled-components';
import {
  HOME_TEXT_COLOR,
  PRIMARY_BUTTON_COLOR,
  PRIMARY_BUTTON_TEXT_COLOR,
} from '@theme';
import { TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';

const Home = () => {
  return (
    <SceneWrapper background={HOME_BACKGROUND}>
      <HomeText>Lorem ipsum dolor sit amet, consectetur.</HomeText>
      <AccountButton text="create my account" />
      <AccountButton text="sign in" type="transparent" />
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
  margin-top: 168;
  margin-bottom: 210;
`;

const AccountButton = props => {
  const { text, type } = props;

  const textComponent = <ButtonText>{text.toUpperCase()}</ButtonText>;

  if (type === 'transparent') {
    return (
      <TransparentTouchable onPress={() => Actions.signin()}>
        {textComponent}
      </TransparentTouchable>
    );
  }

  return (
    <MainTouchable onPress={() => Actions.signup()}>
      {textComponent}
    </MainTouchable>
  );
};

const MainTouchable = styled.TouchableOpacity`
  width: 311px;
  height: 56px;
  border-radius: 38px;
  background-color: ${PRIMARY_BUTTON_COLOR};
  margin-left: 32;
  margin-right: 32;
  align-items: center;
`;

const TransparentTouchable = styled.TouchableOpacity`
  width: 311px;
  height: 56px;
  border-radius: 38px;
  background-color: rgba(42, 43, 86, 0.65);
  margin-top: 24;
  margin-bottom: 32;
  margin-left: 32;
  margin-right: 32;
  align-items: center;
  border-style: solid;
  border-width: 2;
  border-color: white;
`;

const ButtonText = styled.Text`
  margin-top: 18;
  font-size: 15;
  font-weight: bold;
  color: ${PRIMARY_BUTTON_TEXT_COLOR};
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
`;

export default Home;
