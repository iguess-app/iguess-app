import React, { Component } from 'react';
import { Keyboard } from 'react-native';
import UXCam from 'react-native-ux-cam';
import { InputSceneWrapper } from '@components/Scene';
import { MainButton } from '@components/Button';
import Input from '@components/Input';
import Error from '@components/Error';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { login } from '@redux/authentication/actions';
import { Actions } from 'react-native-router-flux';
import { post } from '@helpers';
import { WIDTH_REL, HEIGHT_REL } from '@theme';
import I18n from '../i18n';
import { spinner } from '@assets/images';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: '',
      password: '',
      errorMsg: null,
      loading: false,
    };
  }

  _login() {
    this.setState({ errorMsg: null }, async () => {
      if (this.state.login && this.state.password) {
        Keyboard.dismiss();
        this.setState({ loading: true });

        const body = {
          login: this.state.login,
          password: this.state.password,
        };

        UXCam.startWithKey('20f7d8b48c2c0c0');
        UXCam.tagScreenName('SignIn');

        post('https://iguess-666666.appspot.com/login/signIn', body)
          .then(response => {
            if (response.statusCode === 401) {
              if (response.errorCode === 20005) {
                this.setState({
                  errorMsg: response.message,
                  loading: false,
                });
              }
            } else {
              // log in user
              this.props.dispatch(login(response.token));

              // redirect to core scene
              Actions.reset('core');
            }
          })
          .catch(() =>
            this.setState({
              errorMsg: I18n.t('serverErrorDefault'),
              loading: false,
            }),
          );
      } else {
        this.setState({
          errorMsg: I18n.t('signInError'),
          loading: false,
        });
      }
    });
  }

  render() {
    let errorCard =
      this.state.errorMsg !== null ? (
        <Error input>{this.state.errorMsg}</Error>
      ) : null;

    const loader = this.state.loading === true ? <Spinner /> : null;

    return (
      <InputSceneWrapper title={I18n.t('signInTitle')}>
        {errorCard}
        <Wrapper>
          <TextInput
            placeholder={I18n.t('signInLogin')}
            value={this.state.login}
            onChangeText={value => this.setState({ login: value })}
            autoCapitalize="none"
            maxLength={45}
            innerRef={ref => (this.loginInput = ref)}
          />
          <TextInput
            placeholder={I18n.t('signInPassword')}
            onChangeText={value => this.setState({ password: value })}
            password={true}
            autoCapitalize="none"
            maxLength={30}
            innerRef={ref => (this.passwordInput = ref)}
          />
          <ButtonView>
            <MainButton
              text={I18n.t('signInButton')}
              onPress={() => this._login()}
            />
          </ButtonView>
          {loader}
        </Wrapper>
      </InputSceneWrapper>
    );
  }
}

const Wrapper = styled.View`
  margin-horizontal: ${32 * WIDTH_REL};
`;

const TextInput = styled(Input)`
  margin-top: ${48 * HEIGHT_REL};
`;

const ButtonView = styled.View`
  margin-top: ${32 * HEIGHT_REL};
  margin-bottom: ${16 * HEIGHT_REL};
  align-self: center;
`;

const Spinner = styled.Image.attrs({
  source: spinner,
})`
  width: ${44 * WIDTH_REL};
  height: ${42 * HEIGHT_REL};
  resize-mode: contain;
  align-self: center;
  margin-top: ${50 * WIDTH_REL};
`;

export default connect()(SignIn);
