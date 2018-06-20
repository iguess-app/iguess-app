import React, { Component } from 'react';
import { TouchableOpacity, Platform } from 'react-native';
import { SceneWrapper } from '@components/Scene';
import styled from 'styled-components';
import { chevronLeftPurple, added, plus } from '@assets/images';
import { HEIGHT_REL, WIDTH_REL } from '@theme';
import { MainButton } from '@components/Button';
import { TextBaseBold } from '@components/Scene';
import { Actions } from 'react-native-router-flux';
import { LOADING_TITLE_COLOR } from '@theme';
import Input from '@components/Input';
import { get } from '@helpers';
import * as leaguesActions from '@redux/leagues/actions';
import { connect } from 'react-redux';

class AddFriends extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: [],
      username: '',
      loading: false,
    };
  }

  _addFriend(user) {
    this._updateAddedFriends(this.props.addedFriends.concat([user]));
  }

  _updateAddedFriends(addedFriends) {
    this.props.dispatch(leaguesActions.updateAddedFriends(addedFriends));
  }

  searchUsers(username) {
    this.setState({ loading: true });
    get(
      `https://iguess-666666.appspot.com/profiles/search?searchField=${username}`,
    ).then(response => {
      if (response.statusCode !== 404) {
        this.setState({ friends: response }, () => {
          setTimeout(() => this.setState({ loading: false }), 2500);
        });
      } else {
        this.setState({ loading: false });
      }
    });
  }

  _renderCard(item) {
    const isAdded = this.props.addedFriends.find(
      friend => friend._id === item._id,
    );

    return (
      <ItemRow>
        <TextContainer>
          <RowTitle>{item.name}</RowTitle>
          <RowSubTitle>{`@${item.userName}`}</RowSubTitle>
        </TextContainer>
        <TouchableOpacity
          onPress={!isAdded ? () => this._addFriend(item) : null}
        >
          <ButtonImage source={isAdded ? added : plus} />
        </TouchableOpacity>
      </ItemRow>
    );
  }

  render() {
    return (
      <SceneWrapper>
        <Close onPress={() => Actions.pop()} />
        <Title>ADICIONAR AMIGOS</Title>
        <TextInput
          placeholder="Buscar por @usuario"
          value={this.state.username}
          onChangeText={value =>
            this.setState({ username: value }, () => {
              if (value && value.length >= 3) {
                this.searchUsers(value);
              } else {
                this.setState({
                  friends: [],
                });
              }
            })
          }
          autoCapitalize="none"
          maxLength={25}
        />
        <Content>
          <List
            data={this.state.friends}
            renderItem={({ item }) => this._renderCard(item)}
            keyExtractor={(item, index) => index}
          />
        </Content>
        <ButtonsView>
          <MainButton
            text="Continuar"
            isDisable={this.props.addedFriends.length <= 0}
            onPress={() => {
              this.setState({
                username: '',
                friends: [],
              });
              Actions.push('addedfriends', { leagueId: this.props.leagueId });
            }}
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
  height: ${290 * HEIGHT_REL};
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
  width: ${12 * WIDTH_REL};
  height: ${16 * HEIGHT_REL};
  margin-left: ${32 * WIDTH_REL};
  margin-top: ${Platform.OS === 'ios' ? 50 * HEIGHT_REL : 26 * HEIGHT_REL};
`;

const TextInput = styled(Input)`
  margin-top: ${48 * HEIGHT_REL};
  margin-horizontal: ${32 * WIDTH_REL};
`;

const ButtonsView = styled.View`
  align-items: center;
  justify-content: center;
  margin-top: ${10 * HEIGHT_REL};
`;

const Content = styled.View``;

const mapStateToProps = state => {
  return {
    addedFriends: state.leagues.addedFriends,
  };
};

export default connect(mapStateToProps)(AddFriends);
