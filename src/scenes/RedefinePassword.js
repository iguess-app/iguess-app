import React, { Component } from 'react';
import { SceneWrapper } from '@components/Scene';
import { NavBar, SceneDescription, Content } from '@components/Scene';
import { MainButton } from '@components/Button';
import Input from '@components/Input';
import styled from 'styled-components';
import { patch } from '@helpers';
import { Actions } from 'react-native-router-flux';
import { WIDTH_REL, HEIGHT_REL } from '@theme';

class RedefinePassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
    };
  }

  redefinePassword() {
    const body = {
      newPassword: this.state.password,
      softToken: this.props.softToken,
    };

    patch(
      'https://iguess-666666.appspot.com/forgotMyPass/updateNewPassword',
      body,
    ).then(response => {
      if (response.statusCode !== 404) {
        Actions.reset('signin');
      }
    });
  }

  render() {
    return (
      <SceneWrapper>
        <NavBar title="Esqueci minha senha" />
        <SceneDescription>Defina sua nova senha.</SceneDescription>
        <Content>
          Lembre-se senhas forte incluem números, letras e sinais de pontuação.
        </Content>
        <Wrapper>
          <TextInput
            placeholder="Minha senha"
            value={this.state.password}
            onChangeText={value => this.setState({ password: value })}
            password={true}
            autoCapitalize="none"
            maxLength={30}
          />
        </Wrapper>

        <RateView>
          <MainButton
            text="Continuar"
            onPress={() => this.redefinePassword()}
          />
        </RateView>
      </SceneWrapper>
    );
  }
}

const RateView = styled.View`
  align-self: center;
  margin-vertical: ${32 * WIDTH_REL};
  margin-horizontal: ${30 * HEIGHT_REL};
`;

const Wrapper = styled.View`
  margin-horizontal: ${32 * WIDTH_REL};
`;

const TextInput = styled(Input)`
  margin-top: ${48 * HEIGHT_REL};
`;

export default RedefinePassword;
