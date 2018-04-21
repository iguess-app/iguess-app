import React, { Component } from 'react';
import { InputSceneWrapper } from '@components/Scene';
import { NavBar } from '@components/Scene';
import { MainButton } from '@components/Button';
import styled from 'styled-components';
import { INPUT_BORDER_COLOR } from '@theme';

class SignUp extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <InputSceneWrapper>
        <NavBar title="Sign in" />
        <Wrapper>
          <Input
            placeholder="Username or e-mail"
            onChangeText={text => this.setState({ text })}
          />
          <Input
            placeholder="My password"
            onChangeText={text => this.setState({ text })}
          />
          <ButtonView>
            <MainButton text="Sign in" onPress={() => console.log('Sign in')} />
          </ButtonView>
        </Wrapper>
      </InputSceneWrapper>
    );
  }
}

const Wrapper = styled.View`
  margin-left: 32;
  margin-right: 32;
`;

const Input = styled.TextInput`
  height: 40;
  border-bottom-width: 1;
  border-color: ${INPUT_BORDER_COLOR};
  margin-top: 48;
`;

const ButtonView = styled.View`
  margin-top: 32;
  margin-bottom: 16;
`;

export default SignUp;
