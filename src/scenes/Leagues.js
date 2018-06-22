import React, { Component } from 'react';
import { TouchableOpacity, Platform } from 'react-native';
import { NavBar, SceneWrapper } from '@components/Scene';
import styled from 'styled-components';
import Loading from '@scenes/Loading';
import { chevronLeftPurple, leagueBig, trophyRank } from '@assets/images';
import { HEIGHT_REL, WIDTH_REL } from '@theme';
import { MainIconButton } from '@components/Button';
import { TextBase, TextBaseBold } from '@components/Scene';
import { Actions } from 'react-native-router-flux';
import { LOADING_TITLE_COLOR, RATIO } from '@theme';
import { get } from '@helpers';
import I18n from 'react-native-i18n';

class Leagues extends Component {
  constructor(props) {
    super(props);
    this.state = {
      leagues: [],
      loading: true,
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
        this.setState(
          {
            leagues: response.guessLeaguesList,
          },
          () => this.setState({ loading: false }),
        );
      }
      this.setState({ loading: false });
    });
  }

  _renderCard(item) {
    return (
      <Card
        key={item._id}
        onPress={() => Actions.push('leaguedetails', { leagueId: item._id })}
      >
        <TrophyIcon />
        <Content>
          <LeagueNameText>{item.guessLeagueName}</LeagueNameText>
          <ChampionshipNameText>
            {item.championship.championship}
          </ChampionshipNameText>
          <NumberUsersText>{`${item.numberOfUsersAtLeague} ${I18n.t(
            'users',
          )}`}</NumberUsersText>
        </Content>
      </Card>
    );
  }

  render() {
    const { swipe } = this.props;
    const back = swipe ? swipe : () => Actions.reset('core');

    if (this.state.loading) {
      return <Loading />;
    }

    return (
      <SceneWrapper>
        {this.state.leagues.length > 0 && (
          <Content>
            <NavBar title={I18n.t('leaguesTitle')} onPress={back} />
            <List
              data={this.state.leagues}
              keyExtractor={item => item._id}
              renderItem={({ item }) => this._renderCard(item)}
            />
          </Content>
        )}

        {this.state.leagues.length <= 0 && (
          <Content>
            <Close onPress={back} />
            <ContainerView>
              <Title>{I18n.t('myLeaguesTitle')}</Title>
              <Subtitle>{I18n.t('myLeaguesSubTitle')}</Subtitle>
              <LeagueIcon />
              <SubtitleGray>{I18n.t('emptyLeaguesText')}</SubtitleGray>
            </ContainerView>
          </Content>
        )}
        <ButtonsView>
          <MainIconButton
            text={I18n.t('createLeagueText')}
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
  height: ${Platform.OS === 'ios' ? 480 * HEIGHT_REL : 460 * HEIGHT_REL};
`;

const LeagueNameText = styled.Text`
  margin-bottom: ${5 * HEIGHT_REL};
  color: ${LOADING_TITLE_COLOR};
  font-size: ${14 * HEIGHT_REL};
  font-weight: bold;
`;

const ChampionshipNameText = styled.Text`
  margin-bottom: ${5 * HEIGHT_REL};
  font-size: ${12 * HEIGHT_REL};
`;

const NumberUsersText = styled.Text`
  margin-bottom: ${5 * HEIGHT_REL};
  font-size: ${10 * HEIGHT_REL};
  color: #b2b7bb;
`;

const Card = styled.TouchableOpacity`
  flex-direction: row;
  width: ${340 * WIDTH_REL};
  height: ${100 * HEIGHT_REL};
  margin-top: ${28 * HEIGHT_REL};
  border-color: #d7e2ec;
  background-color: #fff;
  border-radius: ${16 * RATIO};
  border-width: ${1 * RATIO};
  align-self: center;
  align-items: center;
`;

const Content = styled.View``;

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

const LeagueIcon = styled.Image.attrs({
  source: leagueBig,
})`
  margin-top: ${60 * HEIGHT_REL};
  width: ${73 * WIDTH_REL};
  height: ${67 * HEIGHT_REL};
  resize-mode: contain;
`;

const TrophyIcon = styled.Image.attrs({
  source: trophyRank,
})`
  margin-left: ${15 * WIDTH_REL};
  margin-right: ${15 * WIDTH_REL};
  width: ${32 * WIDTH_REL};
  height: ${30 * HEIGHT_REL};
  resize-mode: contain;
`;

const CloseImage = styled.Image.attrs({
  source: chevronLeftPurple,
})`
  width: ${12 * WIDTH_REL};
  height: ${16 * HEIGHT_REL};
  margin-left: ${32 * WIDTH_REL};
  margin-top: ${Platform.OS === 'ios' ? 50 * HEIGHT_REL : 26 * HEIGHT_REL};
`;

const ContainerView = styled.View`
  justify-content: center;
  align-items: center;
`;

const ButtonsView = styled.View`
  align-items: center;
  justify-content: center;
  margin-top: ${10 * HEIGHT_REL};
`;

export default Leagues;
