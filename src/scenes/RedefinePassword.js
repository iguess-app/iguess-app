import React, { Component } from 'react';
import { InputSceneWrapper } from '@components/Scene';
import { NavBar, SceneDescription, Content } from '@components/Scene';
import { MainButton } from '@components/Button';
import Input from '@components/Input';
import styled from 'styled-components';
import { patch } from '@helpers';
import { Actions } from 'react-native-router-flux';
import { WIDTH_REL, HEIGHT_REL } from '@theme';
import I18n from '../i18n';
import Error from '@components/Error';

class RedefinePassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      message: null,
      success: false,
    };
  }

  _verifyPassword() {
    let correct = false;

    if (this.state.password.length === 0) {
      this.passwordInput.error(I18n.t('signUpInputErrorEmpty'));
    } else if (
      this.state.password.length < 8 ||
      this.state.password.includes(' ')
    ) {
      this.passwordInput.error(I18n.t('signUpInputErrorPassword'));
    } else {
      this.passwordInput.success();
      correct = true;
    }

    return correct;
  }

  redefinePassword() {
    this.setState({ message: null, success: true }, () => {
      const body = {
        newPassword: this.state.password,
        softToken: this.props.softToken,
      };

      patch(
        'https://iguess-666666.appspot.com/forgotMyPass/updateNewPassword',
        body,
      ).then(response => {
        if (response.statusCode && response.statusCode >= 400) {
          this.setState({ message: response.message, success: false });
        } else {
          this.setState({ message: I18n.t('successChangePassword') }, () => {
            setTimeout(() => Actions.reset('signin'), 3000);
          });
        }
      });
    });
  }

  render() {
    const messageCard =
      this.state.message !== null ? (
        <Error success={this.state.success} input>
          {this.state.message}
        </Error>
      ) : null;
    return (
      <InputSceneWrapper title={I18n.t('forgotMyPasswordTitle')}>
        {messageCard}
        <SceneDescription>{I18n.t('defineNewPasswordLabel')}</SceneDescription>
        <Content>{I18n.t('defineNewPasswordTip')}</Content>
        <Wrapper>
          <TextInput
            placeholder={I18n.t('myPassword')}
            value={this.state.password}
            onChangeText={value => this.setState({ password: value })}
            password={true}
            autoCapitalize="none"
            maxLength={30}
            onBlur={() => this._verifyPassword()}
            innerRef={ref => (this.passwordInput = ref)}
          />
        </Wrapper>

        <RateView>
          <MainButton
            text={I18n.t('continueText')}
            onPress={() => this.redefinePassword()}
          />
        </RateView>
      </InputSceneWrapper>
    );
  }
}

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

export default RedefinePassword;
