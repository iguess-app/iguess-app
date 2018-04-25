import React, { Component } from 'react';
import styled from 'styled-components';
import { InputSceneWrapper, NavBar } from '@components/Scene';
import { MainButton, InativeButton } from '@components/Button';
import Input from '@components/Input';
import { Actions } from 'react-native-router-flux';
import { WIDTH_REL, HEIGHT_REL, SIGN_UP_TERMS_COLOR } from '@theme';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = { name: '', username: '', email: '', password: '' };
  }

  _verifyName() {

    if(this.state.name.length < 3) {
      this.nameInput.error('Name should have 3 or more characters')
    } else {
      this.nameInput.success();
    }

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
            onEndEditing={() => console.log('End editing username', this.state.username)}
          />
          <TextInput
            placeholder="E-mail"
            value = {this.state.email}
            onChangeText={value => this.setState({email: value.replace(/\s/g, '')})}
            keyboardType="email-address"
            autoCapitalize="none"
            maxLength={30}
            onEndEditing={() => console.log('End editing e-mail')}
          />
          <TextInput
            placeholder="Password"
            onChangeText={value => this.setState({password: value })}
            password={true}
          />
          <ButtonView>
            <InativeButton
              text="Create my account"
              onPress={() => console.log('Create my account', this.state.name)}
            />
          </ButtonView>
          <Terms>
            Eu concordo com os{' '}
            <TextLink onPress={() => Actions.terms()}>termos de uso</TextLink>.
          </Terms>
        </Wrapper>
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