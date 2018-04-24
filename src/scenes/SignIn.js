import React, { Component } from 'react';
import { InputSceneWrapper } from '@components/Scene';
import { NavBar } from '@components/Scene';
import { MainButton } from '@components/Button';
import Input from '@components/Input';
import styled from 'styled-components';
import { INPUT_BORDER_COLOR, WIDTH_REL, HEIGHT_REL } from '@theme';

class SignUp extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <InputSceneWrapper>
        <NavBar title="Sign in" />
        <Wrapper>
          <TextInput
            placeholder="Username or e-mail"
            onChangeText={text => this.setState({ text })}
          />
          <TextInput
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

export default SignUp;
