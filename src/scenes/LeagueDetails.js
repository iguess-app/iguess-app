import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { NavBar, SceneWrapper } from '@components/Scene';
import styled from 'styled-components';
import { gold, bronze, silver } from '@assets/images';
import { HEIGHT_REL, WIDTH_REL } from '@theme';
import { TextBase, TextBaseBold } from '@components/Scene';
import { Actions } from 'react-native-router-flux';
import {
  LOADING_TITLE_COLOR,
  RATIO,
  DEFAULT_BACKGROUND,
  CARD_BORDER_COLOR,
  CARD_BACKGROUND_COLOR,
} from '@theme';
import { get } from '@helpers';

class Leagues extends Component {
  constructor(props) {
    super(props);
    this.state = {
      league: null,
    };
  }

  componentDidMount() {
    this.loadLeagues();
  }

  loadLeagues() {
    get(
      `https://iguess-666666.appspot.com/guessleague/getGuessLeague?guessLeagueRef=${
        this.props.leagueId
      }`,
    ).then(response => {
      if (response.statusCode !== 404) {
        this.setState({ league: response });
      }
    });
  }

  _renderPodium() {
    const { league } = this.state;
    const podiumImages = {
      1: gold,
      2: silver,
      3: bronze,
    };
    const podiumList = league.players.filter(item =>
      [1, 2, 3].includes(item.rankingPosition),
    );
    return podiumList.map(item => {
      return (
        <UserContent key={item._id}>
          <NameText>{item.name}</NameText>
          <ChampionshipNameText>{`@${item.userName}`}</ChampionshipNameText>
        </UserContent>
      );
    });
  }

  _renderCard(item) {
    return (
      <Card key={item.userRef}>
        <RankPosition>
          <RankText>{item.rankingPosition}</RankText>
        </RankPosition>
        <UserContent>
          <NameText>{item.name}</NameText>
          <ChampionshipNameText>{`@${item.userName}`}</ChampionshipNameText>
        </UserContent>
        <Points>
          <PointsText>{item.totalPontuation}</PointsText>
        </Points>
      </Card>
    );
  }

  render() {
    const { league } = this.state;

    return (
      league && (
        <SceneWrapper>
          <Content>
            <NavBar title="" onPress={() => Actions.pop()} />
            <HeaderLeague
              season={league.championship.season}
              championship={league.championship.championship}
              guessLeagueName={league.guessLeagueName}
            />

            {this._renderPodium()}
            <List
              data={league.players.filter(
                item => ![1, 2, 3].includes(item.rankingPosition),
              )}
              keyExtractor={item => item.userRef}
              renderItem={({ item }) => this._renderCard(item)}
            />
          </Content>
        </SceneWrapper>
      )
    );
  }
}

const HeaderLeague = ({ season, championship, guessLeagueName }) => (
  <NavWrapper source={DEFAULT_BACKGROUND}>
    <Year>{season}</Year>
    <Championship>{championship}</Championship>
    <LeagueName>{guessLeagueName}</LeagueName>
  </NavWrapper>
);

const CardPodium = styled.View`
  flex-direction: row;
  width: ${330 * WIDTH_REL};
  height: ${156 * HEIGHT_REL};
  margin-bottom: ${28 * HEIGHT_REL};
  border-color: ${CARD_BORDER_COLOR};
  background-color: ${CARD_BACKGROUND_COLOR};
  padding-vertical: ${20 * HEIGHT_REL};
  border-radius: ${16 * RATIO};
  border-width: ${1 * RATIO};
  align-self: center;
  align-items: center;
  justify-content: center;
`;

const NavWrapper = styled.ImageBackground`
  height: ${80 * HEIGHT_REL};
  z-index: 1;
`;
const Year = styled(TextBaseBold)`
  color: #fff;
  font-weight: bold;
  font-size: ${14 * HEIGHT_REL};
  margin-left: ${35 * WIDTH_REL};
`;
const Championship = styled(TextBaseBold)`
  color: #fff;
  font-weight: bold;
  font-size: ${14 * HEIGHT_REL};
  margin-left: ${35 * WIDTH_REL};
`;
const LeagueName = styled(TextBaseBold)`
  color: #fff;
  font-weight: bold;
  font-size: ${30 * HEIGHT_REL};
  margin-left: ${35 * WIDTH_REL};
`;

const List = styled.FlatList`
  margin-top: ${8 * HEIGHT_REL};
  height: ${480 * HEIGHT_REL};
`;

const ChampionshipNameText = styled(TextBase)`
  margin-bottom: ${5 * HEIGHT_REL};
  font-size: ${12 * HEIGHT_REL};
`;

const NameText = styled(TextBaseBold)`
  margin-bottom: ${5 * HEIGHT_REL};
  color: #000;
  font-size: ${14 * HEIGHT_REL};
  font-weight: bold;
`;

const Points = styled.View`
  width: ${50 * WIDTH_REL};
  height: ${30 * HEIGHT_REL};
  background: ${LOADING_TITLE_COLOR};
  border-radius: ${16 * RATIO};
  align-items: center;
  justify-content: center;
`;

const Podium = styled.ImageBackground`
  width: ${23 * WIDTH_REL};
  height: ${40 * HEIGHT_REL};
  align-items: center;
  justify-content: center;
  margin-right: ${20 * WIDTH_REL};
`;

const RankPosition = styled.View`
  width: ${23 * WIDTH_REL};
  height: ${23 * HEIGHT_REL};
  border-radius: ${16 * RATIO};
  align-items: center;
  justify-content: center;
  background-color: #18ec98;
  margin-right: ${20 * WIDTH_REL};
`;
const RankText = styled(TextBaseBold)`
  font-weight: bold;
  color: #fff;
  font-size: ${16 * HEIGHT_REL};
`;

const PointsText = styled(TextBase)`
  font-size: ${18 * HEIGHT_REL};
  font-weight: bold;
  color: #fff;
`;

const Card = styled.View`
  flex-direction: row;
  width: ${340 * WIDTH_REL};
  height: ${70 * HEIGHT_REL};
  background-color: #fff;
  align-self: center;
  align-items: center;
`;

const Content = styled.View``;
const UserContent = styled.View`
  width: ${240 * WIDTH_REL};
`;

export default Leagues;
