import React, { Component } from 'react';
import { TouchableOpacity, Platform } from 'react-native';
import { SceneWrapper } from '@components/Scene';
import styled from 'styled-components';
import { chevronLeftPurple } from '@assets/images';
import { HEIGHT_REL, WIDTH_REL } from '@theme';
import { MainButton } from '@components/Button';
import I18n from 'react-native-i18n';
import { TextBase, TextBaseBold } from '@components/Scene';
import { Actions } from 'react-native-router-flux';
import { LOADING_TITLE_COLOR } from '@theme';
import Input from '@components/Input';
import * as leaguesActions from '@redux/leagues/actions';
import { connect } from 'react-redux';

class CreateLeague extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };
  }

  _updateLeagueName() {
    this.props.dispatch(leaguesActions.updateLeagueName(this.state.name));
  }

  render() {
    return (
      <SceneWrapper>
        <Close onPress={() => Actions.pop()} />
        <Title>{I18n.t('createLeagueTitle').toLocaleUpperCase()}</Title>
        <Subtitle>{I18n.t('createLeagueSubTitle')}</Subtitle>
        <TextInput
          placeholder={I18n.t('nameOfLeagueLabel')}
          value={this.state.name}
          onChangeText={value => this.setState({ name: value })}
          autoCapitalize="none"
          maxLength={25}
        />
        <ButtonsView>
          <MainButton
            text={I18n.t('continueText')}
            isDisable={this.state.name.length < 3}
            onPress={() => {
              this._updateLeagueName();
              Actions.push('addfriends');
            }}
          />
        </ButtonsView>
      </SceneWrapper>
    );
  }
}

const Close = props => {
  const { onPress } = props;

  return (
    <TouchableOpacity onPress={() => onPress()}>
      <CloseImage />
    </TouchableOpacity>
  );
};

const Subtitle = styled(TextBase)`
  text-align: center;
  align-self: center;
  color: #333;
  margin-top: ${8 * HEIGHT_REL};
  margin-horizontal: ${32 * WIDTH_REL};
  font-size: ${16 * HEIGHT_REL};
`;

const Title = styled(TextBaseBold)`
  text-align: center;
  align-self: center;
  color: ${LOADING_TITLE_COLOR};
  margin-horizontal: ${32 * WIDTH_REL};
  margin-top: ${72 * HEIGHT_REL};
  font-size: ${32 * WIDTH_REL};
`;

const CloseImage = styled.Image.attrs({
  source: chevronLeftPurple,
})`
  width: ${15 * WIDTH_REL};
  height: ${24 * HEIGHT_REL};
  resize-mode: contain;
  margin-left: ${32 * WIDTH_REL};
  margin-top: ${Platform.OS === 'ios' ? 50 * HEIGHT_REL : 26 * HEIGHT_REL};
`;

const TextInput = styled(Input)`
  margin-top: ${48 * HEIGHT_REL};
  margin-horizontal: ${32 * WIDTH_REL};
`;

const ButtonsView = styled.View`
  flex: 1;
  margin-bottom: ${40 * HEIGHT_REL};
  justify-content: flex-end;
  align-items: center;
`;

export default connect()(CreateLeague);
