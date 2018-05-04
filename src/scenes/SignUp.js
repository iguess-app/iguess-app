import React, { Component } from 'react';
import { Keyboard, Text } from 'react-native';
import styled from 'styled-components';
import { InputSceneWrapper, NavBar } from '@components/Scene';
import { MainButton } from '@components/Button';
import ServerError from '@components/ServerError';
import Input from '@components/Input';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { login } from '@redux/authentication/actions';
import { WIDTH_REL, HEIGHT_REL, SIGN_UP_TERMS_COLOR } from '@theme';
import { get, post } from '@helpers';

var errors = Object.freeze({
  usernameAlreadyUsed: 20003,
  emailAlreadyUsed: 20004,
  passwordAlert: 20001,
  notAEmail: 20006,
});

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = { name: '', username: '', email: '', password: '', error: false};
  }

  _verifyName() {

    let correct = false;

    if(this.state.name.length >= 3) {
      this.nameInput.success();
      correct = true;
    } else if(this.state.name.length === 0) {
      this.nameInput.error('Can\'t be empty');
    } else {
      this.nameInput.error('Name should have 3 or more characters');
    }

    return correct;

  }

  _verifyUsername() {
    
    let correct = false;
    const available = () => get(`https://iguess-666666.appspot.com/availability/userName?userName=${this.state.username}`)
    .then(response => {
      if(response.available === false){
        this.usernameInput.error(response.alertMessage);
      }
    });

    if(this.state.username.length >= 4) {
      this.usernameInput.success();
      correct = true;

      available();
    } else if(this.state.username.length === 0) {
      this.usernameInput.error('Can\'t be empty');
    }  else {
      this.usernameInput.error('Username should have 4 or more characters');
    }

    return correct;
  }

  _verifyMail() {
    
    let correct = false;

    const available = () => get(`https://iguess-666666.appspot.com/availability/email?email=${this.state.email}`)
    .then(response => {
      console.log(response)
      if(response.available === false){
        this.emailInput.error(response.alertMessage);
      }
    });

    // A regex will be defined
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (regex.test(this.state.email)) {
      this.emailInput.success();
      correct = true;

      available();
    } else if(this.state.email.length === 0) {
      this.emailInput.error('Can\'t be empty');
    } else {
      this.emailInput.error('Doesn\'t look like an email...');
    }

    return correct;

  }

  _verifyPassword() {

    let correct = false;

    // A regex will be defined
    const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (regex.test(this.state.password)) {
      this.passwordInput.success();
      correct = true;
    } else if(this.state.password.length === 0) {
      this.passwordInput.error('Can\'t be empty');
    } else {
      this.passwordInput.error('Password should contain at least 8 characters, 1 letter and 1 number');
    }

    return correct;

  };

  _submit() {

    // Dismiss keyboard
    Keyboard.dismiss();

    const status = this._verifyName() && this._verifyUsername() && this._verifyMail() && this._verifyPassword();

    if(status) {
      this._register();
    }
  }

  _register() {

    this.setState({error: false});

    const body = JSON.stringify({
        "userName" : this.state.username,
        "name": this.state.name,
        "password" : this.state.password,
        "email" : this.state.email,
      });

    post('https://iguess-666666.appspot.com/login/signUp', body)
    .then(response => {

      if(typeof response.token !== undefined) {
        // log in created user
        this.props.dispatch(login(response.token));

        // redirect to core scene
        Actions.core();

      } else if(response.statusCode === 406){
        if(response.errorCode === errors.usernameAlreadyUsed) {
          this.usernameInput.error(response.message);
        } else if(response.errorCode === errors.notAEmail) {
          this.emailInput.error(response.message);
        } else if (response.errorCode ===  errors.emailAlreadyUsed) {
          this.emailInput.error(response.message);
        } else if(response.errorCode === response.passwordAlert) {
          this.passwordInput.error(response.message);
        }
      } 

    })
    .catch(response => this.setState({error: true}));
  }

  render() {

    const errorCard = this.state.error ? <ServerError /> : null;

    return (
      <InputSceneWrapper>
        <NavBar title="Sign up" />
        <Wrapper>
          <TextInput placeholder="Name" 
            value = {this.state.name}
            onChangeText={value => this.setState({name: value})}
            autoCapitalize="words"
            maxLength={25}
            onBlur={() => this._verifyName()}
            innerRef = {ref => this.nameInput = ref}
          />
          <TextInput
            placeholder="@username"
            value = {this.state.username}
            onChangeText= {value => this.setState({username: value.replace(/[^a-z0-9._]/g, '') })}
            autoCapitalize="none"
            maxLength={25}
            onBlur={() => this._verifyUsername()}
            innerRef = {ref => this.usernameInput = ref}
          />
          <TextInput
            placeholder="E-mail"
            value = {this.state.email}
            onChangeText={value => this.setState({email: value.replace(/\s/g, '')})}
            keyboardType="email-address"
            autoCapitalize="none"
            maxLength={30}
            onBlur={() => this._verifyMail()}
            innerRef = {ref => this.emailInput = ref}
          />
          <TextInput
            placeholder="Password"
            onChangeText={value => this.setState({password: value })}
            password={true}
            autoCapitalize="none"
            maxLength={30}
            onBlur={() => this._verifyPassword()}
            innerRef = {ref => this.passwordInput = ref}
          />
          <ButtonView>
            <MainButton text="Create my account" onPress={() => this._submit()}/>
          </ButtonView>
          <Terms>
            Eu concordo com os{' '}
            <TextLink onPress={() => Actions.terms()}>termos de uso</TextLink>.
          </Terms>
          <Text>Token: {this.props.authenticationToken}</Text>
        </Wrapper>
        {errorCard}
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

export default connect()(SignUp);