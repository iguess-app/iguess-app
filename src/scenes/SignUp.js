import React, { Component } from 'react';
import styled from 'styled-components';
import { SceneWrapper, NavBar } from '@components/Scene';
import { MainButton } from '@components/Button';
import { Actions } from 'react-native-router-flux';
import { INPUT_BORDER_COLOR } from '@theme';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  render() {
    return (
      <SceneWrapper>
        <NavBar title="Sign up" />
        <Wrapper>
          <Input
            placeholder="My name"
            onChangeText={text => this.setState({ text })}
          />
          <Input
            placeholder="My username"
            onChangeText={text => this.setState({ text })}
          />
          <Input
            placeholder="My e-mail"
            onChangeText={text => this.setState({ text })}
          />
          <Input
            placeholder="My password"
            onChangeText={text => this.setState({ text })}
          />
          <CreateView>
            <MainButton
              text="Create my account"
              onPress={() => console.log('Create my account')}
            />
          </CreateView>
          <Terms>
            Eu concordo com os{' '}
            <Link onPress={() => Actions.terms()}>termos de uso</Link>.
          </Terms>
        </Wrapper>
      </SceneWrapper>
    );
  }
}

const CreateView = styled.View`
  margin-top: 26;
  margin-bottom: 16;
`;

const Input = styled.TextInput`
  height: 40;
  border-bottom-width: 1;
  border-color: ${INPUT_BORDER_COLOR};
  margin-top: 48;
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

const Link = Terms.extend`
  font-weight: bold;
  text-decoration-line: underline;
`;

export default SignUp;
