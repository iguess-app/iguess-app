import React, { Component } from 'react';
import { Keyboard } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styled from 'styled-components';
import { InputSceneWrapper } from '@components/Scene';
import { MainButton } from '@components/Button';
import Error from '@components/Error';
import Input from '@components/Input';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { login } from '@redux/authentication/actions';
import { WIDTH_REL, HEIGHT_REL } from '@theme';
import { get, post } from '@helpers';
import I18n from '../i18n';

var errors = Object.freeze({
  usernameAlreadyUsed: 20003,
  emailAlreadyUsed: 20004,
  passwordAlert: 20001,
  notAEmail: 20006,
});

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      username: '',
      email: '',
      password: '',
      errorMsg: null,
    };
  }

  _verifyName() {
    let correct = false;

    if (this.state.name.length >= 3) {
      this.nameInput.success();
      correct = true;
    } else if (this.state.name.length === 0) {
      this.nameInput.error(I18n.t('signUpInputErrorEmpty'));
    } else {
      this.nameInput.error(I18n.t('signUpInputErrorName'));
    }

    return correct;
  }

  _verifyUsername() {
    let correct = false;
    const available = () =>
      get(
        `https://iguess-666666.appspot.com/availability/userName?userName=${
          this.state.username
        }`,
      ).then(response => {
        if (response.available === false) {
          this.usernameInput.error(response.alertMessage);
        }
      });

    if (this.state.username.length >= 4) {
      this.usernameInput.success();
      correct = true;

      available();
    } else if (this.state.username.length === 0) {
      this.usernameInput.error(I18n.t('signUpInputErrorEmpty'));
    } else {
      this.usernameInput.error(I18n.t('signUpInputErrorUsername'));
    }

    return correct;
  }

  _verifyMail() {
    let correct = false;

    const available = () =>
      get(
        `https://iguess-666666.appspot.com/availability/email?email=${
          this.state.email
        }`,
      ).then(response => {
        if (response.available === false) {
          this.emailInput.error(response.alertMessage);
        }
      });

    // A regex will be defined
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (regex.test(this.state.email)) {
      this.emailInput.success();
      correct = true;

      available();
    } else if (this.state.email.length === 0) {
      this.emailInput.error(I18n.t('signUpInputErrorEmpty'));
    } else {
      this.emailInput.error(I18n.t('signUpInputErrorEMail'));
    }

    return correct;
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

  _submit() {
    // Dismiss keyboard
    Keyboard.dismiss();

    const status =
      this._verifyName() &&
      this._verifyUsername() &&
      this._verifyMail() &&
      this._verifyPassword();

    if (status) {
      this._register();
    }
  }

  _register() {
    const body = {
      userName: this.state.username,
      name: this.state.name,
      password: this.state.password,
      email: this.state.email,
    };

    this.setState({ errorMsg: null }, () => {
      post('https://iguess-666666.appspot.com/login/signUp', body)
        .then(response => {
          if (typeof response.token !== undefined) {
            // log in created user
            this.props.dispatch(login(response.token));

            // redirect to core scene
            Actions.reset('core');
          } else if (response.statusCode === 406) {
            if (response.errorCode === errors.usernameAlreadyUsed) {
              this.usernameInput.error(response.message);
            } else if (response.errorCode === errors.notAEmail) {
              this.emailInput.error(response.message);
            } else if (response.errorCode === errors.emailAlreadyUsed) {
              this.emailInput.error(response.message);
            } else if (response.errorCode === response.passwordAlert) {
              this.passwordInput.error(response.message);
            }
          }
        })
        .catch(() => this.setState({ errorMsg: I18n.t('serverErrorDefault') }));
    });
  }

  render() {
    const errorCard =
      this.state.errorMsg !== null ? (
        <Error input>{this.state.errorMsg}</Error>
      ) : null;

    return (
      <InputSceneWrapper title={I18n.t('signUpTitle')}>
        {errorCard}
        <WrapperKeyboardAware
          resetScrollToCoords={{ x: 0, y: 0 }}
          enableOnAndroid
        >
          <TextInput
            placeholder={I18n.t('signUpName')}
            value={this.state.name}
            onChangeText={value => this.setState({ name: value })}
            autoCapitalize="words"
            maxLength={25}
            onBlur={() => this._verifyName()}
            innerRef={ref => (this.nameInput = ref)}
          />
          <TextInput
            placeholder={I18n.t('signUpUsername')}
            value={this.state.username}
            onChangeText={value =>
              this.setState({ username: value.replace(/[^a-z0-9._]/g, '') })
            }
            autoCapitalize="none"
            maxLength={25}
            onBlur={() => this._verifyUsername()}
            innerRef={ref => (this.usernameInput = ref)}
          />
          <TextInput
            placeholder={I18n.t('signUpEMail')}
            value={this.state.email}
            onChangeText={value =>
              this.setState({ email: value.replace(/\s/g, '') })
            }
            keyboardType="email-address"
            autoCapitalize="none"
            maxLength={45}
            onBlur={() => this._verifyMail()}
            innerRef={ref => (this.emailInput = ref)}
          />
          <TextInput
            placeholder={I18n.t('signUpPassword')}
            onChangeText={value => this.setState({ password: value })}
            password={true}
            autoCapitalize="none"
            maxLength={30}
            onBlur={() => this._verifyPassword()}
            innerRef={ref => (this.passwordInput = ref)}
          />
          <ButtonView>
            <MainButton
              text={I18n.t('signUpButton')}
              onPress={() => {
                return this._submit();
              }}
            />
          </ButtonView>
          {/*           <Terms>
            {I18n.t('signUpTermsText')}{' '}
            <TextLink onPress={() => Actions.terms()}>
              {I18n.t('signUpTermsLink')}
            </TextLink>.
          </Terms> */}
        </WrapperKeyboardAware>
      </InputSceneWrapper>
    );
  }
}

const TextInput = styled(Input)`
  margin-top: ${30 * HEIGHT_REL};
`;

const ButtonView = styled.View`
  margin-top: ${24 * HEIGHT_REL};
  margin-bottom: ${16 * HEIGHT_REL};
  align-self: center;
`;

const WrapperKeyboardAware = styled(KeyboardAwareScrollView)`
  padding-horizontal: ${32 * WIDTH_REL};
  margin-bottom: ${30 * HEIGHT_REL};
`;

/* const Terms = styled(TextBase)`
  font-size: 14;
  color: ${SIGN_UP_TERMS_COLOR};
  align-self: center;
  margin-bottom: ${20 * HEIGHT_REL};
`;

const TextLink = Terms.extend`
  font-family: 'KievitOffc-Bold';
  text-decoration-line: underline;
`; */

export default connect()(SignUp);
