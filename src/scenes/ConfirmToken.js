import React, { Component } from 'react';
import { SceneWrapper } from '@components/Scene';
import { NavBar, SceneDescription, Content } from '@components/Scene';
import { MainButton } from '@components/Button';
import Input from '@components/Input';
import styled from 'styled-components';
import { get } from '@helpers';
import { Actions } from 'react-native-router-flux';
import { WIDTH_REL, HEIGHT_REL } from '@theme';

class ConfirmToken extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: '',
    };
  }

  confirmToken() {
    get(
      `https://iguess-666666.appspot.com/forgotMyPass/validateSoftToken?softToken=${
        this.state.token
      }`,
    ).then(response => {
      if (response.statusCode !== 404) {
        Actions.push('redefinepassword', { softToken: response.softToken });
        this.setState({ token: '' });
      }
    });
  }

  render() {
    return (
      <SceneWrapper>
        <NavBar title="Esqueci minha senha" />
        <SceneDescription>
          Vamos lá você ja possui o número do token né?
        </SceneDescription>
        <Content>
          Informe agora no campo abaixo e clique no botão para continuar
        </Content>

        <Wrapper>
          <TextInput
            placeholder="Informe número do token"
            value={this.state.token}
            onChangeText={value => this.setState({ token: value })}
            autoCapitalize="none"
            maxLength={45}
          />
        </Wrapper>

        <RateView>
          <MainButton text="Continuar" onPress={() => this.confirmToken()} />
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

export default ConfirmToken;
