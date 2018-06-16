import React, { Component } from 'react';
import { TouchableOpacity, Alert } from 'react-native';
import { SceneWrapper } from '@components/Scene';
import styled from 'styled-components';
import { chevronLeftPurple, remove } from '@assets/images';
import { HEIGHT_REL, WIDTH_REL } from '@theme';
import { MainButton } from '@components/Button';
import I18n from 'react-native-i18n';
import { TextBaseBold } from '@components/Scene';
import { Actions } from 'react-native-router-flux';
import { LOADING_TITLE_COLOR } from '@theme';
import { post } from '@helpers';
import { connect } from 'react-redux';
import * as leaguesActions from '@redux/leagues/actions';

class AddedFriends extends Component {
  constructor(props) {
    super(props);
  }

  _createLeague() {
    const body = {
      guessLeagueName: this.props.leagueName,
      championshipRef: this.props.championship.championshipRef,
      userRefInviteads: this.props.addedFriends.map(item => item._id),
    };

    post(
      'https://iguess-666666.appspot.com/guessleague/createGuessLeague',
      body,
    )
      .then(response => {
        if (response.statusCode === 401) {
          console.log('errroooou');
        } else {
          Actions.reset('core', { activeSwiperScreen: 2 });
        }
      })
      .catch(() =>
        this.setState({
          errorMsg: I18n.t('serverErrorDefault'),
          loading: false,
        }),
      );
  }

  _removeFriend(user) {
    const { addedFriends, dispatch } = this.props;
    Alert.alert(
      'Deseja remover o usuário selecionado?',
      `Você está tentando remover o usuário ${user.name} da sua liga`,
      [
        { text: 'Cancelar' },
        {
          text: 'Remover',
          onPress: () => {
            dispatch(
              leaguesActions.updateAddedFriends(
                addedFriends.filter(item => item._id !== user._id),
              ),
            );
          },
        },
      ],
      { cancelable: false },
    );
  }

  _renderCard(item) {
    return (
      <ItemRow>
        <TextContainer>
          <RowTitle>{item.name}</RowTitle>
          <RowSubTitle>{`@${item.userName}`}</RowSubTitle>
        </TextContainer>
        <TouchableOpacity onPress={() => this._removeFriend(item)}>
          <ButtonImage source={remove} />
        </TouchableOpacity>
      </ItemRow>
    );
  }

  render() {
    const { addedFriends } = this.props;
    return (
      <SceneWrapper>
        <Close onPress={() => Actions.pop()} />
        <Title>AMIGOS ADICIONADOS</Title>
        <List
          data={addedFriends}
          renderItem={({ item }) => this._renderCard(item)}
          keyExtractor={(item, index) => index}
        />
        <ButtonsView>
          <MainButton
            text="Criar Minha Liga"
            onPress={() => this._createLeague()}
          />
        </ButtonsView>
      </SceneWrapper>
    );
  }
}

const TextContainer = styled.View``;

const ButtonImage = styled.Image`
  width: ${24 * HEIGHT_REL};
  height: ${24 * HEIGHT_REL};
  margin-vertical: ${8 * HEIGHT_REL};
`;

const ItemRow = styled.View`
  padding-top: ${10 * HEIGHT_REL};
  margin-bottom: ${6 * HEIGHT_REL};
  margin-horizontal: ${32 * WIDTH_REL};
  flex-direction: row;
  justify-content: space-between;
`;

const RowTitle = styled.Text`
  color: #4d6980;
  font-weight: bold;
`;

const RowSubTitle = styled.Text`
  font-size: ${12 * HEIGHT_REL};
  color: #4d6980;
`;

const List = styled.FlatList`
  margin-top: ${8 * HEIGHT_REL};
`;

const Close = props => {
  const { onPress } = props;

  return (
    <TouchableOpacity onPress={() => onPress()}>
      <CloseImage />
    </TouchableOpacity>
  );
};

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
  width: ${10 * WIDTH_REL};
  height: ${16 * HEIGHT_REL};
  margin-left: ${32 * WIDTH_REL};
  margin-top: ${26 * HEIGHT_REL};
`;

const ButtonsView = styled.View`
  flex: 1;
  margin-bottom: ${40 * HEIGHT_REL};
  justify-content: flex-end;
  align-items: center;
`;
const mapStateToProps = state => {
  return {
    leagueName: state.leagues.leagueName,
    addedFriends: state.leagues.addedFriends,
    championship: state.lines.activeLine.championship,
  };
};

export default connect(mapStateToProps)(AddedFriends);
