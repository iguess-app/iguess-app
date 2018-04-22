import React, { Component } from 'react';
import styled from 'styled-components';
import { InputSceneWrapper, NavBar } from '@components/Scene';
import { MainButton } from '@components/Button';
import Input from '@components/Input';
import { Actions } from 'react-native-router-flux';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = { name: '', username: '', email: '', password: '' };
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
            onEndEditing={() => this.nameInput.setStatus('success')}
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
            <MainButton
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
  margin-top: 44;
`

const ButtonView = styled.View`
  margin-top: 24;
  margin-bottom: 16;
  align-self: center;
`;

const Wrapper = styled.View`
  margin-left: 32;
  margin-right: 32;
`;

const Terms = styled.Text`
  font-size: 14;
  color: #4d6980;
  align-self: center;
`;

const TextLink = Terms.extend`
  font-weight: bold;
  text-decoration-line: underline;
`;

export default SignUp;