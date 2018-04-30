import React, { Component } from 'react';
import styled from 'styled-components';
import { InputSceneWrapper, NavBar } from '@components/Scene';
import { MainButton } from '@components/Button';
import ServerError from '@components/ServerError';
import Input from '@components/Input';
import { Actions } from 'react-native-router-flux';
import { WIDTH_REL, HEIGHT_REL, SIGN_UP_TERMS_COLOR } from '@theme';

var errors = Object.freeze({
  usernameAlreadyUsed: 20003,
  emailAlreadyUsed: 20004,
  passwordAlert: 20001,
  notAEmail: 20006,
});

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = { name: '', username: '', email: '', password: '' };
  }

  _verifyName() {

    if(this.state.name.length >= 3) {
      this.nameInput.success();
    } else if(this.state.name.length === 0) {
      this.nameInput.reset();
    } else {
      this.nameInput.error('Name should have 3 or more characters');
    }

  }

  _verifyUsername() {
    
    if(this.state.username.length >= 4) {
      this.usernameInput.success();
    } else if(this.state.username.length === 0) {
      this.usernameInput.reset();
    }  else {
      this.usernameInput.error('Username should have 4 or more characters');
    }

  }

  _verifyMail() {
    
    if(this.state.email.length === 0) {
      this.emailInput.reset();
      return null;
    }

    // A regex will be defined
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (regex.test(this.state.email)) {
      this.emailInput.success();
    } else {
      this.emailInput.error('Doesn\'t look like an email...');
    }

  }

  _verifyPassword() {

    if(this.state.password.length === 0) {
      this.passwordInput.reset();
      return null;
    }

    // A regex will be defined
    const matchRegex = true;
    if (matchRegex) {
      this.passwordInput.success();
    } else {
      this.passwordInput.error('Password error');
    }

  };

  _submit() {

    // Just to mitigate a bug, will be changed
    this._verifyPassword();

    if(this.state.name.length === 0) {
      this.nameInput.error('Can\'t be empty');
    }

    if(this.state.username.length === 0) {
      this.usernameInput.error('Can\'t be empty');
    }

    if(this.state.email.length === 0) {
      this.emailInput.error('Can\'t be empty');
    }

    if(this.state.password.length === 0) {
      this.passwordInput.error('Can\'t be empty');
    }

    const status = this.nameInput.getStatus() && this.usernameInput.getStatus() && this.emailInput.getStatus() && this.passwordInput.getStatus();

    if(true) {
      this._register();
    }
  }

  _register() {

    const requestInfo = {
      method: 'POST',
      headers: new Headers({
        'Content-type': 'application/json',
        'request_id': 'postmanRequest',
        'hardware_fingerprint': 'postmanRequest',
        'platform': 'Android',
        'os_version': '7.0.1',
        'app_version': '1.0.0',
        'phone_model': 'XT-1792',
        'phone_fabricator': 'Motorola',
      }),
      body: JSON.stringify({
        "userName" : "raniel12",
        "name": "Raniel",
        "password" : "123456",
        "email" : "raniel@live.com",
      })
    }

    fetch('https://iguess-666666.appspot.com/login/signUp', requestInfo)
    .then(response => response.json())
    .then(response => {

      if(response.errorCode === errors.usernameAlreadyUsed) {
        this.usernameInput.error(response.message);
      } else if(response.errorCode === errors.notAEmail) {
        this.emailInput.error(response.message);
      } else if (response.errorCode ===  errors.emailAlreadyUsed) {
        this.emailInput.error(response.message);
      } else if(response.errorCode === response.passwordAlert) {
        this.passwordInput.error(response.message);
      }

    })
  }

  render() {

    return (
      <InputSceneWrapper>
        <NavBar title="Sign up" />
        <Wrapper>
          <TextInput placeholder="Name" 
            value = {this.state.name}
            onChangeText={value => this.setState({name: value})}
            autoCapitalize="words"
            maxLength={25}
            onEndEditing={() => this._verifyName()}
            innerRef = {ref => this.nameInput = ref}
          />
          <TextInput
            placeholder="@username"
            value = {this.state.username}
            onChangeText= {value => this.setState({username: value.replace(/[^a-z0-9._]/g, '') })}
            autoCapitalize="none"
            maxLength={25}
            onEndEditing={() => this._verifyUsername()}
            innerRef = {ref => this.usernameInput = ref}
          />
          <TextInput
            placeholder="E-mail"
            value = {this.state.email}
            onChangeText={value => this.setState({email: value.replace(/\s/g, '')})}
            keyboardType="email-address"
            autoCapitalize="none"
            maxLength={30}
            onEndEditing={() => this._verifyMail()}
            innerRef = {ref => this.emailInput = ref}
          />
          <TextInput
            placeholder="Password"
            onChangeText={value => this.setState({password: value })}
            password={true}
            maxLength={30}
            onEndEditing={() => this._verifyPassword()}
            innerRef = {ref => this.passwordInput = ref}
          />
          <ButtonView>
            <MainButton text="Create my account" onPress={() => this._submit()}/>
          </ButtonView>
          <Terms>
            Eu concordo com os{' '}
            <TextLink onPress={() => Actions.terms()}>termos de uso</TextLink>.
          </Terms>
        </Wrapper>
        <ServerError />
      </InputSceneWrapper>
    );
  }
}

const TextInput = styled(Input)`
  margin-top: ${38*HEIGHT_REL};
`

const ButtonView = styled.View`
  margin-top: ${24*HEIGHT_REL};
  margin-bottom: ${16*HEIGHT_REL};
  align-self: center;
`;

const Wrapper = styled.View`
  margin-horizontal: ${32*WIDTH_REL};
`;

const Terms = styled.Text`
  font-size: 14;
  color: ${SIGN_UP_TERMS_COLOR};
  align-self: center;
`;

const TextLink = Terms.extend`
  font-weight: bold;
  text-decoration-line: underline;
`;

export default SignUp;