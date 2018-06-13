import React, { Component } from 'react';
import { TouchableOpacity, Text, View, Platform } from 'react-native';
import { SceneWrapper } from '@components/Scene';
import styled from 'styled-components';
import { chevronLeftPurple, plusIcon, leagueBig } from '@assets/images';
import { HEIGHT_REL, WIDTH_REL } from '@theme';
import { MainButton } from '@components/Button';
import I18n from 'react-native-i18n';
import { TextBase, TextBaseBold } from '@components/Scene';
import { Actions } from 'react-native-router-flux';
import { LOADING_TITLE_COLOR, LOADING_SUBTITLE_COLOR, RATIO } from '@theme';
import { get } from '@helpers';

class Leagues extends Component {
  constructor(props) {
    super(props);
    this.state = {
      leagues: [],
    };
  }

  componentDidMount() {
    this.loadLeagues();
  }

  loadLeagues() {
    get(
      `https://iguess-666666.appspot.com/guessleague/listGuessesLeagues`,
    ).then(response => {
      if (response.statusCode !== 404) {
        this.setState({ leagues: response.guessLeaguesList });
      }
    });
  }

  _renderCard(item) {
    return (
      <Card key={item._id}>
        <Text>{item.guessLeagueName}</Text>
        <Text>{item.championship.championship}</Text>
        <Text>{`${item.numberOfUsersAtLeague} usuários`}</Text>
      </Card>
    );
  }

  render() {
    const { swipe } = this.props;
    console.log(this.state.leagues);
    return (
      <SceneWrapper>
        <Close onPress={swipe ? swipe : () => Actions.push('core')} />

        {this.state.leagues.length <= 0 && (
          <ContainerView>
            <Title>MINHAS LIGAS</Title>
            <Subtitle>
              Aqui você pode competir com seus amigos e ver quem acerta mais
              palpites
            </Subtitle>
            <LeagueBig />
            <SubtitleGray>Você ainda não tem nenhuma liga</SubtitleGray>
          </ContainerView>
        )}

        <List
          data={this.state.leagues}
          keyExtractor={item => item._id}
          renderItem={({ item }) => this._renderCard(item)}
        />

        <ButtonsView>
          <MainButton
            text="Criar uma Liga"
            onPress={() => Actions.push('createleague')}
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

const List = styled.FlatList`
  margin-top: ${8 * HEIGHT_REL};
`;

const Card = styled.View`
  flex-direction: column;
  width: ${280 * WIDTH_REL};
  height: ${80 * HEIGHT_REL};
  margin-bottom: ${Platform.OS === 'ios' ? 40 * HEIGHT_REL : 28 * HEIGHT_REL};
  border-color: #d7e2ec;
  background-color: #fff;
  padding-vertical: ${20 * HEIGHT_REL};
  border-radius: ${16 * RATIO};
  border-width: ${1 * RATIO};
  align-self: center;
`;

const Subtitle = styled(TextBase)`
  text-align: center;
  align-self: center;
  color: #333;
  margin-top: ${8 * HEIGHT_REL};
  margin-horizontal: ${32 * WIDTH_REL};
  font-size: ${16 * HEIGHT_REL};
`;

const SubtitleGray = styled(Subtitle)`
  color: #c6ccd2;
  margin-bottom: ${24 * HEIGHT_REL};
`;

const Title = styled(TextBaseBold)`
  text-align: center;
  align-self: center;
  color: ${LOADING_TITLE_COLOR};
  margin-horizontal: ${32 * WIDTH_REL};
  margin-top: ${72 * HEIGHT_REL};
  font-size: ${32 * WIDTH_REL};
`;

const LeagueBig = styled.Image.attrs({
  source: leagueBig,
})`
  margin-top: ${60 * HEIGHT_REL};
  width: ${73 * WIDTH_REL};
  height: ${67 * HEIGHT_REL};
`;

const CloseImage = styled.Image.attrs({
  source: chevronLeftPurple,
})`
  width: ${10 * WIDTH_REL};
  height: ${16 * HEIGHT_REL};
  margin-left: ${32 * WIDTH_REL};
  margin-top: ${26 * HEIGHT_REL};
`;

const ContainerView = styled.View`
  justify-content: center;
  align-items: center;
`;

const ButtonsView = styled.View`
  flex: 1;
  margin-bottom: ${40 * HEIGHT_REL};
  justify-content: flex-end;
  align-items: center;
`;

export default Leagues;
