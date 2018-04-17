import React, { Component } from 'react';
import styled from 'styled-components';
import { SceneWrapper } from '@components/Scene';
import { NavBar } from '@components/Scene';
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
        <ContentWrapper>
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
        </ContentWrapper>
      </SceneWrapper>
    );
  }
}

const Input = styled.TextInput`
  height: 40;
  border-bottom-width: 1;
  border-color: ${INPUT_BORDER_COLOR};
  margin-top: 48;
`;

const ContentWrapper = styled.View`
  margin-left: 32;
  margin-right: 32;
`;

export default SignUp;
