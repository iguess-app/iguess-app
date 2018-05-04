import React, { Component } from 'react';
import { InputSceneWrapper } from '@components/Scene';
import { NavBar } from '@components/Scene';
import { MainButton } from '@components/Button';
import Input from '@components/Input';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { login } from '@redux/authentication/actions';
import { Actions } from 'react-native-router-flux';
import { post } from '@helpers';
import { INPUT_BORDER_COLOR, WIDTH_REL, HEIGHT_REL } from '@theme';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {login: '', password: ''};
  }

  _login() {
    const body = JSON.stringify({
      "login": this.state.login,
      "password": this.state.password
    });

    post('https://iguess-666666.appspot.com/login/signIn', body)
    .then(response => {
      // log in user
      this.props.dispatch(login(response.token));

      // redirect to core scene
      Actions.core();
    });

  }

  render() {
    return (
      <InputSceneWrapper>
        <NavBar title="Sign in" />
        <Wrapper>
          <TextInput
            placeholder="@username or e-mail"
            value = {this.state.login}
            onChangeText= {value => this.setState({login: value.replace(/[^a-z0-9._]/g, '') })}
            autoCapitalize="none"
            maxLength={25}
            innerRef = {ref => this.loginInput = ref}
          />
          <TextInput
            placeholder="Password"
            onChangeText={value => this.setState({password: value })}
            password={true}
            autoCapitalize="none"
            maxLength={30}
            innerRef = {ref => this.passwordInput = ref}
          />
          <ButtonView>
            <MainButton text="Sign in" onPress={() => this._login()} />
          </ButtonView>
        </Wrapper>
      </InputSceneWrapper>
    );
  }
}

const Wrapper = styled.View`
  margin-horizontal: ${32*WIDTH_REL};
`;

const TextInput = styled(Input)`
  margin-top: ${48*HEIGHT_REL};
`;

const ButtonView = styled.View`
  margin-top: ${32*HEIGHT_REL};
  margin-bottom: ${16*HEIGHT_REL};
  align-self: center;
`;

export default connect()(SignIn);
