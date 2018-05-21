import React, { Component } from 'react';
import { Keyboard } from 'react-native';
import { InputSceneWrapper } from '@components/Scene';
import { NavBar } from '@components/Scene';
import { MainButton } from '@components/Button';
import Input from '@components/Input';
import ServerError from '@components/ServerError';
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
      error: false,
      errorMsg: null,
      loading: false,
    };
  }

  _login() {
    this.setState({ error: false, errorMsg: '' });

    if (this.state.login && this.state.password) {
      Keyboard.dismiss();
      this.setState({ loading: true });

      const body = JSON.stringify({
        login: this.state.login,
        password: this.state.password,
      });

      post('https://iguess-666666.appspot.com/login/signIn', body)
        .then(response => {
          if (response.statusCode === 401) {
            if (response.errorCode === 20005) {
              this.setState({
                error: true,
                errorMsg: response.message,
                loading: false,
              });
            }
          } else {
            // log in user
            this.props.dispatch(login(response.token));

            // redirect to core scene
            Actions.core();
          }
        })
        .catch(() => this.setState({ error: true, loading: false }));
    } else {
      this.setState({
        error: true,
        errorMsg: I18n.t('signInError'),
        loading: false,
      });
    }
  }

  render() {
    let errorCard =
      this.state.error === true ? (
        <ServerError>{this.state.errorMsg}</ServerError>
      ) : null;

    const loader = this.state.loading === true ? <Spinner /> : null;

    return (
      <InputSceneWrapper>
        <NavBar title={I18n.t('signInTitle')} />
        <Wrapper>
          <TextInput
            placeholder={I18n.t('signInLogin')}
            value={this.state.login}
            onChangeText={value => this.setState({ login: value })}
            autoCapitalize="none"
            maxLength={25}
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
        {errorCard}
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
