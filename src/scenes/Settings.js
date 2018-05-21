import React, { Component } from 'react';
import { TouchableOpacity, Alert } from 'react-native';
import styled from 'styled-components';
import { SceneWrapper } from '@components/Scene';
import Error from '@components/Error';
import { Actions } from 'react-native-router-flux';
import { apiDelete } from '@helpers';
import { connect } from 'react-redux';
import { logout } from '@redux/authentication/actions';
import { conversation, closeSettings, blog, store, exit } from '@assets/images';
import {
  SETTINGS_TEXT_COLOR,
  SETTINGS_BORDER_COLOR,
  WIDTH_REL,
  HEIGHT_REL,
} from '@theme';
import I18n from '../i18n';

class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = { errorMsg: null };
  }

  _logout = () => {
    const confirm = () => {
      this.setState({ errorMsg: null }, () => {
        apiDelete('https://iguess-666666.appspot.com/login/logout')
          .then(response => {
            if (response.logout === true) {
              this.props.dispatch(logout());
              Actions.reset('home');
            } else if (response.logout === false) {
              this.setState({ errorMsg: I18n.t('serverErrorDefault') });
            }
          })
          .catch(() =>
            this.setState({ errorMsg: I18n.t('serverErrorDefault') }),
          );
      });
    };

    Alert.alert(
      I18n.t('settingsLogoutTitle'),
      I18n.t('settingsLogoutText'),
      [
        {
          text: I18n.t('settingsLogoutConfirm'),
          onPress: () => confirm(),
        },
        { text: I18n.t('settingsLogoutCancel') },
      ],
      { cancelable: false },
    );
  };

  render() {
    const { swipe } = this.props;

    const errorCard =
      this.state.errorMsg !== null ? (
        <Error>{this.state.errorMsg}</Error>
      ) : null;

    return (
      <SceneWrapper>
        <Close onPress={swipe} />
        <Title>{I18n.t('settingsTitle')}</Title>
        <TouchableRow
          icon={conversation}
          text={I18n.t('settingsSupport')}
          onPress={() => Actions.support()}
        />
        <TouchableRow
          icon={blog}
          text={I18n.t('settingsTerms')}
          onPress={() => Actions.terms()}
        />
        <TouchableRow
          icon={store}
          text={I18n.t('settingsAbout')}
          onPress={() => Actions.about()}
        />
        <Logout onPress={() => this._logout()}>
          {I18n.t('settingsLogoutButton')}
        </Logout>
        {errorCard}
      </SceneWrapper>
    );
  }
}

const TouchableRow = props => {
  const { icon, text, onPress } = props;

  return (
    <TouchableView onPress={onPress}>
      <Icon source={icon} />
      <CustomText>{text}</CustomText>
    </TouchableView>
  );
};

const Logout = props => {
  const { onPress, children } = props;

  return (
    <LogoutTouchable onPress={() => onPress()}>
      <Icon source={exit} />
      <CustomText>{children}</CustomText>
    </LogoutTouchable>
  );
};

const Close = props => {
  const { onPress } = props;

  return (
    <TouchableOpacity onPress={() => onPress()}>
      <CloseImage />
    </TouchableOpacity>
  );
};

const CloseImage = styled.Image.attrs({
  source: closeSettings,
})`
  width: ${16 * WIDTH_REL};
  height: ${16 * HEIGHT_REL};
  margin-left: ${32 * WIDTH_REL};
  margin-top: ${52 * HEIGHT_REL};
`;

const Title = styled.Text`
  font-size: 24;
  font-weight: bold;
  color: ${SETTINGS_TEXT_COLOR};
  margin-top: ${40 * HEIGHT_REL};
  margin-left: ${32 * WIDTH_REL};
  margin-bottom: ${24 * HEIGHT_REL};
`;

const TouchableView = styled.TouchableOpacity`
  flex-direction: row;
  height: ${72 * HEIGHT_REL};
  border-top = solid;
  border-color: ${SETTINGS_BORDER_COLOR};
  border-top-width: 1;
  border-bottom-width: 1;
  align-items: center;
`;

const Icon = styled.Image`
  height: ${24 * HEIGHT_REL};
  width: ${30 * WIDTH_REL};
  resize-mode: contain;
  margin-left: ${32 * WIDTH_REL};
`;

const CustomText = styled.Text`
  font-size: 14;
  font-weight: bold;
  color: ${SETTINGS_TEXT_COLOR};
  margin-left: ${20 * WIDTH_REL};
`;

const LogoutTouchable = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  margin-top: ${216 * HEIGHT_REL};
`;

export default connect()(Settings);
