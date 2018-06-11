import React, { Component } from 'react';
import { TouchableOpacity, Text, Image } from 'react-native';
import { SceneWrapper } from '@components/Scene';
import styled from 'styled-components';
import { chevronLeftPurple, minus, plus } from '@assets/images';
import { HEIGHT_REL, WIDTH_REL } from '@theme';
import { MainButton } from '@components/Button';
import I18n from 'react-native-i18n';
import { TextBase, TextBaseBold } from '@components/Scene';
import { Actions } from 'react-native-router-flux';
import { LOADING_TITLE_COLOR } from '@theme';
import Input from '@components/Input';
import { get } from '@helpers';

class AddFriends extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: [],
      addedFriends: [],
      username: '',
      loading: false,
    };
  }

  _addFriend(user) {
    this.setState({ friends: [...this.state.addedFriends, user] });
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
    return (
      <ItemRow>
        <TextContainer>
          <RowTitle>{item.name}</RowTitle>
          <RowSubTitle>{`@${item.userName}`}</RowSubTitle>
        </TextContainer>
        <AddButton user={item} />
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
              if (value && value.length > 3) {
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

        <List
          data={this.state.friends}
          renderItem={({ item }) => this._renderCard(item)}
          keyExtractor={(item, index) => index}
        />
        <ButtonsView>
          <MainButton text="Continuar" onPress={() => Actions.pop()} />
        </ButtonsView>
      </SceneWrapper>
    );
  }
}

const AddButton = ({ item }) => (
  <TouchableOpacity onPress={this._addFriend(item)}>
    <ButtonImage
      source={this.state.addedFriends.includes(item) ? minus : plus}
    />
  </TouchableOpacity>
);

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

export default AddFriends;
