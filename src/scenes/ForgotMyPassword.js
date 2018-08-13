import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { InputSceneWrapper } from '@components/Scene';
import { SceneDescription, Content } from '@components/Scene';
import { MainButton } from '@components/Button';
import Error from '@components/Error';
import styled from 'styled-components';
import Input from '@components/Input';
import { Actions } from 'react-native-router-flux';
import { TextBaseBold } from '@components/Scene';
import I18n from 'react-native-i18n';
import { post } from '@helpers';
import { WIDTH_REL, HEIGHT_REL } from '@theme';

class ForgotMyPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      errorMsg: null,
    };
  }

  _verifyMail() {
    let correct = false;
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (regex.test(this.state.email)) {
      this.emailInput.success();
      correct = true;
    } else if (this.state.email.length === 0) {
      this.emailInput.error(I18n.t('signUpInputErrorEmpty'));
    } else {
      this.emailInput.error(I18n.t('signUpInputErrorEMail'));
    }

    return correct;
  }

  sendEmail() {
    this.setState({ errorMsg: null }, () => {
      if (!this._verifyMail()) {
        return;
      }

      const body = {
        emailOrUsername: this.state.email,
      };

      post(
        'https://iguess-666666.appspot.com/forgotMyPass/sendEmail',
        body,
      ).then(response => {
        if (response.statusCode !== 404) {
          Actions.push('confirmsendmail', { email: response.emailHiddened });
        }

        this.setState({
          errorMsg: response.message,
        });
      });
    });
  }

  render() {
    const errorCard = this.state.errorMsg ? (
      <Error input>{this.state.errorMsg}</Error>
    ) : null;

    return (
      <InputSceneWrapper title={I18n.t('forgotMyPasswordTitle')}>
        {errorCard}
        <SceneDescription>{I18n.t('forgotMyPasswordText')}</SceneDescription>
        <Content>{I18n.t('forgotMyPasswordDescription')}</Content>

        <Wrapper>
          <TextInput
            placeholder={I18n.t('emailPlaceholder')}
            value={this.state.email}
            onChangeText={value => this.setState({ email: value })}
            autoCapitalize="none"
            maxLength={45}
            onBlur={() => this._verifyMail()}
            innerRef={ref => (this.emailInput = ref)}
          />
        </Wrapper>

        <RateView>
          <MainButton
            text={I18n.t('redefinePassword')}
            onPress={() => this.sendEmail()}
          />
        </RateView>
        <TouchableOpacity onPress={() => Actions.push('confirmtoken')}>
          <TextLink>{I18n.t('iHaveToken')}</TextLink>
        </TouchableOpacity>
      </InputSceneWrapper>
    );
  }
}

const TextLink = styled(TextBaseBold)`
  color: #553dd1;
  align-self: center;
  text-decoration: underline;
`;

const RateView = styled.View`
  align-self: center;
  margin-vertical: ${32 * WIDTH_REL};
  margin-horizontal: ${30 * HEIGHT_REL};
`;

const Wrapper = styled.View`
  margin-horizontal: ${32 * WIDTH_REL};
`;

const TextInput = styled(Input)`
  margin-top: ${48 * HEIGHT_REL};
`;

export default ForgotMyPassword;
