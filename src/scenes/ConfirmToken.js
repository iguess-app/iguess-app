import React, { Component } from 'react';
import { SceneWrapper } from '@components/Scene';
import { NavBar, SceneDescription, Content } from '@components/Scene';
import { MainButton } from '@components/Button';
import Input from '@components/Input';
import Error from '@components/Error';
import styled from 'styled-components';
import { get } from '@helpers';
import { Actions } from 'react-native-router-flux';
import { WIDTH_REL, HEIGHT_REL } from '@theme';
import I18n from '../i18n';

class ConfirmToken extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: '',
      errorMsg: null,
    };
  }

  _verifyToken() {
    let correct = false;

    if (this.state.token.length === 0) {
      this.tokenInput.error(I18n.t('signUpInputErrorEmpty'));
    } else {
      this.tokenInput.success();
      correct = true;
    }

    return correct;
  }

  confirmToken() {
    this.setState({ errorMsg: null }, () => {
      if (!this._verifyToken()) {
        return;
      }

      get(
        `https://iguess-666666.appspot.com/forgotMyPass/validateSoftToken?softToken=${
          this.state.token
        }`,
      ).then(response => {
        if (response.statusCode !== 404 && response.statusCode !== 400) {
          Actions.push('redefinepassword', { softToken: response.softToken });
          this.setState({ token: '' });
        }

        this.setState({
          errorMsg: response.message,
        });
      });
    });
  }

  render() {
    const errorCard =
      this.state.errorMsg !== null ? (
        <Error input>{this.state.errorMsg}</Error>
      ) : null;

    return (
      <SceneWrapper>
        <NavBar title={I18n.t('forgotMyPasswordTitle')} />
        <MessageWrapper>{errorCard}</MessageWrapper>
        <SceneDescription>{I18n.t('tokenDescription')}</SceneDescription>
        <Content>{I18n.t('tokenTip')}</Content>

        <Wrapper>
          <TextInput
            placeholder={I18n.t('infoTokenNumber')}
            value={this.state.token}
            onChangeText={value => this.setState({ token: value })}
            autoCapitalize="none"
            maxLength={45}
            onBlur={() => this._verifyToken()}
            innerRef={ref => (this.tokenInput = ref)}
          />
        </Wrapper>

        <RateView>
          <MainButton
            text={I18n.t('continueText')}
            onPress={() => this.confirmToken()}
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

const MessageWrapper = styled.View`
  z-index: 1;
`;

const TextInput = styled(Input)`
  margin-top: ${48 * HEIGHT_REL};
`;

export default ConfirmToken;
