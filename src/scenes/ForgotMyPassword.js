import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { InputSceneWrapper } from '@components/Scene';
import { SceneDescription, Content } from '@components/Scene';
import { MainButton } from '@components/Button';
import Error from '@components/Error';
import styled from 'styled-components';
import Input from '@components/Input';
import { Actions } from 'react-native-router-flux';
import { TextBaseBold } from '@components/Scene';
import I18n from 'react-native-i18n';
import { post } from '@helpers';
import { WIDTH_REL, HEIGHT_REL } from '@theme';

class ForgotMyPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      errorMsg: null,
    };
  }

  sendEmail() {
    const body = {
      emailOrUsername: this.state.email,
    };

    post('https://iguess-666666.appspot.com/forgotMyPass/sendEmail', body)
      .then(response => {
        if (response.statusCode !== 404) {
          Actions.push('confirmsendmail', { email: response.emailHiddened });
        } else {
          this.setState({
            errorMsg: response.message,
          });
        }
      })
      .catch(() =>
        this.setState({
          errorMsg: I18n.t('serverErrorDefault'),
          loading: false,
        }),
      );
  }

  render() {
    let errorCard =
      this.state.errorMsg !== null ? (
        <Error input>{this.state.errorMsg}</Error>
      ) : null;

    return (
      <InputSceneWrapper title="Esqueci minha senha">
        {errorCard}
        <SceneDescription>
          Vamos enviar um e-mail com um número de token para você redefinir sua
          senha.
        </SceneDescription>
        <Content>
          Informe seu endereço de e-mail, após isso confira sua caixa de entrada
          e copie o número do token enviado.
        </Content>

        <Wrapper>
          <TextInput
            placeholder="Informe seu endereço de email"
            value={this.state.email}
            onChangeText={value => this.setState({ email: value })}
            autoCapitalize="none"
            maxLength={45}
          />
        </Wrapper>

        <RateView>
          <MainButton
            text="Redefinir minha senha"
            onPress={() => this.sendEmail()}
          />
        </RateView>
        <TouchableOpacity onPress={() => Actions.push('confirmtoken')}>
          <TextLink>Já tenho o token para redefinição</TextLink>
        </TouchableOpacity>
      </InputSceneWrapper>
    );
  }
}

const TextLink = styled(TextBaseBold)`
  color: #553dd1;
  align-self: center;
  text-decoration: underline;
`;

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

export default ForgotMyPassword;
